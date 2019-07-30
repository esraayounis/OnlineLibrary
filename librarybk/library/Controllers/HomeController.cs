using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using library.Models;

namespace library.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            return View();
        }
        LibraryContext context;
        public HomeController()
        {
            context = new LibraryContext();
        }
    }
}
