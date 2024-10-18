using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;
using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;
using OnlineShoppingReactAndAsp.netCore.Server.Services.Services;
//using static OnlineShoppingReactAndAsp.netCore.Server.Controllers.UserController;
using static System.Net.Mime.MediaTypeNames;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController(EshopContext context, ICategoryService categoryService) :  ControllerBase
    {
        private readonly EshopContext _context = context;
        private readonly ICategoryService _categoryService = categoryService;
        // GET: CategoryController


       

        [HttpPost("add")]
        public async Task<IActionResult> Add([FromForm] string id, [FromForm] string description, [FromForm] IFormFile image)
        {
           
               var result = await _categoryService.AddCategoryAsync("u", Convert.ToInt32(id), "", description, image);
            return Ok(result);

           
        }
        // POST: CategoryController/Create
        [HttpGet("index")]
        public ActionResult Index()
        {
            var List = new List<ProductCat>();
           
            var result = from p in _context.TblProducts
                         join c in _context.TblCategories on p.CategoryId equals c.Id
                         select new
                         {
                             ProductName = p.Name,
                             CategoryId = p.CategoryId,
                             Price = p.Price,
                             ImageUrl =p.ImageUrl 
                         };
            foreach (var item in result)
            {
                var m = new ProductCat();
                m.Name = item.ProductName;
                m.Price = item.Price;
                m.ImageUrl = "https://localhost:7096"+item.ImageUrl; /*/ Images/Product/BlackT - Shirt.jpg*/
                List.Add(m);
            }
           
                return Ok(List.ToArray());
        }

        // GET: CategoryController/Details/5
        public ActionResult Details(int id)
        {
            return Ok();
        }

        // GET: CategoryController/Create
        public ActionResult Create()
        {
            return Ok();
        }
     
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }

        // GET: CategoryController/Edit/5
        public ActionResult Edit(int id)
        {
            return Ok();
        }

        // POST: CategoryController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return Ok();
            }
            catch
            {
                return Ok();
            }
        }

        // GET: CategoryController/Delete/5
        public ActionResult Delete(int id)
        {
            return Ok();
        }

        // POST: CategoryController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return Ok();
            }
            catch
            {
                return Ok();
            }
        }

        public class Category
        {
            public int Id { get; set; }
           
            public string Description { get; set; }
            public IFormFile ImageUrl { get; set; } // Change to IFormFile
        }
        public class ProductCat
        {
            public int Id { get; set; }

            public string Name { get; set; }
            public string ImageUrl { get; set; } // Change to IFormFile
            public decimal Price { get; set; } // Change to IFormFile
        
    }
    }
}
