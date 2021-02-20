import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { KindergartensComponent } from './components/kindergartens/kindergartens.component';
import { IntermediatesComponent } from './components/intermediates/intermediates.component';
import { WorksheetsComponent } from './components/worksheets/worksheets.component';
import {WorksheetRoutingModule} from './worksheet-routing.module';
import { WorksheetDashbComponent } from './worksheet-dashb.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { ElementaryComponent } from './components/elementary/elementary.component';






@NgModule({
  declarations: [
    AdvancedComponent,
    KindergartensComponent,
    IntermediatesComponent,
    WorksheetsComponent,
    WorksheetDashbComponent,
    ElementaryComponent],
    imports: [
        CommonModule,
        WorksheetRoutingModule,
        PdfViewerModule
    ]
})
export class WorksheetModule { }
