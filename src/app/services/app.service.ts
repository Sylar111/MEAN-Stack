import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/add/operator/map';






@Injectable()
export class AppService {




  constructor(private http: HttpClient) {}


// Get Account Balance Service
  getBalances(etherwallet: string): any {
    const urlPrefix = 'https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=';
    const urlSuffix = '&tag=latest&apikey=YourApiKeyToken';
    return this.http.get(urlPrefix + etherwallet + urlSuffix);


  }
}



