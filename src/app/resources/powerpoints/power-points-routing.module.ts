import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdultsPptComponent} from './adults/adults-ppt.component';
import {KindergartensPptComponent} from './kindergartens/kindergartens-ppt.component';
import {TeenagersPptComponent} from './teenagers/teenagers-ppt.component';
import {PowerPointsComponent} from './powerpoints/power-points.component';
import {ResourcesDashbComponent} from '../resources-dashb.component';




const routes: Routes = [
  {path: 'powerpoints', component: ResourcesDashbComponent,
  children:[
    {path: 'all-powerpoint', component: PowerPointsComponent},
    { path: 'kindergartens-ppt', component: KindergartensPptComponent},
    { path: 'teenagers-ppt', component:TeenagersPptComponent},
    { path: 'adults-ppt', component: AdultsPptComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerPointsRoutingModule {}
