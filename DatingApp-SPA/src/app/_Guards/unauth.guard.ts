import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../_Services/AuthService.service';
import { AlertifyService } from '../_Services/Alertify.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private alertify:AlertifyService,private router:Router){}
  canActivate(): boolean  {
    if (!this.auth.loggedin()) {
      return true;
    }
    
    this.router.navigate(["members"]);
    return false;
  }
  
}
