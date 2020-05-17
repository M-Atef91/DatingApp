using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class Seeds
    {
        private readonly DataContext _context;

        public Seeds(DataContext context)
        {
            _context = context;
        }

        public void CreateUserSeed()
        {
            var data = System.IO.File.ReadAllText("Data/UserSeedsData.json");
            var Users = JsonConvert.DeserializeObject<List<User>>(data);
            foreach (var user in Users)
            {
                Byte[] passwordHash, saltHash;

                CreatePasswordHash("password", out passwordHash, out saltHash);
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = passwordHash;
                user.PasswordSalt = saltHash;
                _context.Users.Add(user);

            }

            _context.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var Hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = Hmac.Key;
                passwordHash = Hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            }
        }
    }
}
