import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: "el-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.scss"]
})
export class HomeHeaderComponent implements OnInit {
  isFixed;
  public isCollapsed = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,

  ) {}

  ngOnInit() {}
  @HostListener("window:scroll", [])


  @HostBinding("class.menu-opened") menuOpened = false;

  hidemenu() {
    this.isCollapsed = true;
  }
}
