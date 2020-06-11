import {Component, OnInit} from '@angular/core';
import {UploaderComponent} from '../dialogs/uploader/uploader.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  getTypeAndOpenUploaderDialog(typeOfDocument: string): void {
    let title: string;
    switch (typeOfDocument) {
      case 'wniosek': {
        title = 'wniosek';
        break;
      }
      case 'dokument': {
        title = 'dokument';
        break;
      }
      case 'podanie': {
        title = 'podanie';
        break;
      }
      case 'dokument_png': {
        title = 'dokument_png';
        break;
      }
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {dialogTitle: title};

    const dialogRef = this.matDialog.open(UploaderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
