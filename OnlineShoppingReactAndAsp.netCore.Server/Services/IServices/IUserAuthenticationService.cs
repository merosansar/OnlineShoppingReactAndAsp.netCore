using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.IServices
{
    public interface IUserAuthenticationService
    {
        List<PasswordHashModel> ReturnDecryptPassword(string flag, string UserName, string PasswordHash);
        List<ResponseCode> LoginResponse(string flag, string UserName, string PasswordHash);
    }
}
