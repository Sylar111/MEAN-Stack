import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
// import {Router} from '@angular/router';
// import {AppService} from '../services/app.service';
// import {TransactionService} from '../services/transaction.service';
import {InternaltransService} from '../services/internaltrans.service';
// import {AuthService} from '../services/auth.service';
import {GetbalanceService} from '../services/getbalance.service';
import {GettransactionService} from '../services/gettransaction.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent {

  user: Object;
  objectKeys = Object.keys;
  cryptos: any;
  number: 1;
  num = this.number + 1;

  public chart = [];
  public resultinfo: any;
  public traninfo: any;
  public intrans: any;
  public show: boolean = false;
  public show1: boolean = false;
  public buttonName: any;
  public buttonName1: any;
  public etherwallet: string;




  constructor(
              private getbalanceService: GetbalanceService,
              private gettransactionService: GettransactionService,
              private internaltransService: InternaltransService,

  ) {}


  sendValues(): void {

    this.getbalanceService.getBalances(this.etherwallet)
      .subscribe(temp => {
        this.resultinfo = temp.result;
        console.log(temp.result);
        console.log(this.etherwallet);
      });

    this.gettransactionService.getTrans(this.etherwallet)
      .subscribe(temp => {
        this.traninfo = temp.result;
        console.log(temp.result);
      });

    this.internaltransService.getInTrans(this.etherwallet)
      .subscribe(temp => {
        this.intrans = temp.result;
        console.log(temp.result);
      });


  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'YOURS ETHER WALLET INFO';
    } else {
      this.buttonName = '';
    }
  }

  toggle1() {
    this.show1 = !this.show1;
    if (this.show1) {
      this.buttonName1 = 'YOURS TRANSACTION INFO';
    } else {
      this.buttonName1 = '';
    }
  }
}
