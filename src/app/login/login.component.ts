import { Component, OnInit } from "@angular/core";
import { Social_loginService } from "./social_login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: Social_loginService) {}

  ngOnInit() {}

  facebookLogin() {
    this.loginService.signInWithFB();
  }

  googleLogin() {
    this.loginService.signInWithGoogle();
  }

  login() {}
}
