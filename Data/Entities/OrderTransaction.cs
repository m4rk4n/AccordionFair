

namespace AccordionFair.Data.Entities
{
    public class OrderTransaction
    {
        public int Id { get; set; }
        public string TransactionId { get; set; }
        public Order Order { get; set; }
        public double Amount { get; set; }
    }
}
