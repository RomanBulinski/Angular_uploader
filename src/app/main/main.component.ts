import {Component, OnInit} from '@angular/core';
import {UploaderComponent} from '../dialogs/uploader/uploader.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogData} from '../interfaces/DialogData';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent implements OnInit {

  WNIOSEK: string = 'wniosek';
  PODANIE: string = 'podanie';
  DOCUMENT: string = 'dokument';

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  getTypeAndOpenUploaderDialog(typeOfDocument: string): void {
    let format: string;
    if( typeOfDocument === 'wniosek' )format ='PDF';
    if( typeOfDocument === 'podanie' )format ='JPG';
    if( typeOfDocument === 'dokument' )format ='txt';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name: typeOfDocument, fileFormat: format };

    const dialogRef = this.matDialog.open(UploaderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
