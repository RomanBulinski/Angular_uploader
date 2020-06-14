
import {FileFormatsEnum} from '../enum/fileFormatsEnum';
import {FileTypeEnum} from '../enum/fileTypesEnum';

export interface FileData {
  dialogTitle?: string;
  name?: string;
  fileType?: FileTypeEnum;
  fileFormats?: FileFormatsEnum[];
  fileOriginalLocalisation?: string;
  date?: Date;
  loadedFile?: File;

}
