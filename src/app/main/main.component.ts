import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FileTypeEnum} from '../enum/fileTypesEnum';
import {ObservableExample} from '../example/ObservableExample';
import {ProperUploaderComponent} from '../dialogs/proper-uploader/proper-uploader.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  WNIOSEK = FileTypeEnum.WNIOSEK;
  PODANIE = FileTypeEnum.PODANIE;
  DOKUMENT = FileTypeEnum.DOKUMENT;
  INNY = FileTypeEnum.INNY;

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit() {
    // const promis = new Promis();
    const obs = new ObservableExample();
  }

  openProperUploader(fileTypesEnum: FileTypeEnum) {
    const dialogRef = this.matDialog.open(ProperUploaderComponent, this.setDialogConfigForProperUploader(fileTypesEnum));
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private setDialogConfigForProperUploader(fileTypeEnum: FileTypeEnum): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      fileType: fileTypeEnum,
    };
    return dialogConfig;
  }

}

