import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
baseurl="https://localhost:44341/api/auth/";

constructor(private http:HttpClient) { }
Login(model:any){
 return this.http.post(this.baseurl+"login",model).pipe(
  map((response:any)=>{
    const user =response;
    if(user){
      localStorage.setItem("token",user.token);
    }
  })
);
}
}