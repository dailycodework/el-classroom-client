import { Component, OnInit } from '@angular/core';
import {ResourceService} from './resource.service';

@Component({
  selector: 'el-worksheet-dashb',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
   title = 'The title will go here'

  studentsLevel$;
  resources$;

  constructor(
    private resourceService: ResourceService) {
    this.studentsLevel$ = resourceService.getStudentsLevel();
   this.resources$ = resourceService.getAllResources();

  }


}
