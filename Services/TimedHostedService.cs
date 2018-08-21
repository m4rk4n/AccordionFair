using AccordionFair.Data;
using AccordionFair.Data.Entities;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NBitcoin;
using NBitcoin.RPC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AccordionFair.Services
{
    internal class TimedHostedService : IHostedService, IDisposable
    {
        private readonly RPCClient client;
        private readonly List<Order> orders;
        private readonly List<Transaction> transactions;
        private readonly List<Transaction> walletTransactions;
        private readonly IAccordionRepository repo;
        private readonly ILogger _logger;
        private Timer _timer;

        public TimedHostedService(ILogger<TimedHostedService> logger, IAccordionRepository repository)
        {
            _logger = logger;
            this.repo = repository;

            orders = new List<Order>();
                transactions = new List<Transaction>();
            walletTransactions = new List<Transaction>();

            RPCCredentialString cred = new RPCCredentialString();
            cred.UserPassword = new NetworkCredential("marko", "nekadugasifra");

             client = new RPCClient(cred, Network.TestNet);
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Background Service is starting.");

            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(12));

            return Task.CompletedTask;
        }

        private async void DoWork(object state)
        {

            // Transaction tip iz libraryja nema transactionId. za ranit se
            // dodaj i logere nek ide zivot
            _logger.LogInformation("Timed Background Service is working.");
            uint256[] mempool = await client.GetRawMempoolAsync();
           if (orders.Count == 0  && transactions.Count == 0)
            {
                // add tx's
                foreach( var txid in mempool)
                {
                    var rawTransaction = await client.GetRawTransactionAsync(txid);
                    transactions.Add(rawTransaction);
                }
                _logger.LogInformation("Raw transactions added.");

                orders.AddRange(repo.GetAllOrders(includeItems:false).ToList());
                _logger.LogInformation("Orders Added.");
                // update resolved orders
                foreach (var o in orders)
                {
                    foreach(var tx in transactions)
                    {
                        // handle only tx's with 1 output which has scriptPubKey
                       var adr =  tx.Outputs[0].ScriptPubKey.GetDestinationAddress(Network.TestNet);
                        // matched our address  with address from pool of tx's
                        if(adr.ToString() == o.BitcoinAddress)
                        {
                            walletTransactions.Add(tx);
                            _logger.LogInformation("Wallet transaction detected.");
                            var hash = tx.GetHash();
                            await new HttpClient().GetAsync($"http://localhost:8888/OrderAddress/Notify/{hash.ToString()}");
                        }
                    }
                }
            }

            var updateMempool = await client.GetRawMempoolAsync();
                if (updateMempool.Except(mempool) != null)
                {
                    foreach(var newtx in updateMempool)
                    {
                        var newtxRaw = await client.GetRawTransactionAsync(newtx);
                        transactions.Add(newtxRaw);
                    }
                }
            _logger.LogInformation("Mempool updated.");

            // add new orders
            var updateOrders = repo.GetAllOrders(includeItems: false).ToList().Except(orders); 
            if (updateOrders != null)
            {
                orders.AddRange(updateOrders);
            }
            _logger.LogInformation("Orders updated.");
            // refresh transaction list if there is more than 10000 tx
            if (transactions.Count > 10000)
            {
                transactions.RemoveRange(0, transactions.Count);
                mempool = await client.GetRawMempoolAsync();
                foreach (var txid in mempool)
                {
                    var rawTransaction = await client.GetRawTransactionAsync(txid);
                    transactions.Add(rawTransaction);
                }
            }
            _logger.LogInformation("Mempool Refreshed.");





            // if not  initialized()
            // get all orders that are not resolved

            // getrawmempool
            // foreach tx add tx to list

            // foreach order foreach tx check if tx is for  my order
            // if it is, add it to wallet transactions
            //  if initialized
            // add new transactions -- foreach getrawmempool.txid - if txid not in list, call to add it
            // if List<Transaction>.count  > 10000, delete  all and add all
            // add new orders -- if repo.orders.count > orders.count (easy way -  delete orders, add all orders, hard way - foreach repo.orders foreach orders if flagFound=false, find(), add )
            // update orders - resolved or not

        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Background Service is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
