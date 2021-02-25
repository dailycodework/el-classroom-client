import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PowerPointsComponent} from './resources/powerpoints/power-points.component';
import {ResourcesUploadComponent} from './resources/resources-upload/resources-upload.component';

import {ContactFormComponent} from './home/components/contact-form/contact-form.component';
import {ResourceComponent} from './resources/resource.component';
import {WorksheetsComponent} from './resources/worksheets/worksheets.component';
import {DownloadComponent} from './resources/download/download.component';
import {ResourceModule} from './resources/resource.module';
import {ResourceRoutingModule} from './resources/resource-routing.module';


const routes: Routes = [

  {
    path: 'contact',
    component: ContactFormComponent
  },

  {
    path: 'upload',
    component: ResourcesUploadComponent
  },

  {
    path: 'download',
    component: DownloadComponent
  },

  {
    path: 'worksheets', redirectTo :'resources/worksheets'
  },

  {
    path: 'powerpoint', redirectTo :'resources/powerpoint'
  },

  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    ResourceRoutingModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
