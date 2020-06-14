import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileData} from '../../interfaces/FileData';
import {FileTypeEnum} from '../../enum/fileTypesEnum';
import {Observable} from 'rxjs';
import {PROPOSAL_PATH} from '../../interfaces/Utils';
import {Data} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProposalServiceService {

  constructor(private http: HttpClient) {
  }

  save(fileData: FileData): Observable<FileData> {
    if (fileData.fileType === FileTypeEnum.WNIOSEK) {
      const formData = new FormData();
      formData.append('data', new Blob([JSON.stringify(fileData)] ));
      return this.http.post<Data>(PROPOSAL_PATH, formData);
    }
    // TODO implement another cases
  }


}
