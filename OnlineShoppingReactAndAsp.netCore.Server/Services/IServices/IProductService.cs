using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.IServices
{
    public interface IProductService
    {

       List<Product>GetProduct(string flag, int Id, string Name, string Description, int CategoryId, decimal Price, int Quantity, string ImageUrl, int SubCatId, int ItemId, int Rating);
        Task<ResponseCode> ChangeProduct(string flag, int Id, string Name, string Description, int CategoryId, decimal Price, int Quantity, IFormFile ImageUrl, int SubCatId, int ItemId, int Rating);
    }
    
}
