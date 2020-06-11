import {UploaderDocumentTypes} from '../enums/UploaderDocumentTypes';

export interface DialogData {
  animal: string;
  name?: string;
  fileType?: UploaderDocumentTypes;
  fileOriginalLocalisation?: string;
  date?: string;
  loadedFile?: Blob;
  fileFormat?: string;
}
