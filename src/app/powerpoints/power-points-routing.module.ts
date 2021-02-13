import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdultsPptComponent} from './components/adults/adults-ppt.component';
import {KindergartensPptComponent} from './components/kindergartens/kindergartens-ppt.component';
import {TeenagersPptComponent} from './components/teenagers/teenagers-ppt.component';
import {PowerPointsComponent} from './components/powerpoints/power-points.component';




const routes: Routes = [
  {path: 'powerpoints', component: PowerPointsComponent,
  children:[
    { path: 'kindergartens', component: KindergartensPptComponent},
    { path: 'teenagers', component:TeenagersPptComponent},
    { path: 'adults', component: AdultsPptComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerPointsRoutingModule {}
