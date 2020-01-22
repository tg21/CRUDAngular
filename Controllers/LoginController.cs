using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CRUDAngular.Services.Interfaces;
using System.Web.Http;
using CRUDAngular.Models;
using System.Net.Http;
using System.Net;

namespace CRUDAngular.Controllers
{
    /* https://stackoverflow.com/questions/28420013/asp-net-web-api-routing-broken */
    /*[RoutePrefix("api/Login")]*/
    public class LoginController : ApiController
    {
        private readonly ILoginDetails _ILoginDetails;
        public LoginController(ILoginDetails ilogin)
        {
            _ILoginDetails = ilogin;
        }
        [Route("api/Login/LoginUrl")]
        /*[Route("LoginUrl")]*/
        [HttpPost]
        public IHttpActionResult PostFiles(LoginRequestModel loginData)
        {
            System.Diagnostics.Debug.WriteLine("UserID : - " + loginData.id);
            System.Diagnostics.Debug.WriteLine("Password : - " + loginData.pass);
            /*loginData.id = 1;
            loginData.pass = "wayne";*/
            LoginResponseModel userData = new LoginResponseModel();
            try
            {
                userData = _ILoginDetails.GetLoginDetails(loginData);
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine("Error controlloer db :--> " + e.Message);
            }

            return Json(userData);
        }
    }
}