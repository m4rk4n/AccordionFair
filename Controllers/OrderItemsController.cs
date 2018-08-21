using AccordionFair.Data;
using AccordionFair.Data.Entities;
using AccordionFair.ViewModels;
using AutoMapper;
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
    [Route("/api/orders/{orderid}/items")]
    [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class OrderItemsController : Controller
    {
        private readonly IAccordionRepository repo;
        private readonly ILogger logger;
        private readonly IMapper mapper;

        public OrderItemsController(IAccordionRepository repo,
            ILogger<OrderItemsController> logger,
            IMapper mapper)
        {
            this.repo = repo;
            this.logger = logger;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            var order = repo.GetOrderById(User.Identity.Name, orderId);
            if (order != null)
                return Ok(mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));
            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id) // id is orderItemId
        {
            //var order = repo.GetOrderById(orderId);
            var order = repo.GetOrderById(User.Identity.Name, orderId);
            if (order != null)
            {
                var item = order.Items.Where(i => i.Id == id).FirstOrDefault(); 

                if(item != null)
                {
                    return Ok(mapper.Map<OrderItem, OrderItemViewModel>(item));
                }
            }
            
            return NotFound();
        }

        //create methods for post and delete and update, ima indepth course
    }
}
