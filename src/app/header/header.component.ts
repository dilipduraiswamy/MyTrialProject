import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  setProfileImage() {
    let styles = {
      "background-image":
        "https://material.angular.io/assets/img/examples/shiba1.jpg"
    };
    return styles;
  }
}
