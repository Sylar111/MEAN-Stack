import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {





  constructor(private http: HttpClient) {}


  // Get Transaction Service
  getTrans(etherwallet: string): any {
    const urlPrefix = 'http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=';
    const urlSuffix = '&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken';
    return this.http.get(urlPrefix + etherwallet + urlSuffix);


  }
}
