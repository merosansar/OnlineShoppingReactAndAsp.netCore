using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Models;

namespace OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice
{
    public class Dropdown(EshopContext context)
    {

        private readonly EshopContext _context = context;

        public List<SelectListItem> GetDropDownList(string Parameter, string Filter,string Parameter3)
        {

           

            SqlParameter pParam = new SqlParameter("@Param", Parameter);
            SqlParameter pFilter = new SqlParameter("@Filter", Filter);

            // Query the database with a stored procedure
            var dropList = _context.LoadDropdownModels.FromSqlRaw("EXECUTE Proc_LoadDropdown @Param, @Filter", pParam, pFilter).ToList();

            var list = new List<SelectListItem>();
            list.Add(new SelectListItem()
            {
                Text = "Select " + Parameter3,  // Text to display in the dropdown
                Value = "",  // No value assigned
                Selected = true  // This will be the default selected item
            });

            if (dropList != null && dropList.Count > 0)
            {
                foreach (var item in dropList)
                {
                    list.Add(new SelectListItem() { Text = item.Name, Value = item.Id.ToString(), Selected = false });
                }
            }

            return list;
        }


    }
}
