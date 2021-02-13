import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdultsComponent} from './components/adults/adults.component';
import {KindergartensComponent} from './components/kindergartens/kindergartens.component';
import {TeenagersComponent} from './components/teenagers/teenagers.component';
import {WorksheetsComponent} from './components/worksheets/worksheets.component';
import {WorksheetDashbComponent} from './worksheet-dashb.component';




const routes: Routes = [

       {path:  'worksheets', component: WorksheetDashbComponent,
         children:[
           {path: 'all-worksheets', component:WorksheetsComponent},
           { path: 'kindergartens', component: KindergartensComponent},
           { path: 'teenagers', component:TeenagersComponent},
           { path: 'adults', component: AdultsComponent}
         ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class WorksheetRoutingModule {}
