using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> option) : base(option) { }
        public DbSet<WeatherForcastme> WeatherForcastme { get; set; }
        public DbSet<User> Users { get; set; }

    }
}