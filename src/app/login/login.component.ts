import { Component, OnInit } from "@angular/core";
import { Social_loginService } from "./social_login.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: Social_loginService,
    private router: Router
  ) {}

  user;
  needLogin = true;
  imageToShow;
  ngOnInit() {
    this.loginService.checkUserIsLoggedIn().subscribe(user => {
      this.user = user;
      if (this.user != null) {
        this.needLogin = false;
        // this.getImage(user.photoUrl).subscribe(data => {
        //   this.createImageFromBlob(data);
        // }, error => {
        //   console.log("Error occured",error);
        // });
      } else {
        this.needLogin = true;
      }
    });
  }

  facebookLogin() {
    this.loginService.signInWithFB();
  }

  googleLogin() {
    this.loginService.signInWithGoogle();
  }

  login() {
    alert("cool baby");
  }

  logout() {
    this.loginService.signOut();
  }

  redirectToHome() {
    this.router.navigate(["/"]);
  }

  //   getImage(imageUrl: string): Observable<Blob> {
  //    return this.http.get(imageUrl, { responseType: 'blob' });

  // }

  // createImageFromBlob(image: Blob) {
  //    let reader = new FileReader(); //you need file reader for read blob data to base64 image data.
  //    reader.addEventListener("load", () => {
  //       this.imageToShow = reader.result; // here is the result you got from reader
  //    }, false);

  //    if (image) {
  //       reader.readAsDataURL(image);
  //    }
  // }
}
