using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.Services;
using AccordionFair.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.AspNetCore.SignalR;
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
   // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
   // razmislit jel ovde potrebna autorizacija
    public class OrderAddressController : Controller
    {
        private readonly ILogger<OrderAddressController> logger;
        private readonly IMapper mapper;
        private readonly IAccordionRepository repo;
        // private readonly IHubContext<NotifyHub> hub;

        public OrderAddressController(IAccordionRepository repo, IHubContext<NotifyHub> hub, IMapper mapper, ILogger<OrderAddressController> logger)
        {
            this.repo = repo;
           // this.hub = hub;
            this.mapper = mapper;
            this.logger = logger;
        }

        // id is order.OrderNumber, in checkout.component.ts
        //public IActionResult ShowOrderAddress(string id)
        //{
        //    var order = repo.GetOrderByOrderNumber(id); //get order by ordernumber

        //    return  View(order); 
        //}

        [HttpGet("{id}")]
        public IActionResult Get(string id) // returns Order with bitcoinAddress for given OrderNumber
        {
            try
            {
                var order = repo.GetOrderByOrderNumber(id.ToString()); // id is orderNumber
                object adr = order.BitcoinAddress; // client interpret this as error message if sent as string

                if (order != null)
                    return Ok(order);
                else
                    return NotFound();
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to retrieve order with OrderNumber: {id}, exception: {ex}");
                return BadRequest($"Failed to retrieve order with OrderNumber: {id}");
            }
        }

        //[HttpGet("{id}")]
        //public async Task Notify(string id) //id is txid
        //{
        //    //if (User.Identity.Name != null)
        //    //    return; //ask for login
        //    //=================================================================================================================
        //    RPCCredentialString cred = new RPCCredentialString();
        //    cred.UserPassword = new NetworkCredential("marko", "nekadugasifra");
        //    RPCClient client = new RPCClient(cred, Network.TestNet);

        //    // handleat slucaj kad je primljena transakcija, a nema socketa
        //  // var tx =  await client.GetRawMempoolAsync();
        //    var transaction = await client.GetRawTransactionAsync(uint256.Parse(id), false);
        //    var adres = transaction.Outputs[0].ScriptPubKey.GetDestinationAddress(Network.TestNet); //  da ne ostane null nedaj boze
        //    foreach (var output in transaction.Outputs)
        //    {
        //        if (output.ScriptPubKey.GetDestinationAddress(Network.TestNet).ToString().StartsWith("2"))
        //        {
        //             adres = output.ScriptPubKey.GetDestinationAddress(Network.TestNet);
        //        }
        //    }
        //    //var adres = transaction.Outputs[0].ScriptPubKey.GetScriptAddress(Network.TestNet);
        //    //var adres2 = transaction.Outputs[0].ScriptPubKey.GetDestinationAddress(Network.TestNet);
        //    //var adres3 = transaction.Outputs[1].ScriptPubKey.GetScriptAddress(Network.TestNet);
        //    //var adres4 = transaction.Outputs[1].ScriptPubKey.GetDestinationAddress(Network.TestNet);

        //    // test for address
        //    var receivedAmount = transaction.Outputs
        //        .Where(o => o.ScriptPubKey.GetDestinationAddress(Network.TestNet) == adres)
        //        .FirstOrDefault()
        //        .Value;//await client.GetReceivedByAddressAsync(adres, 0);

        //    var btc = receivedAmount.ToUnit(MoneyUnit.BTC); // testirat kako radi sa txovima  s 0 conf
        //    //var order = repo.GetOrderByBitcoinAddress(adres.ToString());
            
        //    var poruka = $"{btc} has been received";
        //    // await hub.Clients.Group(User.Identity.Name).SendAsync("ReceiveNotification", poruka); // uvijek preostaj clients.All
        //    await hub.Clients.All.SendAsync("ReceiveNotification", poruka ); // uvijek preostaj clients.All

        //    //=================================================================================================================
        //}
    }
}