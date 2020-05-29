import { Component, OnInit } from "@angular/core";
import { User } from "../../Models/User";
import { UsersService } from "../../_Services/Users.service";
import { AlertifyService } from "../../_Services/Alertify.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-Member-list",
  templateUrl: "./Member-list.component.html",
  styleUrls: ["./Member-list.component.css"],
})
export class MemberListComponent implements OnInit {
  users: User[];
  user: User;
  constructor(
    private userService: UsersService,
    private alerts: AlertifyService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.users=data['users']
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     (users: User[]) => {
  //       this.users = users;
  //     },

  //     (error) => {
  //       this.alerts.error(error);
  //     }
  //   );
  // }
}
