using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using NBitcoin;
using NBitcoin.RPC;
using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AccordionFair.Controllers
{
    [Route("api/[Controller]")]
    public class BlockController
    {
        private readonly IAccordionRepository repo;
        private readonly ILogger<BlockController> logger;
        private readonly IMailService mailService;
        private readonly IConfiguration config;

        public BlockController(IAccordionRepository repo,
                                ILogger<BlockController> logger,
                                IMailService mailService,
                                IConfiguration config
                                )
        {
            this.repo = repo;
            this.logger = logger;
            this.mailService = mailService;
            this.config = config;
        }

        [HttpGet("{id}")]
        public async Task GetAsync(string id) //id is blockId
        {
            logger.LogInformation("New block has been mined");

            RPCCredentialString cred = new RPCCredentialString();
            cred.UserPassword = new NetworkCredential(config["NodeCredentials:RPCUser"], config["NodeCredentials:RPCPassword"]);
            RPCClient client = new RPCClient(cred, Network.TestNet);


            var unspent = client.ListUnspent();

            foreach (var order in repo.GetAllOrders())
            {
                if (order.DisregardOrder || order.OrderTransactionsConfirmed)
                    continue;

                if (order.OrderDate.AddMinutes(15) < DateTime.Now && order.ReceivedValue < order.OrderTotalInBitcoin) //15 minutes or more has passed since order has been placed and payment did not met the requirements
                    order.DisregardOrder = true;


                if (!order.OrderTransactionsConfirmed && order.ReceivedValue > 0) // if there are unconfirmed txes
                {
                    bool confirmed = true;

                    foreach (var unspentOutput in unspent.Where(tx => tx.Address.ToString() == order.BitcoinAddress))
                    {
                        if (unspentOutput.Confirmations < 6) // one of transactions of order has less than 6 confirmations
                        {
                            confirmed = false; //  transactions for this order have not been confirmed
                            break;
                        }
                    }

                    if (confirmed == true) // all transactions are confirmed and there has been at least some payment
                    {
                        order.OrderTransactionsConfirmed = true;
                        await mailService.SendEmailAsync(
                                order.User.Email,
                                "Your Transactions have been confirmed!",
                                $"Accordion Fair is pleased to inform you that your transactions for order {order.OrderNumber} have been confirmed."
                                );

                        repo.SaveAll();
                    }
                }
            }
        }
    }
}
