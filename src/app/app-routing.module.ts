import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './views/landing/home/home.component';
import {ResourceModule} from './views/landing/resource/resource.module';
import {WorksheetsComponent} from './views/landing/resource/worksheets/worksheets/worksheets.component';
import {PowerPointsComponent} from './views/landing/resource/powerpoints/powerpoints/power-points.component';



const routes: Routes = [

  { path: 'worksheets', component: WorksheetsComponent,
    loadChildren: () =>
      import('./views/landing/resource/worksheets/worksheet.module').then(m => m.WorksheetModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },


  { path: 'powerpoints', component: PowerPointsComponent,
    loadChildren: () =>
      import('./views/landing/resource/powerpoints/power-points.module').then(m => m.PowerPointsModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: HomeComponent}
  ];

@NgModule({
  imports: [
    ResourceModule,
    RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
