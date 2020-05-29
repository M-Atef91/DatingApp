
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { UsersService } from '../_Services/Users.service';
import { AlertifyService } from '../_Services/Alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class MemberDetailsResolver implements Resolve<User>{
constructor(private userService:UsersService,private router:Router,private alertify:AlertifyService){}

resolve(rout:ActivatedRouteSnapshot):Observable<User>{
    return this.userService.getUser(rout.params['id']).pipe(
        catchError((error)=>{
            this.alertify.error(error);
            this.router.navigate(['/members']);
            return of(null);
        })
    );
}
}