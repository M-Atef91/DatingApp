import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/_Services/Users.service";
import { AlertifyService } from "src/app/_Services/Alertify.service";
import { User } from "src/app/Models/User";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-member-details",
  templateUrl: "./member-details.component.html",
  styleUrls: ["./member-details.component.css"],
})
export class MemberDetailsComponent implements OnInit {
  user: User;
  constructor(
    private userService: UsersService,
    private alerts: AlertifyService,
    private rout: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rout.data.subscribe(data=>{
      this.user=data['user'];
    })
  }
  
  // loadUser() {
  //   this.userService.getUser(+this.rout.snapshot.params["id"]).subscribe(
  //     (u: User) => {
  //       this.user=u
  //     },
  //     (error) => {
  //       this.alerts.error(error);
  //     }
  //   );
  // }
}
