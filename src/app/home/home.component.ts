import {Component, OnInit} from "@angular/core";

@Component({
  selector: "el-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  backgroundColor = "landing-gradient-red-orange";
  constructor() {}

  ngOnInit() {}

}
