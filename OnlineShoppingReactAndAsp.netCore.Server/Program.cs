using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.ServiceRepo;
using OnlineShoppingReactAndAsp.netCore.Server.UtilitySservice;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("https://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
       
    });
});

// Database connection (adjust your connection string)
builder.Services.AddDbContext<EshopContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
//builder.Services.AddScoped<Dropdown>();
builder.Services.AddRepositoryServices();
//Add authentication services here if needed
builder.Services.AddAuthentication();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();






// Use CORS before routing
app.UseCors("AllowReactApp");
app.UseRouting();

// Use authentication middleware if needed
 app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();