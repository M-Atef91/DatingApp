import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  weather:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.GetWeather()
  }
  RegisterToggle(){
    this.registerMode=true;
  }
  GetWeather() {
    
    this.http.get('https://localhost:44341/WeatherForecast').subscribe(response => {
      this.weather = response;
      console.log(this.weather)
    }, error => { 
      console.log(error);
    });
  }
  cancelRegisterMode(registerMode:boolean){
    this.registerMode=registerMode;
  }

}
