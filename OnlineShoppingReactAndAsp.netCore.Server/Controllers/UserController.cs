using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingReactAndAsp.netCore.Server.Models;
using OnlineShoppingReactAndAsp.netCore.Server.Services.IServices;
using OnlineShoppingReactAndAsp.netCore.Server.Services.Services;

namespace OnlineShoppingReactAndAsp.netCore.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(EshopContext context, IUserAuthenticationService authentication, EncryptionDecryptionFun encryptdecrypt) : ControllerBase
    {
        public readonly EshopContext _context = context;
        private readonly IUserAuthenticationService Authentication = authentication;
        private readonly EncryptionDecryptionFun EncryptDecrypt = encryptdecrypt;

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] UserRegisterDto model)
        {
            if (ModelState.IsValid)
            {
                var result = await _context.Database.ExecuteSqlRawAsync("EXEC Proc_User @Flag = 'i', @UserName = {0}, @Email = {1}, @PasswordHash = {2}, @FullName = {3}, @Dob = {4}, @GenderId = {5}",
                    model.Email, model.Email, model.PasswordHash, model.FullName, model.Dob, model.GenderId);

                if (result < 0)
                {
                    return Ok(new { token = "fake-jwt-token" }); // You can replace this with actual token logic
                }
                return BadRequest("Registration failed.");
            }

            return BadRequest(ModelState);
        }


        [HttpGet("get")]
        public IEnumerable<TblUser> GetUser() {

            var i = _context.TblUsers.ToList();
            return i.ToArray();
        }

        [HttpGet("edit/{id}")]
        public IActionResult Edit(int id)
        {
            var user = _context.TblUsers.Find(id);
            if (user == null)
            {
                return NotFound(); // Return 404 if user not found
            }
            return Ok(user); // Return the user data to the front-end
        }

        // POST: api/user/edit - Update the user
        [HttpPost("edit")]
        public IActionResult Edit([FromBody] UserRegisterDto user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors if any
            }

            var existingUser = _context.TblUsers.Find(user.Id);
            if (existingUser == null)
            {
                return NotFound();
            }

            // Update user details
            existingUser.UserName = user.Email;
            existingUser.Email = user.Email;
            existingUser.PasswordHash = user.PasswordHash; // Or hash a new password

            _context.SaveChanges(); // Save changes to the database

            return Ok(existingUser); // Return the updated user
        }

        [HttpGet("detail/{id}")]
        public IActionResult Detail(int id)
        {
            var user = _context.TblUsers.Find(id);
            if (user == null)
            {
                return NotFound(); // Return 404 if user not found
            }
            return Ok(user); // Return the user data to the front-end
        }
        [HttpGet("delete/{id}")]
        public IActionResult Delete(int id)
        {
            var user = _context.TblUsers.Find(id);
           
            if (user == null)
            {
                return NotFound(); // Return 404 if user not found
            }
            _context.TblUsers.Remove(user);
            _context.SaveChanges(); // Save changes to the database
            return Ok(user); // Return the user data to the front-end
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel u)
        {
            var m = Authentication.ReturnDecryptPassword("s", u.Email ?? "", u.PasswordHash ?? "").ToList().FirstOrDefault();
            int UserId = 0;
            string FullName = "";
            //if (m != null)
            //{
            //    FullName = m.FullName;

            //    if (m.PasswordHash != null)
            //    {
            //        UserId = m.Id;
            //        string pass = m.PasswordHash.ToString();

            //        var decrypt = EncryptDecrypt.Decrypt(pass);
            //        if (decrypt != u.PasswordHash)
            //        {
            //            return Ok();
            //        }
            //    }
            //}

            var i = Authentication.LoginResponse("a", u.Email ?? "", u.PasswordHash ?? "").ToList().FirstOrDefault();
            if (i != null)
            {
                if (i.Code == "000")
                {
                    return Ok();
                }
            }
            return BadRequest();
        }
        public class UserRegisterDto
        {
            public int Id { get; set; }
            public string Email { get; set; }
            public string PasswordHash { get; set; }
            public string FullName { get; set; }
            public DateTime Dob { get; set; }
            public int GenderId { get; set; }
        }
        public class LoginModel
        {
            public string Email { get; set; }
            public string PasswordHash { get; set; }
        }
    }
}
