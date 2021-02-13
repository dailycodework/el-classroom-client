import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultsComponent } from './components/adults/adults.component';
import { KindergartensComponent } from './components/kindergartens/kindergartens.component';
import { TeenagersComponent } from './components/teenagers/teenagers.component';
import { WorksheetsComponent } from './components/worksheets/worksheets.component';
import {WorksheetRoutingModule} from './worksheet-routing.module';
import { WorksheetDashbComponent } from './worksheet-dashb.component';






@NgModule({
  declarations: [
    AdultsComponent,
    KindergartensComponent,
    TeenagersComponent,
    WorksheetsComponent,
    WorksheetDashbComponent],
  imports: [
    CommonModule,
    WorksheetRoutingModule
  ]
})
export class WorksheetModule { }
