import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import * as Chart from 'chart.js';
import {AppService} from '../services/app.service';
import {TransactionService} from '../services/transaction.service';
import {InternaltransService} from '../services/internaltrans.service';

@Component({
  selector: 'app-charitydashboard',
  templateUrl: './charitydashboard.component.html',
  styleUrls: ['./charitydashboard.component.css']
})
export class CharitydashboardComponent implements OnInit {
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
  public etherwallet: string = '0xb03ed6bb2d055a3290f974ea14268720e7d12bd1';


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
}
