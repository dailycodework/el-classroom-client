import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

@Component({
  selector: 'el-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  defaultImage = '/assets/images/elclass.pdf';
  imSrc : string;

  constructor() { }

  ngOnInit(): void {
    this.imSrc = this.defaultImage
  }

/*

  public currentPdf: string

  displayPdf() {
    this.service.getPdfExtractedContent(this.id)
      .pipe(first())
      .subscribe(
        data => {
          this.currentPdf = URL.createObjectURL(this.b64toBlob(data.ExtractedByte,
            'data:application/pdf;base64', 1024));
          },
        error => {
          console.log(error);
        }
      );
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
  }
*/

}
