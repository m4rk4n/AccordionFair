using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using NBitcoin;
using NBitcoin.RPC;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System;

namespace AccordionFair.Controllers
{

    [Route("api/[Controller]")]
    public class NotificationController
    {
        private readonly ILogger<NotificationController> logger;
        private readonly IAccordionRepository repo;
        private readonly IHubContext<NotifyHub> hub;

        public NotificationController(IAccordionRepository repo, 
                                        IHubContext<NotifyHub> hub, 
                                        ILogger<NotificationController> logger)
        {
            this.logger = logger;
            this.repo = repo;
            this.hub = hub;
        }

        [HttpGet("{id}")]
        public async Task GetAsync(string id) //id is txid
        {
            RPCCredentialString cred = new RPCCredentialString();
            cred.UserPassword = new NetworkCredential("marko", "nekadugasifra");
            RPCClient client = new RPCClient(cred, Network.TestNet);

          
            var transaction = await client.GetRawTransactionAsync(uint256.Parse(id), false);

            Order order = null;
            BitcoinAddress orderAddress = null;
            foreach (var output in transaction.Outputs) // looping through tx outputs and searching for address that has an order
            {
                order = repo.GetOrderByBitcoinAddress(output.ScriptPubKey.GetDestinationAddress(Network.TestNet).ToString());
                
                if (order != null)
                {
                    logger.LogInformation("Found order for received transaction. " + System.DateTime.Now);
                    orderAddress = output.ScriptPubKey.GetDestinationAddress(Network.TestNet);
                    break;
                }
            }

            if (order == null) 
            {
                logger.LogInformation($"Could not find order for received transaction. " + System.DateTime.Now);
                return;
            }

            if (order.Transactions  !=  null)
            {
                foreach(var tx in order.Transactions.ToList())
                {
                    if(tx.TransactionId == id)
                    {
                        logger.LogInformation("That transaction hass been added to order already. " + System.DateTime.Now);
                        return; 
                    }
                }
            }
            else
            {
                order.Transactions = new List<OrderTransaction>();
            }
                
            var subtotal = order.Items.Sum(i => i.Quantity * i.UnitPrice);
            var totrecbyadr = await client.GetReceivedByAddressAsync(orderAddress, 0); // 0 confirmations
            var totalReceivedFromAddress = (double)totrecbyadr.ToDecimal(MoneyUnit.BTC);
            var receivedInThisTransaction = Math.Round(totalReceivedFromAddress - order.ReceivedValue, 8);
            order.ReceivedValue = totalReceivedFromAddress;
            order.Transactions.Add(
                new OrderTransaction
                {
                    TransactionId = id,
                    Amount = receivedInThisTransaction
                });
            logger.LogInformation("transaction for order has been added. " + System.DateTime.Now);

            if (totalReceivedFromAddress * order.BitcoinPrice == subtotal)
            {
                order.OrderPaymentValid = true;
            }
            else if (totalReceivedFromAddress  * order.BitcoinPrice > subtotal)
            {
                order.OrderPaymentValid = true;
                order.MoreThanNecessary = true;
            }

            var receivedAmountToUSD = receivedInThisTransaction * order.BitcoinPrice;

            if (receivedAmountToUSD >= subtotal)
                order.OrderPaymentValid = true;

            if (receivedAmountToUSD > subtotal)
                order.MoreThanNecessary = true;

            if (!repo.SaveAll()) // saveChanges is zero, save all didnt save anything
            {
                logger.LogError("Nothing has been saved " + System.DateTime.Now);
            }
            logger.LogInformation($"Transaction with ID: {id} was called for address {orderAddress.ToString()} with {receivedInThisTransaction} btc");

            await hub.Clients.Group(order.User.UserName).SendAsync("ReceiveNotification", id, receivedInThisTransaction, totalReceivedFromAddress);
        }
    }
}
