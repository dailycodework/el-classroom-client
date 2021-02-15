import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeenagersPptComponent } from './teenagers/teenagers-ppt.component';
import { AdultsPptComponent } from './adults/adults-ppt.component';
import {KindergartensPptComponent} from './kindergartens/kindergartens-ppt.component';
import {PowerPointsComponent} from './powerpoints/power-points.component';
import {PowerPointsRoutingModule} from './power-points-routing.module';





@NgModule({
  declarations: [
    TeenagersPptComponent,
    AdultsPptComponent,
    KindergartensPptComponent,
    PowerPointsComponent
  ],
  imports: [
    CommonModule,
    PowerPointsRoutingModule,
  ]
})
export class PowerPointsModule { }
