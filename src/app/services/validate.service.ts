import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if( user.email === undefined || user.username === undefined || user.password === undefined){
      return false;
    } else {
      return true;
    }
  }

  validateLogin(user){
    if( user.username === undefined || user.password === undefined){
      return false;
    } else {
      return true;
    }
  }
  validatePermission(user){
    if ( user.permission === 'charity') {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
