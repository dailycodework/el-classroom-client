import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdultsComponent} from './adults/adults.component';
import {KindergartensComponent} from './kindergartens/kindergartens.component';
import {TeenagersComponent} from './teenagers/teenagers.component';
import {WorksheetsComponent} from './worksheets/worksheets.component';
import {WorksheetsDashboardComponent} from './worksheets-dashboard/worksheets-dashboard.component';



const routes: Routes = [

  { path: 'worksheets', component: WorksheetsComponent,
    children:[
      { path: 'kindergartens', component: KindergartensComponent},
      { path: 'teenagers', component:TeenagersComponent},
      { path: 'adults', component: AdultsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksheetRoutingModule {}
