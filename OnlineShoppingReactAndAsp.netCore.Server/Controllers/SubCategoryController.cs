using Microsoft.AspNetCore.Mvc;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    public class SubCategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
