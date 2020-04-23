import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_Services/AuthService.service';


@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
model:any ={};
  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
  }
login(){
  this.auth.Login(this.model).subscribe(next=>{
      console.log('logged in successfully')
    },error=>{
      console.log('login faild')
    });
  
}
loggedin(){
  const token=localStorage.getItem("token");
  return(!!token)
}

logout(){
  localStorage.removeItem("token");
}
}
