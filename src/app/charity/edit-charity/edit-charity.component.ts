import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CharityService } from '../../services/charity.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-charity',
  templateUrl: './edit-charity.component.html',
  styleUrls: ['./edit-charity.component.css']
})
export class EditCharityComponent implements OnInit {
  message;
  messageClass;
  processing = false;
  currentUrl;
  charity;
  loading = true;
  username;
  permission;

  constructor(private location: Location,
              private activatedRoute: ActivatedRoute,
              private charityService: CharityService,
              private authService: AuthService,
              private router: Router) { }

  // Function to Submit Update
  updateCharitySubmit() {
    this.processing = true;
    this.charityService.editCharity(this.charity).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set error bootstrap class
        this.message = data.message; // Set error message
        this.processing = false; // Unlock form fields
      } else {
        this.messageClass = 'alert alert-success'; // Set success bootstrap class
        this.message = data.message; // Set success message
        // After two seconds, navigate back to charityList page
        setTimeout(() => {
          this.router.navigate(['/charity']); // Navigate back to route page
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current charity with id in params
    this.charityService.getSingleCharity(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Charity not found ! ';
      } else {
        this.charity = data.charity; // Save charity object for use in HTML
        this.loading = false;
      }
    });
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new Charity posts and comments
      this.permission = profile.user.permission;
    });
  }
}
