import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavComponent } from './Nav/Nav.component';
import { AuthServiceService } from './_Services/AuthService.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';
import { errorInterceptorProvider} from './_Services/error.interceptor'
import { ListsComponent } from './Lists/Lists.component';
import { MemberListComponent } from './Member-list/Member-list.component';
import { MessagesComponent } from './Messages/Messages.component';
import { appRoutes } from './routes';
import { AlertifyService } from './_Services/Alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
      AuthServiceService,
      errorInterceptorProvider,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
