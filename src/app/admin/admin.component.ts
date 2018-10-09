import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService} from '../services/admin.service';

import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username: String;
  password: String;

  constructor(private adminService: AdminService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onlogin(){
    const admin = {
      username: this.username,
      password: this.password
    }
    this.adminService.authenticateAdmin(admin).subscribe(data => {
      if (data.success) {
        this.adminService.storeAdminData(data.token, data.admin);
        this.flashMessage.show('Admin Dashboard', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['']);
      }
    });
  }
}
