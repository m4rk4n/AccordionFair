using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccordionFair.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace AccordionFair.Data
{
    public class AccordionSeeder
    {
        private readonly AccordionContext ctx;
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment hosting;
        private readonly UserManager<StoreUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public AccordionSeeder(AccordionContext ctx,
            IHostingEnvironment hosting,
            UserManager<StoreUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            this.ctx = ctx;
            this.hosting = hosting;
            this.userManager = userManager;
            this.roleManager = roleManager;

        }

        public async Task Seed()
        {
            ctx.Database.EnsureCreated();

            bool x = await roleManager.RoleExistsAsync("Admin");
            if (!x)
            {
                var role = new IdentityRole();
                role.Name = "Admin";
                await roleManager.CreateAsync(role);
            }

            bool y = await roleManager.RoleExistsAsync("User");
            if (!y)
            {
                var role = new IdentityRole();
                role.Name = "User";
                await roleManager.CreateAsync(role);
            }


            var user = await userManager.FindByEmailAsync("test@test.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Test",
                    LastName = "Test",
                    UserName = "test@test.com",
                    Email = "test@test.com"
                };
                var result = await userManager.CreateAsync(user, "P@ssw0rd!");

                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed To default create user");
                }
                else if (result.Succeeded)
                {
                    var result1 = await userManager.AddToRoleAsync(user, "Admin");
                }
            }




            if (!ctx.Products.Any())
            {
                //var filepath = Path.Combine(hosting.ContentRootPath, "Data/art.json");
                //var json = File.ReadAllText(filepath);
                //var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                //ctx.Products.AddRange(products);

                //var order = new Order()
                //{
                //    OrderDate = DateTime.Now,
                //    OrderNumber = "12345",
                //    User = user,
                //    Items = new List<OrderItem>()
                //    {
                //        new OrderItem()
                //        {
                //            Product = products.First(),
                //            Quantity = 5,
                //            UnitPrice = products.First().Price
                //        }
                //    }
                //};

                //ctx.Orders.Add(order);

                //         public int Id { get; set; }
                //public string Category { get; set; }
                //public string Size { get; set; }
                //public double Price { get; set; }
                //public string Title { get; set; }
                //public int Keys { get; set; }
                //public string Reeds { get; set; }
                //public string Registers { get; set; }
                //public int Basses { get; set; }
                //public string Weight { get; set; }
                //public bool Cassoto { get; set; } 

                ctx.Products.AddRange(
                            new Product
                            {
                                Category = "Accordion",
                                Size = "496x200x435",
                                Price = 3500,
                                Title = "Weltmeister Supita",
                                Keys = 41,
                                Reeds = "4 + 5",
                                Registers = "11 + 5",
                                Basses = 120,
                                Weight = "12,5kg",
                                Cassoto = true,
                                ArtId = "supita"
                            }, new Product
                            {
                                Category = "Accordion",
                                Size = "496x210x435",
                                Price = 7325,
                                Title = "Scandalli Super IV",
                                Keys = 41,
                                Reeds = "4 + 5",
                                Registers = "11 + 5",
                                Basses = 120,
                                Weight = "12,5kg",
                                Cassoto = true,
                                ArtId = "scandalli"
                            }, new Product
                            {
                                Category = "Accordion",
                                Size = "496x200x430",
                                Price = 4200,
                                Title = "Armando Bugari Championfisa",
                                Keys = 41,
                                Reeds = "4 + 5",
                                Registers = "11 + 5",
                                Basses = 120,
                                Weight = "12,5kg",
                                Cassoto = true,
                                ArtId = "bugari"
                            }, new Product
                            {
                                Category = "Accordion",
                                Size = "496x200x435",
                                Price = 10000,
                                Title = "Hohner Gola",
                                Keys = 41,
                                Reeds = "4 + 5",
                                Registers = "11 + 5",
                                Basses = 120,
                                Weight = "12,5kg",
                                Cassoto = true,
                                ArtId = "gola"
                            }, new Product
                            {
                                Category = "Accordion",
                                Size = "496x200x435",
                                Price = 2600,
                                Title = "Excelsior AC",
                                Keys = 41,
                                Reeds = "4 + 5",
                                Registers = "11 + 5",
                                Basses = 120,
                                Weight = "12,5kg",
                                Cassoto = true,
                                ArtId="excelsior"
                            }

                    );
                ctx.SaveChanges();
            }
        }
    }
}
