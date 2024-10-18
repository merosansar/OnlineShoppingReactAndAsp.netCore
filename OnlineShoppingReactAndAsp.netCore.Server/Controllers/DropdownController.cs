using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingReactAndAsp.netCore.Server.Models;

using OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DropdownController(EshopContext context, Dropdown dropdown) : ControllerBase
    {
        public readonly EshopContext _context = context;
        private readonly Dropdown _dropdown = dropdown;

        [HttpGet("getdropdownlist")]
        public ActionResult<List<object>> GetDropdownData([FromQuery] string Param1, [FromQuery] string? Param3 , [FromQuery] string? Param2 = null)
        {
            // Call the service method to get dropdown data based on Params and Filter
            var dropdownItems = _dropdown.GetDropDownList(Param1, Param2 ?? string.Empty,Param3??"");

            if (dropdownItems == null || dropdownItems.Count == 0)
            {
                return NotFound("No dropdown data found.");
            }

            // Transform SelectListItem into a simplified object (id, name)
            var result = dropdownItems.Select(item => new { id = item.Value, name = item.Text }).ToList();
            return Ok(result);
        }
        public class Parameter
        {
            public string? Param { get; set; }

            public string? Filter { get; set; }


        }

    }
}
