
import {FileFormatsEnum} from '../enum/fileFormatsEnum';
import {FileTypeEnum} from '../enum/fileTypesEnum';

export interface FileData {
  dialogTitle?: string;
  name?: string;
  fileType?: FileTypeEnum;
  fileFormats?: FileFormatsEnum[];
  fileFormatsInString?: string;
  fileOriginalLocalisation?: string;
  urlUploader: string;
  date?: Date;
  loadedFile?: File;

}
