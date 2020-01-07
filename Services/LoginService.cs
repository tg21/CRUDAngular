using CRUDAngular.Models;
using CRUDAngular.Services.Interfaces;
using System;
using System.Linq;
using System.Web;

namespace CRUDAngular.Services
{
    public class LoginService : ILoginDetails
    {
        public LoginResponseModel GetLoginDetails(LoginRequestModel details)
        {
            LoginResponseModel data = new LoginResponseModel();
            try
            {
                using (var userEn = new usersEntities())
                {
                    data = (from user in userEn.credentials
                            where user.id == details.id && user.pass == details.pass
                            select new LoginResponseModel()
                            {
                                uname = data.uname,
                                @class = data.@class
                            }).FirstOrDefault();
                }
            }catch(Exception e)
            {
                System.Diagnostics.Debug.WriteLine("error :--> " + e.Message);
            }

            return data;

        }
    }
}