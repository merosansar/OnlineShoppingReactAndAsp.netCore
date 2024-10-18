using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Classes;
using OnlineShoppingReactAndAsp.netCore.Server.RepoModel;
using OnlineShoppingReactAndAsp.netCore.Server.Services.Services;
using OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice;

namespace OnlineShoppingReactAndAsp.netCore.Server.Models
{
    public partial class EshopContext
    {
        public DbSet<ResponseCode> ResponseCodes { get; set; }
        public DbSet<PasswordHashModel> PasswordHashModel { get; set; }

        public DbSet<LoadDropdownModel> LoadDropdownModels { get; set; }

        public DbSet<Product> Product { get; set; }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ResponseCode>(entity =>
            {
                entity.HasNoKey();
                // Additional configuration for your keyless entity
            });
            modelBuilder.Entity<PasswordHashModel>(entity =>
            {
                entity.HasNoKey();
                // Additional configuration for your keyless entity
            });
            modelBuilder.Entity<Dropdown>(entity =>
            {
                entity.HasNoKey();
                // Additional configuration for your keyless entity
            });
            modelBuilder.Entity<LoadDropdownModel>(entity =>
            {
                entity.HasNoKey();
                // Additional configuration for your keyless entity
            });
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasNoKey();
                // Additional configuration for your keyless entity
            });
        }
    }
}
