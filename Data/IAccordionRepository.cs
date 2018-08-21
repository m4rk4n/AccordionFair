using System.Collections.Generic;
using System.Threading.Tasks;
using AccordionFair.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using NBitcoin;

namespace AccordionFair.Data
{
    public interface IAccordionRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        bool SaveAll();

        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrders();
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);

        Order GetOrderByOrderNumber(string orderNumber);
        Order GetOrderById(int id);
        Order GetOrderById(string username, int orderId);
        Order GetOrderByBitcoinAddress(string bitcoinAddress);
        void AddOrder(Order newOrder);


        void AddEntity(object model);
        void UpdateEntity(object model);
    }
}