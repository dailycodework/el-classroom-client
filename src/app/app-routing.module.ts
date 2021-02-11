import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './views/landing/home/home.component';
import {AdultsComponent} from './views/landing/worksheets/adults/adults.component';
import {KindergartensComponent} from './views/landing/worksheets/kindergartens/kindergartens.component';
import {TeenagersComponent} from './views/landing/worksheets/teenagers/teenagers.component';
import {AdultsPptComponent} from './views/landing/powerpoints/adults/adults-ppt.component';
import {KindergartensPptComponent} from './views/landing/powerpoints/kindergartens/kindergartens-ppt.component';
import {TeenagersPptComponent} from './views/landing/powerpoints/teenagers/teenagers-ppt.component';
import {WorksheetsComponent} from './views/landing/worksheets/worksheets/worksheets.component';
import {PowerPointsComponent} from './views/landing/powerpoints/powerpoints/power-points.component';
import {WorksheetRoutingModule} from './views/landing/worksheets/worksheet-routing.module';
import {PowerPointsRoutingModule} from './views/landing/powerpoints/power-points-routing.module';
import {WorksheetModule} from './views/landing/worksheets/worksheet.module';
import {PowerPointsModule} from './views/landing/powerpoints/power-points.module';
import {FileUploadComponent} from './views/landing/upload/file-upload/file-upload.component';


const routes: Routes = [
  /*{ path: 'adults', component: AdultsComponent},
  { path: 'kindergartens', component: KindergartensComponent},
  { path: 'teenagers', component:TeenagersComponent},
  { path: 'adults-ppt', component: AdultsPptComponent},
  { path: 'kindergartens-ppt', component: KindergartensPptComponent},
  { path: 'teenagers-ppt', component:TeenagersPptComponent},
  { path: 'worksheets', component: WorksheetsComponent},
  { path: 'power-points', component: PowerPointsComponent},*/

  { path: '', component: HomeComponent},
  { path: 'upload', component:FileUploadComponent}
];

@NgModule({
  imports: [
    WorksheetModule,
    PowerPointsModule,
    RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
