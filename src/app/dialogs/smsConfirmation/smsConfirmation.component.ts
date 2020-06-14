import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {AppUtils} from '../../interfaces/Utils';

@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './smsConfirmation.component.html',
  styleUrls: ['./smsConfirmation.component.scss']
})


export class SmsConfirmationComponent implements OnInit {

  EMPTY_STRING = AppUtils.EMPTY_STRING;

  codeFC: FormControl;

  constructor(
    public dialogRef: MatDialogRef<SmsConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.codeFC = new FormControl(this.EMPTY_STRING, [
      Validators.required,
      Validators.pattern(AppUtils.onlyNumbersPattern)]);
  }

  close(): void {
    this.data = false;
    this.dialogRef.close(this.data);
  }

  ok(): void {
    this.data = true;
    this.dialogRef.close(this.data);
  }
}

