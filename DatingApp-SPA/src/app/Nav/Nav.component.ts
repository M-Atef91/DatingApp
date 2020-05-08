import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_Services/AuthService.service';
import { AlertifyService } from '../_Services/Alertify.service';


@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
model:any ={};

  constructor(public auth:AuthServiceService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
login(){
  this.auth.Login(this.model).subscribe(next=>{
      this.alertify.success('logged in successfully')
    },error=>{
      this.alertify.error(error)
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
