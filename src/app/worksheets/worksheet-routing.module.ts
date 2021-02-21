import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdvancedComponent} from './components/advanced/advanced.component';
import {KindergartensComponent} from './components/kindergartens/kindergartens.component';
import {IntermediatesComponent} from './components/intermediates/intermediates.component';
import {WorksheetsComponent} from './components/worksheets/worksheets.component';
import {WorksheetDashbComponent} from './worksheet-dashb.component';
import {SideNavComponent} from '../shared/side-nav/side-nav.component';
import {ElementaryComponent} from './components/elementary/elementary.component';
import {DownloadComponent} from '../download/download.component';




const routes: Routes = [

       {path:  'worksheets', component: WorksheetDashbComponent,
         children:[
           {path: 'all-worksheets', component:WorksheetsComponent},
           { path: 'kindergartens', component: KindergartensComponent},
           { path: 'intermediates', component:IntermediatesComponent},
           { path: 'elementary', component:ElementaryComponent},
           { path: 'advanced', component: AdvancedComponent},
           {path: ':id',  component: DownloadComponent}
         ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SideNavComponent],
  declarations: [SideNavComponent]
})
export class WorksheetRoutingModule {}
