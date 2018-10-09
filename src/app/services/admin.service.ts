import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AdminService {
  authToken: any;
  admin: any;

  constructor(private http: Http) { }

  authenticateAdmin(admin){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/admins/authenticate', admin,{headers: headers})
      .map(res => res.json());
  }

  storeAdminData(token, admin) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logged(){
    return this.admin;
  }
  loggedIn(){
    return tokenNotExpired('id_token');
  }
}
