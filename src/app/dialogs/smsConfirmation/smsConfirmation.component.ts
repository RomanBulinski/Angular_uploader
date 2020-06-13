import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './smsConfirmation.component.html',
  styleUrls: ['./smsConfirmation.component.scss']
})
export class SmsConfirmationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SmsConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

  ok(): void{
    this.close();
  }

}
