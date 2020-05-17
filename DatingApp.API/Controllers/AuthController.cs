using DatingApp.API.Services;
using DatingApp.API.Models;
using DatingApp.API.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authservice;
        private readonly IConfiguration _config;

        public AuthController(IAuthService authService, IConfiguration config)
        {
            _authservice = authService;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto user)
        {
            user.username = user.username.ToLower();
            if (await _authservice.UserExists(user.username))
                return BadRequest("Username alredy exist");
            var created = await _authservice.Register(new User { UserName = user.username }, user.password);

            return Ok();

        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto userLogin)
        {
            
                // throw new Exception("computer says no");

                var userFromService = await _authservice.Login(userLogin.username.ToLower(), userLogin.password);
                if (userFromService == null)
                    return Unauthorized();

                var claims = new[]
                {
               new Claim(ClaimTypes.NameIdentifier,userFromService.Id.ToString()),
               new Claim(ClaimTypes.Name,userFromService.UserName)
           };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSetting:Token").Value));
                var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = cred
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return Ok(new
                {
                    Token = tokenHandler.WriteToken(token)
                });
         



        }
    }
}