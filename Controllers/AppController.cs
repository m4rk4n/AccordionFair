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
        public AppController()
        { }

        public IActionResult Index()
        {
            return View();
        }

    }
}
