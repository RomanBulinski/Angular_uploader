import {Component, OnInit} from '@angular/core';
import {MatCalendarCellCssClasses, MatDialog, MatDialogConfig} from '@angular/material';
import {FileTypeEnum} from '../enum/fileTypesEnum';
import {ObservableExample} from '../example/ObservableExample';
import {ProperUploaderComponent} from '../dialogs/proper-uploader/proper-uploader.component';
import {SaverComponent} from '../commons/saver/saver.component';


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

  date : Date = null;
  // date : Date = new Date(2020, 7, 1);
  minDate = new Date(2020, 7, 1);
  // maxDate = new Date(2025,2,1);

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
  openSaver() {
    const dialogRef = this.matDialog.open(SaverComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }


}

