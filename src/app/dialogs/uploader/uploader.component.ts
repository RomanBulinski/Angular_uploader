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
  typeFC: FormControl;
  foundedDocumentNameFC: FormControl;

  EMPTY_STRING = '';

  typesFile: string[] = [ '', 'Wniosek o tarcze_pdf', 'Podanie_txt', 'Dokument_JPG'  ];
  private fileToUpload: File;

  constructor(
    public dialogRef: MatDialogRef<UploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
  }

  ngOnInit() {
    this.foundedDocumentNameFC = new FormControl(this.EMPTY_STRING);
    console.log(this.dialogData.fileFormat);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(event) {
    const fileList: FileList = event.target.files;
    this.fileToUpload = fileList.item(0);
    // console.log(this.fileToUpload);
    // console.log(this.fileToUpload.type);
    // console.log(this.fileToUpload.name);
    // console.log(this.fileToUpload.size);
    this.foundedDocumentNameFC = new FormControl(this.fileToUpload.name);
  }
}
