using AccordionFair.Data;
using AccordionFair.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccordionFair.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        private readonly IAccordionRepository repo;
        private readonly ILogger logger;

        public ProductsController(IAccordionRepository repo, ILogger<ProductsController> logger)
        {
            this.repo = repo;
            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Get() // content negotitation, Not JsonResult
        {
            try
            {
                return Ok(repo.GetAllProducts());

            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Products: {ex}");
                return BadRequest("Failed to get products");
            }
        }
    }
}
