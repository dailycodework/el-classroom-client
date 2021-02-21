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
import {FileUploadComponent} from './upload/file-upload/file-upload.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {DownloadComponent} from './download/download.component';
import {WorksheetRoutingModule} from './worksheets/worksheet-routing.module';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {FormService} from './services/form.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
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
    WorksheetRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[FormService],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
