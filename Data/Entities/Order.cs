using NBitcoin;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Data.Entities
{
  public class Order
  {
    [Key]
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public string OrderNumber { get; set; }
    public ICollection<OrderItem> Items { get; set; }
    public StoreUser User { get; set; }
    public string BitcoinAddress { get; set; }
    public ICollection<OrderTransaction> Transactions { get; set; }
    public double ReceivedValue { get; set; }
    public bool OrderPaymentValid { get; set; }
    public bool OrderTransactionsConfirmed { get; set; }
    public bool MoreThanNecessary { get; set; }
    public bool DisregardOrder { get; set; }
    public double BitcoinPrice { get; set; }
    public double OrderTotalInUSD { get; set; }
    public double OrderTotalInBitcoin { get; set; }
  }
}
