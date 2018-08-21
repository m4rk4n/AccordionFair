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

namespace AccordionFair.Controllers
{

    [Route("api/[Controller]")]
    // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    // razmislit jel ovde potrebna autorizacija
    public class NotificationController
    {
        private readonly double btcPrice = 8005.99;
        private readonly ILogger<NotificationController> logger;
        private readonly IAccordionRepository repo;
        private readonly IHubContext<NotifyHub> hub;
        private readonly SignInManager<StoreUser> signInManager;
        private readonly UserManager<StoreUser> userManager;

        public NotificationController(IAccordionRepository repo, 
                                        IHubContext<NotifyHub> hub, 
                                        ILogger<NotificationController> logger, 
                                        SignInManager<StoreUser> signInManager, 
                                        UserManager<StoreUser> userManager)
        {
            this.logger = logger;
            this.repo = repo;
            this.hub = hub;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }

        [HttpGet("{id}")]
        public async Task GetAsync(string id) //id is txid
        {
            RPCCredentialString cred = new RPCCredentialString();
            cred.UserPassword = new NetworkCredential("marko", "nekadugasifra");
            RPCClient client = new RPCClient(cred, Network.TestNet);

            // handleat slucaj kad je primljena transakcija, a nema socketa
            // var tx =  await client.GetRawMempoolAsync();
            var transaction = await client.GetRawTransactionAsync(uint256.Parse(id), false);

            // potreban mi je elegantniji nacin za dohvatit adresu
            var adres = transaction.Outputs[0].ScriptPubKey.GetDestinationAddress(Network.TestNet); //  da ne ostane null nedaj boze
            foreach (var output in transaction.Outputs)
            {
                if (output.ScriptPubKey.GetDestinationAddress(Network.TestNet).ToString().StartsWith("2"))
                {
                    adres = output.ScriptPubKey.GetDestinationAddress(Network.TestNet);
                }
            }

            // dohvatiti order za dobivenu adresu transakcije
            
            var order = repo.GetOrderByBitcoinAddress(adres.ToString());
            if  (order == null)
            {
                // nema ordera s adresom na koju je dosla transakcija
                return; 
            }


            // vidjeti jel transakcija dodana u order, ako je, izac ili nesto, ako nije dodat i propagirat
            if (order.Transactions  !=  null)
            foreach(var tx in order.Transactions.ToList())
            {
                if(tx.TransactionId == id) // ta transakcija vec spremljena
                {
                    return ; 
                }
            }
            else
            {
                order.Transactions = new List<OrderTransaction>();
            }

            var subtotal = order.Items.Sum(i => i.Quantity * i.UnitPrice);

            var totrecbyadr = await client.GetReceivedByAddressAsync(adres, 0);
            var totalReceivedFromAddress = (double)totrecbyadr.ToDecimal(MoneyUnit.BTC);
            var receivedInThisTransaction = totalReceivedFromAddress - order.ReceivedValue;
            order.ReceivedValue = totalReceivedFromAddress;
            order.Transactions.Add(
                new OrderTransaction
                {
                    // nadam se da ce OrderId bit postavljen automatski - i hoce
                    // neki bezze komentar, cisto da vidimo kako git radi
                    TransactionId = id,
                    Amount = receivedInThisTransaction
                });

            double paymentDifference = 0;
            string message = "";
            if (totalReceivedFromAddress * btcPrice == subtotal)
            {
                order.OrderPaymentValid = true;
            }
            else if (totalReceivedFromAddress  * btcPrice > subtotal)
            {
                paymentDifference = (order.ReceivedValue * btcPrice - subtotal)/btcPrice;
                order.OrderPaymentValid = true; // na klijentu different logic, ovde true ima smisla zbog servisa jednom dnevno
                order.MoreThanNecessary = true;
            }
            else
            {
                message += $"Transaction received, you need to pay {(subtotal - order.ReceivedValue * btcPrice)/btcPrice} more to satisfy the order.";
            }
                // repo.update() 
                // update ni ne treba, sam ga attachment tracker skonta da je changed i spremi nove vrijednosti u bazu

                var receivedAmountToUSD = receivedInThisTransaction * btcPrice;

            if (receivedAmountToUSD >= subtotal)
                order.OrderPaymentValid = true; // mozda jos neke logike ako je vece od receivedValue

            if (receivedAmountToUSD > subtotal)
                order.MoreThanNecessary = true;

            if (!repo.SaveAll()) // saveChanges is zero, save all didnt save anything
            {
                logger.LogError("Nothing has been saved");
            }
            logger.LogInformation($"Transaction with ID: {id} was called for address {adres.ToString()} with {receivedInThisTransaction} btc");

            var txLog = $"{receivedInThisTransaction.ToString("F8") } has been received";

            // await hub.Clients.Group(User.Identity.Name).SendAsync("ReceiveNotification", poruka); // uvijek preostaj clients.All
           // userManager.Users.FirstOrDefault(u => u.Id == order.User.Id);
           // skontat sta cu za vise korisnika istovremeno, napravit grupe...
           // txid, txamount, totalamountpayed
          //  await hub.Clients.All.SendAsync("ReceiveNotification", id, receivedInThisTransaction, totalReceivedFromAddress); // uvijek preostaj clients.All

            await hub.Clients.Group(order.User.UserName).SendAsync("ReceiveNotification", id, receivedInThisTransaction, totalReceivedFromAddress);
        }
    }
}
