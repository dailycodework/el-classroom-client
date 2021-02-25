import {Component, OnInit} from '@angular/core';
import {ResourceService} from '../resource.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'el-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent implements OnInit{
  studentsLevel$;
  topics$
  resources$;
  level
  studentsLevel: string;
  resources : any[];

  constructor(
    private db : AngularFireDatabase,
    private activatedRoute : ActivatedRoute,
    private resourceService: ResourceService) {
    this.studentsLevel$ = resourceService.getStudentsLevel();
   // this.resources$ = resourceService.getAllResources();
    this.topics$ = resourceService.getTopics();
    activatedRoute.queryParamMap.subscribe(params =>{
      this.studentsLevel = params.get('studentsLevel');
      console.log(this.studentsLevel)
    })
  }

  ngOnInit(){
    this.resourceService.getAllResources()
      .snapshotChanges().subscribe(list=>{
        this.resources = list.map(item =>{
          return item.payload.val();
        })
    })
  }
}
