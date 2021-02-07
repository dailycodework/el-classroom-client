import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";
@Component({
  selector: "app-works-carousel",
  templateUrl: "./works-carousel.component.html",
  styleUrls: ["./works-carousel.component.scss"]
})
export class WorksCarouselComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      photo: "./assets/images/landing/products/products9.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project One"
    },
    {
      photo: "./assets/images/landing/products/products11.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project Two"
    },
    {
      photo: "./assets/images/landing/products/products15.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project Three"
    },
    {
      photo: "./assets/images/landing/products/products17.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project Four"
    },
    {
      photo: "./assets/images/landing/products/products13.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project Five"
    },
    {
      photo: "./assets/images/landing/products/products12.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Project Six"
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
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  ngOnInit() {}
}
