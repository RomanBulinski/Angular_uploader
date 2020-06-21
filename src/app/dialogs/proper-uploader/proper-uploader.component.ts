import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FileData} from '../../interfaces/FileData';
import {SmsConfirmationComponent} from '../smsConfirmation/smsConfirmation.component';
import {ProposalServiceService} from '../services/proposal-service.service';
import {FileFormatsEnum} from '../../enum/fileFormatsEnum';


@Component({
  selector: 'app-proper-uploader',
  templateUrl: './proper-uploader.component.html',
  styleUrls: ['./proper-uploader.component.scss']
})
export class ProperUploaderComponent implements OnInit {

  isButtonOkDisabled: boolean;
  acceptetFormats: FileFormatsEnum[];
  message: string;

  constructor(
    public matDialog: MatDialog,
    public dialogRef: MatDialogRef<ProperUploaderComponent>,
    private proposalService: ProposalServiceService,
    @Inject(MAT_DIALOG_DATA) public fileData: FileData) {
  }

  ngOnInit() {
    this.initVariabels();
  }

  initVariabels(): void {
    this.acceptetFormats = [FileFormatsEnum.PDF];
    this.message = '';
  }

  smsCheckAndFileSave(): void {
    this.smsCheck();
    this.sendToDB();
  }

  smsCheck(): void {
    const dialogRef = this.matDialog.open(SmsConfirmationComponent, {
      width: '350px',
      data: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.isSMScheckd = true;
        // this.message = 'Zapisano plik : ' + this.fileData.name;
        // this.foundedDocumentFC = new FormControl(this.EMPTY_STRING,);
        // this.toggleOkButton();
      } else {
        // this.isSMScheckd = false;
        // this.message = 'Niezakończono operacji';
      }
    });
  }


  getDataFromCore(fileData: FileData) {
    this.showMessage('Plik : '+ fileData.name +', jest gotowy do zapisu')
  }

  showMessage(message: string){
    this.message = message;
  }

  // smsCheck(): void {
  //   const dialogRef = this.matDialog.open(SmsConfirmationComponent, {
  //     width: '350px',
  //     data: true,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.isSMScheckd = true;
  //       this.message = 'Zapisano plik : ' + this.fileData.name;
  //       this.foundedDocumentFC = new FormControl(this.EMPTY_STRING);
  //       this.toggleOkButton();
  //     } else {
  //       this.isSMScheckd = false;
  //       this.message = 'Niezakończono operacji';
  //     }
  //   });
  // }

  sendToDB() {
    // this.proposalService.save(this.fileData);
  }

  close(): void {
    this.dialogRef.close();
  }

}
