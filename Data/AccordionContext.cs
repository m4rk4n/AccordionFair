using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccordionFair.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace AccordionFair.Data
{
    public class AccordionContext : IdentityDbContext<StoreUser>
    {
        public AccordionContext(DbContextOptions<AccordionContext> options): base(options){ }

        public DbSet<Product> Products{ get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
