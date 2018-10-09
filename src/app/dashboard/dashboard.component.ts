import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import * as Chart from 'chart.js';
import {AppService} from '../services/app.service';
import {TransactionService} from '../services/transaction.service';
import {InternaltransService} from '../services/internaltrans.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  number: 1;
  num = this.number + 1;

  public chart = [];
  public resultinfo: any;
  public traninfo: any;
  public intrans: any;
  public show: boolean = false;
  public buttonName: any;
  public etherwallet: string;


  constructor(private data: DataService,
              private appService: AppService,
              private transactionService: TransactionService,
              private internaltransService: InternaltransService
  ) {}

  ngOnInit(): void {
    this.data.getPrice()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }
  sendValues(): void {

    this.appService.getBalances(this.etherwallet)
      .subscribe(temp => {
        this.resultinfo = temp.result;
        console.log(temp.result);
        console.log(this.etherwallet);
      });

    this.transactionService.getTrans(this.etherwallet)
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
      this.buttonName = 'YOURS ADDRESS WALLET INFO';
    } else {
      this.buttonName = 'INPUT YOUR ADDRESS WALLET';
    }
  }
}
