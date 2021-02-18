import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {WorksheetModule} from './worksheets/worksheet.module';
import {PowerPointsModule} from './powerpoints/power-points.module';
import {WorksheetsComponent} from './worksheets/components/worksheets/worksheets.component';
import {PowerPointsComponent} from './powerpoints/components/powerpoints/power-points.component';
import {FileUploadComponent} from './upload/file-upload/file-upload.component';
import {DownloadComponent} from './download/download.component';


const routes: Routes = [

  {path: 'powerpoints', component: PowerPointsComponent},
  {path: 'upload-file', component: FileUploadComponent},
  {path: 'download', component: DownloadComponent},
  { path: 'worksheets',
    loadChildren: () => import('./worksheets/worksheet.module').then(m => m.WorksheetModule) },
  {path: 'all-worksheets', redirectTo : 'worksheets/all-worksheets', pathMatch: 'full'},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    WorksheetModule,
    PowerPointsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
