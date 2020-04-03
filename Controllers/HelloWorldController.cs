using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCMovies.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult WelcomePage()
        {
            ViewBag.PageName = "Welcome Page!";

            return View("WelcomePage");
        }

        public JsonResult GetStringName()
        {
            var userInfo = "Phan Van Thong";

            return Json(userInfo, JsonRequestBehavior.AllowGet);
        }

    }
}