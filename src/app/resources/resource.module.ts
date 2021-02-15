import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorksheetsModule} from './worksheets/worksheets.module';
import {PowerPointsModule} from './powerpoints/power-points.module';
import {ResourcesDashbComponent} from './resources-dashb.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorksheetsModule,
    PowerPointsModule,


  ]
})
export class ResourceModule { }
