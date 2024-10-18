using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;
using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;

namespace OnlineShoppingReactAndAsp.netCore.Server.Services.Services
{
    public class ProductService(EshopContext context) : IProductService
    {
        private readonly EshopContext _context = context;



        public async Task<ResponseCode> ChangeProduct(string flag, int Id, string Name, string Description, int CategoryId, decimal Price, int Quantity, IFormFile ImageUrl, int SubCatId, int ItemId, int Rating)
        {
            // Save the image if provided
            string imageUrl = string.Empty;
            if (ImageUrl != null && ImageUrl.Length > 0)
            {
                imageUrl = await SaveCategoryImageAsync(ImageUrl);
            }

            var parameters = new[]
            {
        new SqlParameter("@Flag", flag),
        new SqlParameter("@Id", Id),
        new SqlParameter("@Name", Name),
        new SqlParameter("@Description", Description),
        new SqlParameter("@CategoryId", CategoryId),
        new SqlParameter("@Price", Price),
        new SqlParameter("@Quantity", Quantity),
        new SqlParameter("@ImageUrl", imageUrl), // Use the saved image URL
        new SqlParameter("@SubCatId", SubCatId),
        new SqlParameter("@ItemId", ItemId),
        new SqlParameter("@Rating", Rating)
    };

            // Assuming ResponseCode is your entity and the stored procedure returns a list of ResponseCode
            var result = await _context.ResponseCodes
                .FromSqlRaw("EXECUTE Proc_Product @Flag, @Id, @Name, @Description, @CategoryId, @Price, @Quantity, @ImageUrl, @SubCatId, @ItemId, @Rating", parameters)
                .ToListAsync();

            // Return the first item or null if the list is empty
            return result.FirstOrDefault();
        }

        public List<Product> GetProduct(string flag, int Id, string Name, string Description, int CategoryId, decimal Price, int Quantity, string ImageUrl, int SubCatId, int ItemId, int Rating)
        {
            var pflag = new SqlParameter("@Flag", flag);
            var pId = new SqlParameter("@Id", Id);
            var pName = new SqlParameter("@Name", Name);
            var pDescription = new SqlParameter("@Description", Description);
            var pCategoryId = new SqlParameter("@CategoryId", CategoryId);
            var pPrice = new SqlParameter("@Price", Price);
            var pQuantity = new SqlParameter("@Quantity", Quantity);
            var pImageUrl = new SqlParameter("@ImageUrl", ImageUrl);
            var pSubCatId = new SqlParameter("@SubCatId", SubCatId);
            var pItemId = new SqlParameter("@ItemId", ItemId);
            var pRating = new SqlParameter("@Rating", Rating);

            return _context.Product.FromSqlRaw("EXECUTE Proc_Product @Flag,@Id,@Name,@Description,@CategoryId,@Price,@Quantity,@ImageUrl,@SubCatId,@ItemId,@Rating", pflag, pId, pName, pDescription, pCategoryId, pPrice, pQuantity, pImageUrl, pSubCatId, pItemId, pRating).ToList();


        }





        private async Task<string> SaveCategoryImageAsync(IFormFile imageFile)
        {
            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Images", "Product");
            Directory.CreateDirectory(folderPath);  // Ensure the folder exists

            var fileName = Path.GetFileName(imageFile.FileName);
            var filePath = Path.Combine(folderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            // Return the relative URL for the saved image
            return $"/Images/Product/{fileName}";
        }
    }
}
