import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-teenagers-worksheets',
  templateUrl: './intermediates.component.html',
  styleUrls: ['./intermediates.component.scss']
})
export class IntermediatesComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
