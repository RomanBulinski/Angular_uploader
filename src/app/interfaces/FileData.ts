
import {FileFormatsEnum} from '../enum/fileFormatsEnum';
import {FileTypeEnum} from '../enum/fileTypesEnum';

export interface FileData {

  name?: string;
  fileType?: FileTypeEnum;
  loadedFile?: File;
  message?: string;

}
