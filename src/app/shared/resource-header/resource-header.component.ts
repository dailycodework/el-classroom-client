import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {WINDOW} from '../../views/landing/helpers/window.helpers';


@Component({
  selector: "el-resource-header",
  templateUrl: "./resource-header.component.html",
  styleUrls: ["./resource-header.component.scss"]
})
export class ResourceHeaderComponent implements OnInit {
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

  hidemenu() {
    this.isCollapsed = true;
  }

}
