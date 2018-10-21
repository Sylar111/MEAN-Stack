import { Component } from '@angular/core';
import { EthcontractService} from '../services/ethcontract.service';

@Component({
  selector: 'app-root',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  title = 'your donation';
  accounts: any;
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;

  constructor( private ethcontractService: EthcontractService ){
    this.initAndDisplayAccount();
  }
  // Get Account Info
  initAndDisplayAccount = () => {
    const that = this;
    this.ethcontractService.getAccountInfo().then(function(acctInfo: any) {
      console.log(acctInfo);
      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;
    }).catch(function(error) {
      console.log(error);
    });

  }
  // Transfer Action
  transferEther(event){
    const that = this;
    console.log(this.transferTo);
    this.ethcontractService.transferEther(
      this.transferFrom,
      this.transferTo,
      this.amount
    ).then(function() {
      that.initAndDisplayAccount();
    }).catch(function(error) {
      console.log(error);
      that.initAndDisplayAccount();
    });
  }
}



