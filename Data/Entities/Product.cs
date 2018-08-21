using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Data.Entities
{
  public class Product
  {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Size { get; set; }
        public double Price { get; set; }
        public string Title { get; set; }
        public int Keys { get; set; }
        public string Reeds { get; set; }
        public string Registers { get; set; }
        public int Basses { get; set; }
        public string Weight { get; set; }
        public bool Cassoto { get; set; }
        public string ArtId { get; set; }
    }
}
