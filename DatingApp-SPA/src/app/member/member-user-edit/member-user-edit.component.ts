import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { User } from "src/app/Models/User";
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_Services/Alertify.service';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/_Services/Users.service';
import { AuthServiceService } from 'src/app/_Services/AuthService.service';

@Component({
  selector: "app-member-user-edit",
  templateUrl: "./member-user-edit.component.html",
  styleUrls: ["./member-user-edit.component.css"],
})
export class MemberUserEditComponent implements OnInit {
  @ViewChild('EditForm',null) editForm:NgForm;
  user: User;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any){
    if (this.editForm.dirty) {
      $event.returnValue=true;
    }
  }
  constructor(private route:ActivatedRoute,private alertify:AlertifyService,private userService:UsersService,private Auth:AuthServiceService) {}

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.user=data["user"];
    })
  }
  UpdateUser(){
    console.log(this.user);
    this.userService.UpdateUser(this.Auth.tokenDecoded.nameid,this.user).subscribe(next=>{
      this.alertify.success("updating done ");
    this.editForm.reset(this.user);

    },error=>{
      this.alertify.error(error);

    })
    
    
  }


}
