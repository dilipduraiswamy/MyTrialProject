import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  calculate(form) {
    console.log(form.value);
    var newStr = form.value.word;

    for (var i: number = 0; i < form.value.word.length; i++) {
      this.permute(newStr, 1, newStr.length);
      newStr = form.value.word.substring(i, form.value.word.length - 1);
    }
  }

  permute(str: String, l: number, r: number) {
    if (l == r) {
      console.log(str);
    } else {
      for (var i = l; i <= r; i++) {
        str = this.swap(str, l, i);
        this.permute(str, l + 1, r);
        str = this.swap(str, l, i);
      }
    }
  }

  swap(a: String, i: number, j: number): String {
    var temp: String;
    var charArray;
    charArray = a.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;

    return charArray.join("");
  }
}
