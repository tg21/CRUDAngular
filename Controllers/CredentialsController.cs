using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using CRUDAngular.Models;
//using System.Web.Mvc;

namespace CRUDAngular.Controllers
{
    public class CredentialsController : ApiController
    {
        // GET: Credentials
        [Route("api/Login/LoginUrl")]
        [HttpPost]
        public IHttpActionResult PostFiles(LoginRequestModel loginData)
        {
            Console.WriteLine("UserName : - " + loginData.UserName);
            Console.WriteLine("Password : - " + loginData.Password);
            return Json(loginData);
        }
       /* public ActionResult Index()
        {
            return View();
        }*/
    }
}