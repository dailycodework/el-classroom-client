import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeenagersPptComponent } from './components/teenagers/teenagers-ppt.component';
import { AdultsPptComponent } from './components/adults/adults-ppt.component';
import {KindergartensPptComponent} from './components/kindergartens/kindergartens-ppt.component';
import {PowerPointsComponent} from './components/powerpoints/power-points.component';
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
