using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccordionFair.ViewModels;
using AccordionFair.Services;
using AccordionFair.Data;
using Microsoft.AspNetCore.Authorization;

namespace AccordionFair.Controllers
{
    public class AppController : Controller
    {
        private readonly IAccordionRepository repository;

        public AppController( IAccordionRepository repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {

            ViewBag.Title = "Contact us";
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if(ModelState.IsValid)
            {
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
                return View();
            }
            else
            {
                return View();
            }
            
        }

        public IActionResult About()
        {
            ViewBag.Title = "About us";

            return View();
        }

        //[Authorize]
        public IActionResult Shop()
        {
            return View();
        }
    }
}
