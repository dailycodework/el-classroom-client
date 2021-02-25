import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourceComponent} from './resource.component';
import {WorksheetsComponent} from './worksheets/worksheets.component';
import {PowerPointsComponent} from './powerpoints/power-points.component';

const routes: Routes = [
  {path: 'resources', component: ResourceComponent,
  children:[
    {path: 'worksheets', component: WorksheetsComponent},
    {path: 'powerpoint', component: PowerPointsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
