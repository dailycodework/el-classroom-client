import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../resource.service';

@Component({
  selector: 'el-powerpoints',
  templateUrl: './power-points.component.html',
  styleUrls: ['./power-points.component.scss']
})
export class PowerPointsComponent {

  studentsLevel$;
  topics$
  resources$;
  placeholder='/assets/images/worksheet1.pdf';

  constructor(
    private resourceService: ResourceService) {
    this.studentsLevel$ = resourceService.getStudentsLevel();
    this.resources$ = resourceService.getAllResources();
    this.topics$ = resourceService.getTopics();

  }

}

