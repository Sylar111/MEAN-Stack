import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharityService } from '../../services/charity.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-delete-charity',
  templateUrl: './delete-charity.component.html',
  styleUrls: ['./delete-charity.component.css']
})
export class DeleteCharityComponent implements OnInit {
  message;
  messageClass;
  foundCharity = false;
  processing = false;
  charity;
  currentUrl;
  username;
  permission;

  constructor(private charityService: CharityService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

   deleteCharity() {
     this.processing = true;
     this.charityService.deleteCharity(this.currentUrl.id).subscribe(data => {
       if (!data.success) {
         this.messageClass = 'alert alert-danger';
         this.message = data.message;
       } else {
         this.messageClass = 'alert alert-success';
         this.message = data.message;
         setTimeout(() => {
           this.router.navigate(['/charity']);
         }, 2000);
       }
     });
   }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.charityService.getSingleCharity(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Charity not found ! ';
      } else {
        this.charity = {
          title: data.charity.title,
          body: data.charity.body,
          bitCoin: data.charity.bitCoin,
          ether: data.charity.ether,
          createdBy: data.charity.createdBy,
          createdAt: data.charity.createdAt
        }
        this.foundCharity = true;
      }
    });
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new Charity posts and comments
      this.permission = profile.user.permission;
    });
  }

}
