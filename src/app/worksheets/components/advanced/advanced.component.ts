import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-adults-worksheets',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
