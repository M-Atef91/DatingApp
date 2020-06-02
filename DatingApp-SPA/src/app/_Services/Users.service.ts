import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertifyService } from "./Alertify.service";
import { environment } from "../../environments/environment";
import {  Observable } from 'rxjs';
import { User } from '../Models/User';



@Injectable({
  providedIn: "root",
})
export class UsersService {
  baseUrl = environment.apiUrl+'users/';
  
  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<User[]>(this.baseUrl+'getallusers');
  }

  getUser(id){
    return this.http.get<User>(this.baseUrl+'getuser/'+id);
  }
  UpdateUser(id,user:User){
    return this.http.put<User>(this.baseUrl+'UpdateUser/'+id,user);
  }
}
