using CRUDAngular.Models;


namespace CRUDAngular.Services.Interfaces
{
    public interface ILoginDetails
    {
        LoginResponseModel GetLoginDetails(LoginRequestModel details);
    }
}