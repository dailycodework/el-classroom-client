import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

@Component({
  selector: 'el-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  defaultImage = '/assets/images/elclass.pdf';
  imSrc : string;
  placeholder = '/assets/images/worksheet1.pdf';

  constructor() { }

  ngOnInit(): void {
    this.imSrc = this.defaultImage
  }


}
