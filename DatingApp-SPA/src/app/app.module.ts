import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { from } from 'rxjs';
import { NavComponent } from './Nav/Nav.component';
import { AuthServiceService } from './_Services/AuthService.service';

@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [
      AuthServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
