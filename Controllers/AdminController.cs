using AccordionFair.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace AccordionFair.Controllers
{
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
                var results = repo.GetAllOrders();
             
                return Ok(results);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }
    }
}
