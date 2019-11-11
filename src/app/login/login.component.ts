import { Component, OnInit } from "@angular/core";
import { Social_loginService } from "./social_login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: Social_loginService) {}

  user;
  needLogin = true;

  ngOnInit() {
    this.loginService.checkUserIsLoggedIn().subscribe(user =>{
      this.user = user;
      if(this.user!=null){
        this.needLogin = false;
      } else {
        this.needLogin = true;
      }
    })
  }

  facebookLogin() {
    this.loginService.signInWithFB();
  }

  googleLogin() {
    this.loginService.signInWithGoogle();
  }

  login() {}

  logout() {
    this.loginService.signOut();
  }
  
}
