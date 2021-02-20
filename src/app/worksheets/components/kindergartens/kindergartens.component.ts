import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-kindergartens-worksheets',
  templateUrl: './kindergartens.component.html',
  styleUrls: ['./kindergartens.component.scss']
})
export class KindergartensComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
