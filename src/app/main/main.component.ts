import {Component, OnInit} from '@angular/core';
import {UploaderComponent} from '../dialogs/uploader/uploader.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AngularUploaderComponent} from '../dialogs/angular-uploader/angular-uploader.component';
import {FileTypeEnum} from '../enum/fileTypesEnum';


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
  }

  openUploaderDialog(fileTypesEnum: FileTypeEnum): void {
    const dialogRef = this.matDialog.open(UploaderComponent, this.setDialogConfig(fileTypesEnum));
    dialogRef.afterClosed().subscribe(result => {
      console.log('The uploader dialog was closed');
    });
  }

  private setDialogConfig(fileTypeEnum: FileTypeEnum): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      fileType: fileTypeEnum,
    };
    return dialogConfig;
  }

  openAngularUploaderDialog(fileTypesEnum: FileTypeEnum): void {
    const dialogRef = this.matDialog.open(AngularUploaderComponent, this.setDialogConfigForAngularUploader(fileTypesEnum));
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private setDialogConfigForAngularUploader(fileTypeEnum: FileTypeEnum): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      fileType: fileTypeEnum,
      fileFormatsInString: this.setFormatsFile(fileTypeEnum),
      urlUploader: this.setUrlApi(fileTypeEnum),
    };
    return dialogConfig;
  }

  private setFormatsFile(fileTypeEnum: FileTypeEnum): string {
    if (fileTypeEnum === FileTypeEnum.WNIOSEK) {
      return '.pdf, .jpeg';
    }
    if (fileTypeEnum === FileTypeEnum.PODANIE) {
      return '.jpg';
    }
  }

  private setUrlApi(fileTypeEnum: FileTypeEnum): string {
    if (fileTypeEnum === FileTypeEnum.WNIOSEK) {
      return 'https://example-file-upload-api';
    }
    if (fileTypeEnum === FileTypeEnum.PODANIE) {
      return 'https://example-file-upload-api';
    }
  }



}

