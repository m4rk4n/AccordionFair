using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NBitcoin;
using NBitcoin.RPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Controllers
{
    [Route("api/[Controller]")]
    public class BlockController
    {
        private readonly IAccordionRepository repo;
        private readonly SignInManager<StoreUser> signInManager;
        private readonly UserManager<StoreUser> userManager;
        private readonly ILogger<BlockController> logger;
        private readonly IMailService mailService;

        public BlockController(IAccordionRepository repo,
                                SignInManager<StoreUser> signInManager,
                                UserManager<StoreUser> userManager,
                                ILogger<BlockController> logger,
                                IMailService mailService
                                )
        {
            this.repo = repo;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.logger = logger;
            this.mailService = mailService;
        }

        [HttpGet("{id}")]
        public async Task GetAsync(string id) //id is blockId
        {
            RPCCredentialString cred = new RPCCredentialString();
            cred.UserPassword = new NetworkCredential("marko", "nekadugasifra");
            RPCClient client = new RPCClient(cred, Network.TestNet);



            // var from = "Mailgun Sandbox <postmaster@sandbox373a0adacb504546b940efac85bb4e7a.mailgun.org>";
            //var to = "Marko Filipovic <markofilipovicnt@hotmail.com>";
            //string subject = "stelovanje maila";
            //string body = "Ovdje ce ici poruka kad je bude!";
            //await mailService.SendEmailAsync(to ,subject, body);



            foreach (var order in repo.GetAllOrders())
            {
                if (order.DisregardOrder)
                    continue;

                if (order.OrderDate.AddDays(2) < DateTime.Now && order.ReceivedValue == 0) // 2 days or more has passed since order has been placed and nothing has been payed
                    order.DisregardOrder = true;


                if (!order.OrderTransactionsConfirmed && order.ReceivedValue > 0) // if there are unconfirmed txes
                {
                    var confirmed = true; // flag
                    foreach (var tx in order.Transactions)
                    {
                        if (client.GetRawTransactionInfo(uint256.Parse(tx.TransactionId)).Confirmations < 6) // tx has less than six confirms
                        {
                            confirmed = false;
                            break;
                        }

                        if (order.ReceivedValue > 0 && confirmed == true) // all transactions are confirmed and there has been at least some payment
                        {
                            order.OrderTransactionsConfirmed = true;
                            // send mail
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

            // foreach order
            //  foreach tx in order
            //      
            //      if tx.conf < 6
            //          break  // predji na sljedeci order
            //      

        }
    }
}
