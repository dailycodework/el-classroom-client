import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {FileUploadComponent} from './upload/file-upload/file-upload.component';
import {WorksheetModule} from './worksheets/worksheet.module';
import {PowerPointsModule} from './powerpoints/power-points.module';
import {WorksheetsComponent} from './worksheets/components/worksheets/worksheets.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'worksheets',
    loadChildren: () => import('./worksheets/worksheet.module').then(m => m.WorksheetModule) },
  {path: 'all-worksheets', redirectTo : 'worksheets/all-worksheets', pathMatch: 'full'},
  { path: 'upload', component:FileUploadComponent}
];

@NgModule({
  imports: [
    WorksheetModule,
    PowerPointsModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
