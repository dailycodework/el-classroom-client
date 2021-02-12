import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultsComponent } from './adults/adults.component';
import { KindergartensComponent } from './kindergartens/kindergartens.component';
import { TeenagersComponent } from './teenagers/teenagers.component';
import { WorksheetsComponent } from './worksheets/worksheets.component';
import {WorksheetRoutingModule} from './worksheet-routing.module';
import { ResourcesDashboardComponent } from '../resources-dashboard.component';






@NgModule({
  declarations: [
    AdultsComponent,
    KindergartensComponent,
    TeenagersComponent,
    WorksheetsComponent,
    ResourcesDashboardComponent],
  imports: [
    CommonModule,
    WorksheetRoutingModule
  ]
})
export class WorksheetModule { }
