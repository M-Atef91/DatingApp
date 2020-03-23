using System;

namespace DatingApp.API.Models
{
    public class WeatherForcastme
    {
        public int id { get; set; }
        public DateTime Date { get; set; }
        public int Temp { get; set; }
        public string Summary { get; set; }
        
    }
}