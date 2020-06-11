import {Component, OnInit} from '@angular/core';
import {UploaderComponent} from '../dialogs/uploader/uploader.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogData} from '../interfaces/DialogData';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  animal: string;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  getTypeAndOpenUploaderDialog(typeOfDocument: string): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: typeOfDocument };
    const dialogRef = this.dialog.open(UploaderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
