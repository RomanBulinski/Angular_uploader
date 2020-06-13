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
    console.log('test');
    console.log($event);
    console.log('test-2');
    console.log(this.resetVar);
  }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
