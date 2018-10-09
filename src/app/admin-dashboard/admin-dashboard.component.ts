import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userPosts;
  user;
  message;
  messageClass;
  form: FormGroup;
  permission;
  newPost = false;
  currentUrl;
  constructor(private authService: AuthService,
              private fb: FormBuilder) { this.createNewCharityForm(); }

  getAllUser() {
    this.authService.getAllUser().subscribe(data => {
      this.userPosts = data.user;
    });
  }
  createNewCharityForm() {
    this.form = this.fb.group({
      permission: [''],
    });
  }
  updatePemission() {
    this.authService.editPermission(this.permission).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
      }
    });
  }
  newCharityForm() {
    this.newPost = true; // Show new Charity form
  }
  ngOnInit() {

    this.getAllUser();
  }
}
