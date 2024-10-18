using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.IServices
{
    public interface ICategoryService
    {
        Task<ResponseCode> AddCategoryAsync(String flag, Int32? Id, String Name, String Description, IFormFile ImageUrl);
        //List<ResponseCode> UpdateCategory(string flag, Int32? Id, string Name, string Description);
        //List<TblCategory> GetCategory(string flag, Int32? Id, string Name, string Description);
        //List<ResponseCode> DeleteCategory(string flag, Int32? Id, string Name, string Description);
    }
}
