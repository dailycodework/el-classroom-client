import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";
@Component({
  selector: "app-right-image",
  templateUrl: "./right-image.component.html",
  styleUrls: ["./right-image.component.scss"]
})
export class RightImageComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      // photo: "./assets/images/landing/app_screenshots/550/01.png"
      photo: "./assets/images/landing/svg/slider1.svg"
    },
    {
      photo: "./assets/images/landing/svg/slider2.svg"
      // photo: "./assets/images/landing/app_screenshots/550/02.png"
    },
    {
      photo: "./assets/images/landing/svg/slider3.svg"
      // photo: "./assets/images/landing/app_screenshots/550/03.png"
    },
    {
      photo: "./assets/images/landing/svg/slider4.svg"
      // photo: "./assets/images/landing/app_screenshots/550/04.png"
    },
    {
      photo: "./assets/images/landing/svg/slider5.svg"
      // photo: "./assets/images/landing/app_screenshots/550/05.png"
    },
    {
      photo: "./assets/images/landing/svg/slider6.svg"
      // photo: "./assets/images/landing/app_screenshots/550/01.png"
    }
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 1,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  constructor() {}

  ngOnInit() {}
}
