import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BsDropdownModule,TabsModule } from 'ngx-bootstrap';
import { NavComponent } from './Nav/Nav.component';
import { AuthServiceService } from './_Services/AuthService.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';
import { errorInterceptorProvider} from './_Services/error.interceptor'
import { ListsComponent } from './Lists/Lists.component';
import { MemberListComponent } from './member/Member-list/Member-list.component';
import { MessagesComponent } from './Messages/Messages.component';
import { appRoutes } from './routes';
import { AlertifyService } from './_Services/Alertify.service';
import { UsersService } from './_Services/Users.service';
import { AuthGuard } from './_Guards/auth.guard';
import { UnauthGuard } from './_Guards/unauth.guard';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import { MemberDetailsResolver } from './_Resolvers/member-details.resolver';
import { MemberListResolver } from './_Resolvers/member-list.resolver';

export function tokenGetter(){
return localStorage.getItem('token');
}
@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config:{
            tokenGetter:tokenGetter,
            whitelistedDomains:['localhost:5000'],
            blacklistedRoutes:['localhost:5000/api/auth']

         }
      })
   ],
   providers: [
      AuthServiceService,
      errorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UnauthGuard,
      UsersService,
      MemberDetailsResolver,
      MemberListResolver,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
