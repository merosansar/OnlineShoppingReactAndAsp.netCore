using OnlineShoppingReactAndAsp.netCore.Server.Classes;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.IServices
{
    public interface ILoadDropdownService
    {

        List<LoadDropdownModel> GetDropdownData(String Param, String Filter);
    }
}
