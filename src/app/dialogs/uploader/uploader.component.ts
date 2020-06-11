import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../interfaces/DialogData';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  nameFC: FormControl;
  formatFileFC: FormControl;
  foundedDocumentNameFC: FormControl;

  private fileToUpload: File;

  EMPTY_STRING = '';

  // typesFile: string[] = ['', 'Wniosek o tarcze_pdf', 'Podanie_txt', 'Dokument_JPG'];
  formatsFile: string[] = ['', 'application/pdf', 'image/jpeg', 'image/png', 'TXT'];

  constructor(
    public dialogRef: MatDialogRef<UploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
  }

  ngOnInit() {
    this.foundedDocumentNameFC = new FormControl(this.EMPTY_STRING);
    this.nameFC = new FormControl(this.EMPTY_STRING);
    this.formatFileFC = new FormControl(this.EMPTY_STRING);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(event): void {
    const fileList: FileList = event.target.files;
    this.fileToUpload = fileList.item(0);
    // console.log(this.fileToUpload);
    // console.log(`this.fileToUpload.type)`;
    // console.log(this.fileToUpload.name);
    // console.log(this.fileToUpload.size);
    if (this.checkFormatFile()) {
      this.foundedDocumentNameFC = new FormControl(this.fileToUpload.name);
    } else {
      this.foundedDocumentNameFC = new FormControl('zly format plku');
    }
  }

  private checkFormatFile(): boolean {
    return (this.fileToUpload.type === this.formatFileFC.value);
  }
}
