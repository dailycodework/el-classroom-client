import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultsComponent } from './adults/adults.component';
import { KindergartensComponent } from './kindergartens/kindergartens.component';
import { TeenagersComponent } from './teenagers/teenagers.component';
import { WorksheetsComponent } from './worksheets/worksheets.component';
import {WorksheetRoutingModule} from './worksheet-routing.module';
import {HomeModule} from '../home/home.module';
import { WorksheetsDashboardComponent } from './worksheets-dashboard/worksheets-dashboard.component';
import {AppModule} from '../../../app.module';





@NgModule({
  declarations: [
    AdultsComponent,
    KindergartensComponent,
    TeenagersComponent,
    WorksheetsComponent,
    WorksheetsDashboardComponent],
  imports: [
    CommonModule,
    WorksheetRoutingModule,
  ]
})
export class WorksheetModule { }
