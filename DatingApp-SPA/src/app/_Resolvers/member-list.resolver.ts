import { User } from "../Models/User";
import { UsersService } from "../_Services/Users.service";
import { Router, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertifyService } from "../_Services/Alertify.service";
import { Injectable } from '@angular/core';
@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userService: UsersService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError((error) => {
        this.alertify.error("somthing went wrong try again later ");
        this.router.navigate(["/home"]);
        return of(null);
      })
    );
  }
}
