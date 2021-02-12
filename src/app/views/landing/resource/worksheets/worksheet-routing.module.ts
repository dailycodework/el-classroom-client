import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdultsComponent} from './adults/adults.component';
import {KindergartensComponent} from './kindergartens/kindergartens.component';
import {TeenagersComponent} from './teenagers/teenagers.component';
import {SideNavComponent} from '../../../../shared/side-nav/side-nav.component';
import {WorksheetsComponent} from './worksheets/worksheets.component';



const routes: Routes = [
      { path: 'all-worksheets', component: WorksheetsComponent},
      { path: 'kindergartens', component: KindergartensComponent},
      { path: 'teenagers', component:TeenagersComponent},
      { path: 'adults', component: AdultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SideNavComponent],
  declarations: [
    SideNavComponent
  ]
})
export class WorksheetRoutingModule {}
