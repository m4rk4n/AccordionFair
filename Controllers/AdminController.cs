using AccordionFair.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Controllers
{
    // [Authorize(Roles="Admin", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    // [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    [Route("api/[Controller]")]
    public class AdminController : Controller
    {
        private readonly IAccordionRepository repo;
        private readonly ILogger<AdminController> logger;

        public AdminController(IAccordionRepository repo, ILogger<AdminController> logger)
        {
            this.repo = repo;
            this.logger = logger;
        }

        public IActionResult Orders()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // var username = User.Identity.Name;

                var results = repo.GetAllOrders();
                // var results = repo.GetAllOrdersByUser(username, includeItems);

                // return Ok(mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
                return Ok(results);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        // view all orders
        // view all users
        // view orders for specific users?
    }
}
