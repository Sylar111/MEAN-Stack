import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  result: any;
  private AppUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,BCH,ETC,CET,TRX,LTC,ZEC,XRP&tsyms=USD,AUD'
  constructor(private http: HttpClient) {
  }

  getPrice() {
    return this.http.get(this.AppUrl);
  }
}
