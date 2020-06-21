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
  // fileData: FileData;
  isClearForm: boolean;

  constructor(
    public matDialog: MatDialog,
    public dialogRef: MatDialogRef<ProperUploaderComponent>,
    private proposalService: ProposalServiceService,
    @Inject(MAT_DIALOG_DATA) public fileData: FileData) {
  }

  ngOnInit(): void {
    this.initVariabels();
  }

  initVariabels(): void {
    this.acceptetFormats = [FileFormatsEnum.PDF];
    this.message = '';
    this.isClearForm = false;
  }

  smsCheckAndFileSave(): void {
    this.smsCheck();
  }

  smsCheck(): void {
    const dialogRef = this.matDialog.open(SmsConfirmationComponent, {
      width: '350px',
      data: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showMessage('Zapisano plik :' + this.fileData.name);
        this.sendToDB();
      } else {
        this.showMessage('Nie zapisano pliku :' + this.fileData.name);
      }
      this.isClearForm = this.isClearForm != true;
    });
  }

  getDataFromCore(fileData: FileData): void {
    this.fileData = fileData;
    this.showMessage('Plik : '+ fileData.name +', jest gotowy do zapisu');
  }

  private showMessage(message: string): void{
    this.message = message;
  }

  sendToDB(): void {
    // this.proposalService.save(this.fileData);
  }

  close(): void {
    this.dialogRef.close();
  }

}
