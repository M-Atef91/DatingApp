import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../_Services/AuthService.service';
import { AlertifyService } from '../_Services/Alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private alertify:AlertifyService,private router:Router){}
  canActivate(): boolean  {
    if (this.auth.loggedin()) {
      return true;
    }
    this.alertify.error("login first !!");
    this.router.navigate(["/"]);
    return true;
  }
  
}
