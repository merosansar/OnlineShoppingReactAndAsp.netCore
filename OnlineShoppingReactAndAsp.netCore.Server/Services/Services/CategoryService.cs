using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;
using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;
using System.Data;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.Services
{
    public class CategoryService(EshopContext context) : ICategoryService
    {
       
    
        private readonly EshopContext _context = context;
        public async Task<ResponseCode> AddCategoryAsync(string flag, int? Id, string Name, string Description, IFormFile ImageUrl)
        {
            var result = new ResponseCode();

            // Save the image if provided
            string imageUrl = string.Empty;
            if (ImageUrl != null && ImageUrl.Length > 0)
            {
                imageUrl = await SaveCategoryImageAsync(ImageUrl);
            }

            using (var command = _context.Database.GetDbConnection().CreateCommand())
            {
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "Proc_Category";
                command.Parameters.Add(new SqlParameter("@Flag", flag));
                command.Parameters.Add(new SqlParameter("@Id", Id.HasValue ? (object)Id.Value : DBNull.Value));
                command.Parameters.Add(new SqlParameter("@Name", Name ?? (object)DBNull.Value));
                command.Parameters.Add(new SqlParameter("@Description", Description ?? (object)DBNull.Value));
                command.Parameters.Add(new SqlParameter("@ImageUrl", imageUrl ?? (object)DBNull.Value));

                await _context.Database.OpenConnectionAsync();
                using var reader = await command.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                {
                    result.Status = reader.GetString(reader.GetOrdinal("Status"));
                    result.Code = reader.GetString(reader.GetOrdinal("Code"));
                    result.Message = reader.GetString(reader.GetOrdinal("Message"));
                }
            }

            return result;
        }

        // Helper method to save the image in the wwwroot/Images/Categories folder
        private async Task<string> SaveCategoryImageAsync(IFormFile imageFile)
        {
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Images", "Categories");
            Directory.CreateDirectory(folderPath);  // Ensure the folder exists

            var fileName = Path.GetFileName(imageFile.FileName);
            var filePath = Path.Combine(folderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            // Return the relative URL for the saved image
            return $"/Images/Categories/{fileName}";
        }
    }
}
