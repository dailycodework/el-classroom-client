import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {FileUploadComponent} from './upload/file-upload/file-upload.component';
import {WorksheetsModule} from './resources/worksheets/worksheets.module';
import {PowerPointsModule} from './resources/powerpoints/power-points.module';



const routes: Routes = [

  { path: '', component: HomeComponent},

  { path: 'worksheets',
    loadChildren: () => import('./resources/worksheets/worksheets.module')
      .then(m => m.WorksheetsModule) },
  {path: 'all-worksheets', redirectTo : 'worksheets/all-worksheets', pathMatch: 'full'},


/*
  { path: 'powerpoints',
    loadChildren: () => import('./resources/powerpoints/power-points.module')
      .then(m => m.PowerPointsModule) },
  {path: 'all-powerpoints', redirectTo : 'powerpoints/all-powerpoints', pathMatch: 'full'},
*/


  { path: 'upload', component:FileUploadComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WorksheetsModule,
    PowerPointsModule
  ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
