using Microsoft.AspNetCore.Mvc;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    public class ItemControllerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
