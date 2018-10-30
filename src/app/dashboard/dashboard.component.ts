import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import * as Chart from 'chart.js';
import {AppService} from '../services/app.service';
import {TransactionService} from '../services/transaction.service';
import {InternaltransService} from '../services/internaltrans.service';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  //public user.name: string;



  constructor(private data: DataService,
              private appService: AppService,
              private transactionService: TransactionService,
              private internaltransService: InternaltransService,
              private authService: AuthService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.data.getPrice()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });


    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });

  }
    sendValues(): void {

    this.appService.getBalances(this.user['name'])
      .subscribe(temp => {
        this.resultinfo = temp.result;
        console.log(temp.result);
        console.log(this.etherwallet);
      });

    this.transactionService.getTrans(this.user['name'])
      .subscribe(temp => {
        this.traninfo = temp.result;
        console.log(temp.result);
      });

    this.internaltransService.getInTrans(this.user['name'])
      .subscribe(temp => {
        this.intrans = temp.result;
        console.log(temp.result);
      });


  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'TRANSACTIONS';
    } else {
      this.buttonName = '';
    }
  }

  toggle1() {
    this.show1 = !this.show1;
    if (this.show1) {
      this.buttonName1 = 'TRANSACTIONS';
    } else {
      this.buttonName1 = '';
    }
  }
}
