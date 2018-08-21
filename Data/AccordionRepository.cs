using AccordionFair.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NBitcoin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Data
{
    public class AccordionRepository : IAccordionRepository
    {
        private readonly AccordionContext ctx;
        private readonly ILogger<AccordionRepository> logger;

        public AccordionRepository(AccordionContext ctx, ILogger<AccordionRepository> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }


        public void AddEntity(object model) // ne svidja mi se  // generic shit
        {
            ctx.Add(model);
        }

        public void UpdateEntity(object model)
        {
            ctx.Update(model);
        }

        public void AddOrder(Order newOrder)
        {
            //  Convert new products to lookup of product
            foreach(var item in newOrder.Items)
            {
                item.Product = ctx.Products.Find(item.Product.Id);
            }
            AddEntity(newOrder);
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return ctx.Orders
                .Include(o => o.User)
               .Include(o => o.Transactions)
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .ToList();
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if(includeItems == true)
            {
                return ctx.Orders
              .Include(o => o.User)
              .Include(o => o.OrderDate) // test if single value nav properties require include
              .Include(o => o.Transactions)
              .Include(o => o.Items)
              .ThenInclude(i => i.Product)
              .ToList();
            }
            else
            {
                return ctx.Orders.ToList();
            }
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return ctx.Orders
                  .Where(o => o.User.UserName == username)
                  .Include(o => o.Transactions)
                  .Include(o => o.Items)
                  .ThenInclude(i => i.Product)
                  .ToList();
            }
            else
            {
                return ctx.Orders
                    .Where(o => o.User.UserName == username)
                    .ToList();
            }

        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                logger.LogInformation("GetAllProducts was called");
                return ctx.Products
                        .OrderBy(p => p.Title)
                        .ToList();
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public Order GetOrderByBitcoinAddress(string bitcoinAddress)
        {
            try
            {
                logger.LogInformation("GetOrderByBitcoinAddress was called");
                return ctx.Orders
                    .Where(o => o.BitcoinAddress == bitcoinAddress)
                    .Include(o => o.User)
                    .Include( o => o.Items)
                    .Include( o => o.Transactions)
                    .FirstOrDefault<Order>();
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get order for this BTC  address: {ex}");
                return null;
            }
        }

        public Order GetOrderById(int id) // better to disable this one -- if someone asks for order thats not theirs, it will get null
        {
            return ctx.Orders
               .Include(o => o.Items)
               .ThenInclude(i => i.Product)
               .Where(o => o.Id == id)
               .FirstOrDefault();
        }

        public Order GetOrderById(string username, int orderId)
        {
            return ctx.Orders
               .Where(o => o.User.UserName == username && o.Id == orderId)
               .Include(o => o.Items)
               .ThenInclude(i => i.Product)
               .FirstOrDefault();
        }

        public Order GetOrderByOrderNumber(string orderNumber)
        {
            return ctx.Orders
              .Where(o => o.OrderNumber == orderNumber)
              .Include(o => o.Items)
              .ThenInclude(i => i.Product)
              .FirstOrDefault();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return ctx.Products
                    .Where(p => p.Category == category);
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
