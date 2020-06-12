import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../interfaces/DialogData';


@Component({
  selector: 'app-angular-uploader',
  templateUrl: './angular-uploader.component.html',
  styleUrls: ['./angular-uploader.component.scss']
})
export class AngularUploaderComponent implements OnInit {

  resetVar: any;
  const;
  URL_UPLOADER = 'https://example-file-upload-api';

  constructor(
    public dialogRef: MatDialogRef<AngularUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.pdf',
    maxSize: '1',
    uploadAPI: {
      url: this.URL_UPLOADER,
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
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  DocUpload($event: any) {

  }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
