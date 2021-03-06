import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileFormatsEnum} from '../../enum/fileFormatsEnum';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProposalServiceService} from '../../dialogs/services/proposal-service.service';
import {FileData} from '../../interfaces/FileData';

@Component({
  selector: 'app-saver',
  templateUrl: './saver.component.html',
  styleUrls: ['./saver.component.scss']
})
export class SaverComponent implements OnInit, OnChanges {

  EMPTY_STRING = '';

  nameFC: FormControl;
  foundedDocumentNameFC: FormControl;
  coreFG: FormGroup;

  message: string;
  readonly: boolean;
  isButtonFindFileDisabled: boolean;
  fileToUpload: File;

  @Input() acceptetFormats: FileFormatsEnum[];
  @Input() isClearForm: boolean;
  @Output() titleChanged = new EventEmitter<FileData>();

  constructor(
    private formBuilder: FormBuilder,
    //TODO implemen proposalService;
    private proposalService: ProposalServiceService,
    @Inject(MAT_DIALOG_DATA) public fileData: FileData
  ) {}

  ngOnInit() {
    this.setFormControls();
    this.setVariabels();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("zmianaaaaa : "+changes.isClearForm.currentValue);
    this.clearCoreUploader();
  }

  setFormControls(): void {
    this.nameFC = new FormControl(this.EMPTY_STRING, [Validators.required,]);
    this.foundedDocumentNameFC = new FormControl(this.EMPTY_STRING);
    this.coreFG = this.formBuilder.group({
      nameFC: this.nameFC,
      foundedDocumentNameFC: this.foundedDocumentNameFC,
    });
  }

  setVariabels(): void {
    this.readonly = true;
    this.isButtonFindFileDisabled = false;
  }

  findAndCheckFile(event): void {
    this.handleFileInput(event);
    if (this.checkFormatFile(this.fileToUpload)) {
      this.infillNameFC();
      this.prepareFileData();
      this.emitData();
      this.showInscription('');
    } else {
      this.showInscription('Zły fomrat pliku');
    }
  }

  infillNameFC(): void{
   this.foundedDocumentNameFC = new FormControl(this.fileToUpload.name);
  }

  clearCoreUploader(): void {
    this.showInscription('');
    this.setFormControls();
  }

  handleFileInput(event): void {
    const fileList: FileList = event.target.files;
    this.fileToUpload = fileList.item(0);
  }

  checkFormatFile(fileToUpload: File): boolean {
    for (const index in this.acceptetFormats) {
      if (this.mapFormats(fileToUpload.type) === this.acceptetFormats[index]) {
        return true;
      }
    }
    return false;
  }

  private mapFormats(formatFromUploadedFile: string): FileFormatsEnum {
    if (formatFromUploadedFile === 'image/jpeg') {
      return FileFormatsEnum.JPG;
    }
    if (formatFromUploadedFile === 'application/pdf') {
      return FileFormatsEnum.PDF;
    }
  }

  prepareFileData(): void {
    this.fileData.name = this.nameFC.value;
    this.fileData.loadedFile = this.fileToUpload;
    this.fileData.message = 'Dokument jest gotowy do zapisu';
  }

  emitData(): void {
    this.titleChanged.emit(this.fileData);
  }

  showInscription(inscription: string): void {
    this.message = inscription;
  }

}
