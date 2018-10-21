import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import * as Chart from 'chart.js';
import {AppService} from '../services/app.service';
import {TransactionService} from '../services/transaction.service';
import {InternaltransService} from '../services/internaltrans.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-charitydashboard',
  templateUrl: './charitydashboard.component.html',
  styleUrls: ['./charitydashboard.component.css']
})
export class CharitydashboardComponent implements OnInit {
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
  public buttonName: any;
  public etherwallet: string;
  public maxvalue: number;
  public user.name: string;


  constructor(private data: DataService,
              private appService: AppService,
              private transactionService: TransactionService,
              private internaltransService: InternaltransService,
              private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get price crypto table
    this.data.getPrice()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
    // Get User Address
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }
  // Get Account Balance and Line Chart
  sendmaxvalue(): void {
    this.appService.getBalances(this.user.name)
      .subscribe(temp => {
        const max1 = temp.result[0].balance * 0.000000000000000001;
        this.resultinfo = temp.result;
        console.log(temp.result);
        console.log(this.etherwallet);
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: ['Min', max1, 'Max'],
              datasets: [
                { label: 'charity wallet',
                  data: [0, max1, this.maxvalue],
                  borderColor: 'red'
                }
              ]
            },
            options: {
              responsive: true,
              scales: {
                yAxes: [{
                  display: true,
                  ticks: {
                    min: 0,
                    max : this.data[3],
                  }
                }]
              }
            }
          }
        );


      });
      // Get Transaction
    this.transactionService.getTrans(this.user.name)
      .subscribe(temp => {
        this.traninfo = temp.result;
        console.log(temp.result);
      });
      // Get internal transaction
    this.internaltransService.getInTrans(this.user.name)
      .subscribe(temp => {
        this.intrans = temp.result;
        console.log(temp.result);
      });


  }
}
