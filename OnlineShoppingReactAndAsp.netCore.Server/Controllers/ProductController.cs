using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;
using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;
using OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice;
using System.Collections.Generic;
using static OnlineShoppingReactAndAsp.netCore.Server.Controllers.CategoryController;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController(EshopContext context, Dropdown dropdown, IProductService iProductService) : ControllerBase
    {
        public readonly EshopContext _context = context;
        private readonly Dropdown Dropdown = dropdown;
        private readonly IProductService _IProductService = iProductService;

        [HttpPost("add")]
        public async Task<IActionResult> Add([FromForm] int Id ,[FromForm] string Name ,[FromForm] string  Description ,[FromForm] int  CategoryId ,[FromForm] decimal Price,[FromForm] int Quantity,[FromForm] IFormFile ImageUrl, [FromForm] int SubCatId ,[FromForm] int  ItemId , [FromForm] int Rating )
        {
           

            try
            {
                var result = await _IProductService.ChangeProduct(
                    "i",
                    Id ,
                    Name,
                    Description ,
                    CategoryId ,
                    Price,
                   Quantity,
                   ImageUrl, // This is fine as long as ImageUrl is marked with [NotMapped]
                   SubCatId ,
                   ItemId ,
                   Rating 
                );

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }





    }
}
