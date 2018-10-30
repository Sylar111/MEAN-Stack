import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InternaltransService {





  constructor(private http: HttpClient) {}



  getInTrans(etherwallet: string): any {
    const urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=';
    const urlSuffix = '&startblock=0&endblock=2702578&sort=asc&apikey=YourApiKeyToken';
    return this.http.get(urlPrefix + etherwallet + urlSuffix);


  }
}
