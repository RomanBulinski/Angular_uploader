import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FileData} from '../../interfaces/FileData';


@Component({
  selector: 'app-angular-uploader',
  templateUrl: './angular-uploader.component.html',
  styleUrls: ['./angular-uploader.component.scss']
})
export class AngularUploaderComponent implements OnInit {

  resetVar: any;
  URL_UPLOADER = 'https://example-file-upload-api';

  constructor(
    public dialogRef: MatDialogRef<AngularUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public fileData: FileData) {
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: this.fileData.fileFormatsInString,
    maxSize: '1',
    uploadAPI: {
      url: this.fileData.urlUploader,
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        // "Authorization" : `Bearer ${token}`
        Authorization: `Bearer`
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    // theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Znajdż plik',
      resetBtn: 'Reset',
      uploadBtn: 'Zapisz',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Plik został załadowany',
      afterUploadMsg_error: 'Plik nie został załadowany',
      sizeLimit: 'Size Limit'
    }
  };

  DocUpload($event: any) {
    // console.log($event);
  }

  ngOnInit() {
  }


  close(): void {
    this.dialogRef.close();
  }

}
