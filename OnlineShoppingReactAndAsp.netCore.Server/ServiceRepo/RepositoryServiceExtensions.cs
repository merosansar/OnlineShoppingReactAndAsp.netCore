using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;
using OnlineShoppingReactAndAsp.netCore.Server.Services.Services;
using OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice;

namespace OnlineShoppingReactAndAsp.netCore.Server.ServiceRepo
{
    public static class RepositoryServiceExtensions
    {
        public static IServiceCollection AddRepositoryServices(this IServiceCollection services)
        {
            services.AddScoped<Dropdown>();
            services.AddScoped<EncryptionDecryptionFun>();
            services.AddScoped<IUserAuthenticationService, UserAuthenticationService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IProductService, ProductService>();

            return services;
        }
    }
}
