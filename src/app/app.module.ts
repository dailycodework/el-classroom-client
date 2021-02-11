import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {HomeModule} from './views/landing/home/home.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {ResourceHeaderComponent} from './shared/resource-header/resource-header.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {WorksheetModule} from './views/landing/worksheets/worksheet.module';
import {PowerPointsModule} from './views/landing/powerpoints/power-points.module';
import { FileUploadComponent } from './views/landing/upload/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourceHeaderComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    NgbCollapseModule
  ],
  providers: [],
  exports: [
    ResourceHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
