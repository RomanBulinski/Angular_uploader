import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../interfaces/DialogData';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  typesFile: string[] = [ '','Wniosek o tarcze_pdf', 'Podanie_txt', 'Dokument_JPG'  ];
  private fileToUpload: File;

  constructor(
    public dialogRef: MatDialogRef<UploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(files: any) {
    console.log(files);
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }
  
}
