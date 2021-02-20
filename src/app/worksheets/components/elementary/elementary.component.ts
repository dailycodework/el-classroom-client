import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-elementary',
  templateUrl: './elementary.component.html',
  styleUrls: ['./elementary.component.scss']
})
export class ElementaryComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
