import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.GetWeather();
  }
  GetWeather() {
    
    this.http.get('https://localhost:5001/WeatherForecast').subscribe(response => {
      this.weather = response;
    }, error => { 
      console.log(error);
    });
  }
}
