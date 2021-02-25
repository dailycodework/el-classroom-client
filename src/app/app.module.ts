import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeModule} from './home/home.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {ResourcesUploadComponent} from './resources/resources-upload/resources-upload.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {DownloadComponent} from './resources/download/download.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ResourceService} from './resources/resource.service';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesUploadComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    NgbCollapseModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[ResourceService],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
