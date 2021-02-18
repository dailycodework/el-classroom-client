import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {WINDOW_PROVIDERS, WINDOW} from "../../helpers/window.helpers";

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
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop || 0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  hidemenu() {
    this.isCollapsed = true;
  }
}
