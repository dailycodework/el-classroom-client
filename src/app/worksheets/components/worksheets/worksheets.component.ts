import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {FileService} from '../../../services/file.service';

@Component({
  selector: 'el-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent implements OnInit {
  placeholder = '/assets/images/worksheet1.pdf';
  resources : any[];
  constructor(
    private db : AngularFireDatabase,
    private fileService: FileService
  ) { }

  ngOnInit(){
   this.fileService.fileDetailList
     .snapshotChanges()
     .subscribe(list=>{
       this.resources = list.map(item=>{
         return item.payload.val();
       })
       console.log(this.resources)
     })
  }

}
