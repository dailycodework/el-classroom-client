import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorksheetsRoutingModule} from './worksheets-routing.module';
import {AdultsComponent} from './adults/adults.component';
import {TeenagersComponent} from './teenagers/teenagers.component';
import {KindergartensComponent} from './kindergartens/kindergartens.component';
import {WorksheetsComponent} from './worksheet/worksheets.component';



@NgModule({
  declarations: [
    AdultsComponent,
    TeenagersComponent,
    KindergartensComponent,
    WorksheetsComponent
  ],
  imports: [
    CommonModule,
    WorksheetsRoutingModule
  ]
})
export class WorksheetsModule { }
