import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResourcesDashboardComponent} from './resources-dashboard.component';
import {FileUploadComponent} from './upload/file-upload/file-upload.component';
import {ResourceHeaderComponent} from '../../../shared/resource-header/resource-header.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {WorksheetsComponent} from './worksheets/worksheets/worksheets.component';
import {PowerPointsComponent} from './powerpoints/powerpoints/power-points.component';

const routes:Routes = [
  {path: 'elc/resource', component:ResourcesDashboardComponent,
    children :[
      {path : 'worksheets', component : WorksheetsComponent},
      {path : 'powerpoints', component:PowerPointsComponent}
    ]},
]


@NgModule({
  declarations: [
    FileUploadComponent,
    ResourceHeaderComponent
  ],
  exports: [
    ResourceHeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbCollapseModule
  ]
})
export class ResourceRouteModule { }
