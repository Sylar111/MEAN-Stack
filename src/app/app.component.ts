import {Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
 import {GettransactionService} from './services/gettransaction.service';
import {GetbalanceService} from './services/getbalance.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent  {


  objectKeys = Object.keys;
  cryptos: any;
  number: 1;
  num = this.number + 1;

  public chart = [];
  public resultinfo: any;
  public traninfo: any;
  public intrans: any;
  public show: boolean = false;
  // public show1: boolean = false;
  public buttonName: any;
  // public buttonName1: any;
  public etherwallet: string;

  title = 'app';
  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private getbalanceService: GetbalanceService,
               private gettransactionService: GettransactionService,
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }


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



  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'BACK';
    } else {
      this.buttonName = 'GO';
    }
  }

  // toggle1() {
   //  this.show1 = !this.show1;
   //  if (this.show1) {
    //    this.buttonName1 = '';
  //   } else {
    //  this.buttonName1 = '';
  //  }



}


