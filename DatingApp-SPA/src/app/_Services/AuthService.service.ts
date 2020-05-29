import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import { environment } from "../../environments/environment";




@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  baseurl = environment.apiUrl+"auth/";
  jwtHelper=new JwtHelperService();
  tokenDecoded:any;

  constructor(private http: HttpClient) {}
  Login(model: any) {
    return this.http.post(this.baseurl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          this.tokenDecoded=this.jwtHelper.decodeToken(user.token);
         
        }
      })
    );
  }
  loggedin(){
    const token=localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  Register(model: any) {
    return this.http
      .post(this.baseurl + "register", model);
      
  }
}
