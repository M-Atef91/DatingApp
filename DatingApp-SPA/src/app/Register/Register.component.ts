import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthServiceService } from "../_Services/AuthService.service";

@Component({
  selector: "app-Register",
  templateUrl: "./Register.component.html",
  styleUrls: ["./Register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromWeather: any;
  @Output() cancelregister = new EventEmitter();
  model: any = {};
  constructor(private auth: AuthServiceService) {}

  ngOnInit() {}
  Register() {
    this.auth.Register(this.model).subscribe(
      (response) => {
        this.model = response;
        console.log(this.model);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelregister.emit(false);
    console.log("canceled");
  }
}
