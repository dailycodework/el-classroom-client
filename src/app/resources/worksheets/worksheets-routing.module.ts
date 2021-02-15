import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorksheetsComponent} from './worksheet/worksheets.component';
import {KindergartensComponent} from './kindergartens/kindergartens.component';
import {TeenagersComponent} from './teenagers/teenagers.component';
import {AdultsComponent} from './adults/adults.component';
import {ResourcesDashbComponent} from '../resources-dashb.component';


const routes: Routes = [

  {path:  'worksheets', component: ResourcesDashbComponent,
    children:[
      {path: 'all-worksheets', component:WorksheetsComponent},
      { path: 'kindergartens', component: KindergartensComponent},
      { path: 'teenagers', component:TeenagersComponent},
      { path: 'adults', component: AdultsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksheetsRoutingModule { }
