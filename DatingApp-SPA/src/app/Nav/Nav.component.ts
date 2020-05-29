import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_Services/AuthService.service';
import { AlertifyService } from '../_Services/Alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
model:any ={};

  constructor(public auth:AuthServiceService,private alertify:AlertifyService,private routes:Router) { }

  ngOnInit() {
  }
login(){
  this.auth.Login(this.model).subscribe(next=>{
      this.alertify.success('logged in as '+this.auth.tokenDecoded.unique_name);
    },error=>{
      this.alertify.error(error)
    },()=>{
      this.routes.navigate(['/members'])
    });
  
}
loggedin(){
  return this.auth.loggedin();
}

logout(){
  localStorage.removeItem("token");
  this.alertify.message('logged out ');
}
}
