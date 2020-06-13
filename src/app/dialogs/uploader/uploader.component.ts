import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {FileData} from '../../interfaces/FileData';
import {FileFormatsEnum} from '../../enum/fileFormatsEnum';
import {SmsConfirmationComponent} from '../smsConfirmation/smsConfirmation.component';
import {FileTypeEnum} from '../../enum/fileTypesEnum';
import {AppUtils} from '../../interfaces/Utils';
import {ProposalServiceService} from '../services/proposal-service.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  EMPTY_STRING = AppUtils.EMPTY_STRING;

  nameFC: FormControl;
  formatFileFC: FormControl;
  foundedDocumentFC: FormControl;

  // formatsFile = Object.values(FileFormatsEnum);
  formatsFile: FileFormatsEnum[];

  message: string;
  readonly: boolean;
  isButtonFindFileDisabled: boolean;
  isButtonOkDisabled: boolean;

  private fileToUpload: File;

  constructor(public matDialog: MatDialog,
              public dialogRef: MatDialogRef<UploaderComponent>,
              private proposalService: ProposalServiceService,
              @Inject(MAT_DIALOG_DATA) public fileData: FileData) {
  }

  ngOnInit() {
    this.setVariable(this.fileData.fileType);
    this.setFormControls();
  }

  setVariable(fileTypeEnum: FileTypeEnum): void {
    if (fileTypeEnum === FileTypeEnum.WNIOSEK) {
      this.fileData.fileFormats = [];
      this.fileData.fileFormats[0] = FileFormatsEnum.PDF;
      this.fileData.dialogTitle = FileTypeEnum.WNIOSEK;
    }
    if (fileTypeEnum === FileTypeEnum.PODANIE) {
      this.fileData.fileFormats = [];
      this.fileData.fileFormats[0] = FileFormatsEnum.JPG;
      this.fileData.fileFormats[1] = FileFormatsEnum.PDF;
      this.fileData.dialogTitle = FileTypeEnum.PODANIE;
    }
    if (fileTypeEnum === FileTypeEnum.DOKUMENT) {
      this.fileData.fileFormats = [];
      this.fileData.fileFormats[0] = FileFormatsEnum.TXT;
      this.fileData.dialogTitle = FileTypeEnum.DOKUMENT;
    }
    if (fileTypeEnum === FileTypeEnum.INNY) {
      this.fileData.fileFormats = [];
      this.fileData.fileFormats[0] = FileFormatsEnum.PDF;
      this.fileData.fileFormats[1] = FileFormatsEnum.JPG;
      this.fileData.fileFormats[2] = FileFormatsEnum.TXT;
      this.fileData.dialogTitle = FileTypeEnum.INNY;
    }
    this.formatsFile = this.fileData.fileFormats;
    this.readonly = true;
    this.isButtonFindFileDisabled = true;
    this.isButtonOkDisabled = true;
  }

  setFormControls() {
    this.nameFC = new FormControl(this.EMPTY_STRING);
    this.formatFileFC = new FormControl(this.fileData.fileFormats[0]);
    this.foundedDocumentFC = new FormControl(this.EMPTY_STRING,);
  }

  close(): void {
    this.dialogRef.close();
  }

  handleFileInput(event): void {
    const fileList: FileList = event.target.files;
    this.fileToUpload = fileList.item(0);
    if (this.checkFormatFile(this.fileToUpload)) {
      this.foundedDocumentFC = new FormControl(this.fileToUpload.name);
      this.fileData.loadedFile = this.fileToUpload;
      this.fileData.name = this.fileToUpload.name;
      this.message = 'Dokument jest gotowy do zapisu';
      this.toggleOkButton();
    } else {
      this.message = 'Zly format plku';
    }
  }

  private checkFormatFile(file: File): boolean {
    return (file.type === this.formatFileFC.value);
  }

  private toggleOkButton() {
    if(this.isButtonOkDisabled){
      this.isButtonOkDisabled = false;
    }else{
      this.isButtonOkDisabled = true;
    }
  }

  smsCheckAndFileSave(): void {
    this.smsCheck();
    this.savetoDB();
  }

  isSMScheckd = false;

  smsCheck(): void {
    const dialogRef = this.matDialog.open(SmsConfirmationComponent, {
      width: '350px',
      data: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isSMScheckd = true;
        this.message = 'Zapisano plik : ' + this.fileData.name;
        this.foundedDocumentFC = new FormControl(this.EMPTY_STRING,);
        this.toggleOkButton();
      } else {
        this.isSMScheckd = false;
        this.message = 'Niezakończono operacji';
      }
    });
  }

  savetoDB(){
    this.proposalService.save(this.fileData);
  }


}
