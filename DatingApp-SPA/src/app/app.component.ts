import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "./_Services/AuthService.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  

  constructor(private auth: AuthServiceService) {}
  ngOnInit() {
    if (this.auth.loggedin()) {
      this.auth.tokenDecoded=this.auth.jwtHelper.decodeToken(localStorage.getItem("token"))
    }
    
  }
}
