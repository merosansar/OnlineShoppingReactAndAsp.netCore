using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Classes;
using OnlineShoppingReactAndAsp.netCore.Server.Models;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.Services
{
    public class LoadDropdownService(EshopContext context)
    {
        private readonly EshopContext _context = context;

        public List<LoadDropdownModel> GetDropdownData(string Param, string Filter)
        {


            SqlParameter pParam = new SqlParameter("@Param", Param);
            SqlParameter pFilter = new SqlParameter("@Filter", Filter);
            return _context.LoadDropdownModels.FromSqlRaw("EXECUTE Proc_LoadDropdown @Param ,@Filter", pParam, pFilter).ToList();

        }
    }
}
