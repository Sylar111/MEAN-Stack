import { Component, Input, OnInit } from '@angular/core';
import { CharityService} from '../../services/charity.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-charity',
  templateUrl: './new-charity.component.html',
  styleUrls: ['./new-charity.component.css']
})
export class NewCharityComponent implements OnInit {
  newPost = false;
  message;
  messageClass;
  loadingCharity = false;
  form: FormGroup;
  processing = false;
  username;
  charityPosts;
  permission;




  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private charityService: CharityService
              ) {
    this.createNewCharityForm();
  }

  createNewCharityForm() {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])],
      bitCoin: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
      ])],
      ether: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
      ])]
    });
  }
  // Enable new charity form
  enableFormNewCharityForm() {
    this.form.get('title').enable(); // Enable title field
    this.form.get('body').enable(); // Enable body field
    this.form.get('bitCoin').enable();
    this.form.get('ether').enable();
  }

  // Disable new Charity form
  disableFormNewCharityForm() {
    this.form.get('title').disable(); // Disable title field
    this.form.get('body').disable(); // Disable body field
    this.form.get('bitCoin').disable();
    this.form.get('ether').disable();
  }

  // Validation for title
  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphaNumericValidation': true }; // Return error in validation
    }
  }
  // Function to display new Charity form
  newCharityForm() {
    this.newPost = true; // Show new Charity form
  }
  onCharitySubmit() {
    this.processing = true; // Disable submit button
    this.disableFormNewCharityForm(); // Lock form
    // Create Charity object from form fields
    const charity = {
      title: this.form.get('title').value, // Title field
      body: this.form.get('body').value, // Body field
      bitCoin: this.form.get('bitCoin').value,
      ether: this.form.get('ether').value,
      createdBy: this.username // CreatedBy field
    }
    // Function to save charity into database
    this.charityService.newCharity(charity).subscribe(data => {
      // Check if charity was saved to database or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewCharityForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewCharityForm(); // Enable the form fields
        }, 2000);
      }
    });
  }
  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new Charity posts and comments
      this.permission = profile.user.permission;
    });
  }

}

