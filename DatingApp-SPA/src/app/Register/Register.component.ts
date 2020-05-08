import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthServiceService } from "../_Services/AuthService.service";
import { AlertifyService } from '../_Services/Alertify.service';

@Component({
  selector: "app-Register",
  templateUrl: "./Register.component.html",
  styleUrls: ["./Register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromWeather: any;
  @Output() cancelregister = new EventEmitter();
  model: any = {};
  constructor(private auth: AuthServiceService,private alertify:AlertifyService) {}

  ngOnInit() {}
  Register() {
    this.auth.Register(this.model).subscribe(
      (response) => {
        this.model = response;
        this.alertify.success(this.model);
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  cancel() {
    this.cancelregister.emit(false);
    
  }
}
