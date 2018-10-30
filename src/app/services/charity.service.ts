import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CharityService {
  options;

  constructor(private authService: AuthService,
              private http: Http
  ) { }
  createAuthenticationHeaders() {
    this.authService.loadToken();
// Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  newCharity(charity) {
    this.createAuthenticationHeaders();
    return this.http.post('Charitys/newCharity', charity, this.options)
      .map(res => res.json());
  }

  getAllCharity() {
    this.createAuthenticationHeaders();
    return this.http.get('Charitys/allCharity', this.options)
      .map(res => res.json());
  }

  getSingleCharity(id) {
 //   this.createAuthenticationHeaders();
//    return this.http.get('http://localhost:3000/Charitys/singleCharity/' + id , this.options)
 //     .map(res => res.json());
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('Charitys/singleCharity/' + id ,{headers: headers})
      .map(res => res.json());
  }

  editCharity(charity) {
    this.createAuthenticationHeaders();
    return this.http.put('Charitys/updateCharity', charity, this.options)
     .map(res => res.json());
  }

  deleteCharity(id) {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.delete('Charitys/deleteCharity/' + id ,{headers: headers})
      .map(res => res.json());
  }

  likeCharity(id) {
    const data = { id: id };
    this.createAuthenticationHeaders();
    return this.http.put('Charitys/likeCharity/', data, this.options)
      .map(res => res.json());
  }

  dislikeCharity(id) {
    const charityData = { id: id };
    return this.http.put('Charitys/dislikeCharity/', charityData, this.options)
      .map(res => res.json());
  }

  postComment(id, comment) {
    this.createAuthenticationHeaders(); // Create headers
    // Create blogData to pass to backend
    const blogData = {
      id: id,
      comment: comment
    };
    return this.http.post('Charitys/comment', blogData, this.options).map(res => res.json());

  }

}
