import { Component, OnInit } from "@angular/core";
import { Social_loginService } from "../login/social_login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: Social_loginService) {}

  user;
  needLogin;

  ngOnInit() {
    this.loginService.checkUserIsLoggedIn().subscribe(user => {
      this.user = user;
      if (this.user != null) {
        this.needLogin = false;
      } else {
        this.needLogin = true;
      }
    });
  }

  logout() {
    this.loginService.signOut();
  }
}
