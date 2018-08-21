
using System.ComponentModel.DataAnnotations;

namespace AccordionFair.ViewModels
{
    public class OrderItemViewModel // flattening
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }

        [Required]
        public int ProductId { get; set; }

        public string ProductCategory { get; set; }
        public string ProductSize { get; set; }
        public string ProductTitle { get; set; }
        public string ProductRegisters { get; set; }
        public string ProductWeight { get; set; }
        public bool ProductCassoto { get; set; }
        public string ProductArtId { get; set; }


    }
}