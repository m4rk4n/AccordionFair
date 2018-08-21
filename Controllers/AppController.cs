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
          //  throw new InvalidOperationException("Bad things happened"); :))
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
                // send the mail
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
                return View();
            }
            else
            {
                return View();
                // show the errors
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
            //var results = repository.GetAllProducts()
            //                .OrderBy(p => p.Category)
            //                .ToList();
            //From p in _ctx.Products
            //orderby p.Category
            //select p

            //if(!User.Identity.IsAuthenticated)
            //{
            //    return RedirectToAction("Login", "Account");
            //}

            return View();
        }
    }
}
