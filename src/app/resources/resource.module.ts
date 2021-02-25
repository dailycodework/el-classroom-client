import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import {ResourceComponent} from './resource.component';
import {WorksheetsComponent} from './worksheets/worksheets.component';
import {PowerPointsComponent} from './powerpoints/power-points.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    ResourceComponent,
    WorksheetsComponent,
    PowerPointsComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    PdfViewerModule
  ]
})
export class ResourceModule { }
