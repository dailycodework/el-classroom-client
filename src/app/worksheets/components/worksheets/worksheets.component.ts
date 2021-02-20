import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
