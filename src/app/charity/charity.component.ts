import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements OnInit {
  messageClass;
  message;
  newPost = false;
  loadingCharity = false;
  form: FormGroup;
  commentForm: FormGroup;
  processing = false;
  username;
  charityPosts;
  permission;
  newComment = [];
  enabledComments = [];


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private charityService: CharityService) {
    this.createNewCharityForm(); // Create nepw charity form on start up
    this.createCommentForm();
  }
  // Function to create new charity form
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

  // Create form for posting comments
  createCommentForm() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ])]
    });
  }

  // Enable the comment form
  enableCommentForm() {
    this.commentForm.get('comment').enable(); // Enable comment field
  }

  // Disable the comment form
  disableCommentForm() {
    this.commentForm.get('comment').disable(); // Disable comment field
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
      return { 'alphaNumericValidation': true } // Return error in validation
    }
  }
  // Function to display new Charity form
  newCharityForm() {
    this.newPost = true; // Show new Charity form
  }
  // Reload Charity on current page
  reloadCharity() {
    this.loadingCharity = true; // Used to lock button
    this.getAllCharity(); // Add any new charity to the page
    // Get All Charity
    setTimeout(() => {
      this.loadingCharity = false; // Release button lock after four seconds
    }, 4000);
  }
  // Function to post a new comment on Charity post
  draftComment(id) {
    this.commentForm.reset();
    this.newComment = [];
    this.newComment.push(id);
  }

  // Function to cancel new post transaction
  cancelSubmission(id) {
    const index = this.newComment.indexOf(id); // Check the index of the charity post in the array
    this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
    this.commentForm.reset(); // Reset  the form after cancellation
    this.enableCommentForm(); // Enable the form after cancellation
    this.processing = false; // Enable any buttons that were locked
  }

  // Function to submit a new Charity post
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
        this.getAllCharity();
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

  getAllCharity() {
    this.charityService.getAllCharity().subscribe(data => {
      this.charityPosts = data.charity;
    });
  }

  // Function to like a charity post
  likeCharity(id) {
    this.charityService.likeCharity(id).subscribe(data => {
      this.getAllCharity();
    });
  }

// Function to disliked a charity post
  dislikeCharity(id) {
    // Service to dislike a Charity post
    this.charityService.dislikeCharity(id).subscribe(data => {
      this.getAllCharity(); // Refresh charity after dislike
    });
  }

  // Function to post a new comment
  postComment(id) {
    this.disableCommentForm(); // Disable form while saving comment to database
    this.processing = true; // Lock buttons while saving comment to database
    const comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
    this.charityService.postComment(id, comment).subscribe(data => {
      this.getAllCharity(); // Refresh all charity to reflect the new comment
      const index = this.newComment.indexOf(id); // Get the index of the charity id to remove from array
      this.newComment.splice(index, 1); // Remove id from the array
      this.enableCommentForm(); // Re-enable the form
      this.commentForm.reset(); // Reset the comment form
      this.processing = false; // Unlock buttons on comment form
      if (this.enabledComments.indexOf(id) < 0) {
        this.expand(id); // Expand comments for user on comment submission
      }
    });
  }

  // Expand the list of comments
  expand(id) {
    this.enabledComments.push(id); // Add the current charity post id to array
  }

  // Collapse the list of comments
  collapse(id) {
    const index = this.enabledComments.indexOf(id); // Get position of id in array
    this.enabledComments.splice(index, 1); // Remove id from array
  }

  ngOnInit() {
    // Get profile username on page load
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new Charity posts and comments
      this.permission = profile.user.permission;
    });

    this.getAllCharity();
  }
}
