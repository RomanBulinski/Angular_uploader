import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProposalServiceService {

  constructor(private http: HttpClient) {
  }

  // getBanks(bankFilterDTO: BankFilterDTO, pageSize: number, pageIndex: number, sortActive: string, sortDirection: string): Observable<BankResponse> {
  //   let response: BankResponse = MOCK_BANK_RESPONSE;
  //   return of(response);        //TODO delete this mock when backend service will be ready
  //
  //   return this.http.post<BankResponse>(BANK_PATH, bankFilterDTO, {       //TODO target rest
  //     params: {
  //       pageSize: pageSize.toString(),
  //       pageIndex: pageIndex.toString(),
  //       sortActive: sortActive,
  //       sortDirection: sortDirection
  //     }
  //   });
  // }


}
