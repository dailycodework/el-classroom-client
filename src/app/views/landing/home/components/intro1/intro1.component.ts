import { SharedAnimations } from "src/app/shared/animations/shared-animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-intro1",

  templateUrl: "./intro1.component.html",
  styleUrls: ["./intro1.component.scss"],

  animations: [SharedAnimations]
})
export class Intro1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
