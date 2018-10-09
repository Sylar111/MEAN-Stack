import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';


@Injectable()
export class PermissionGuard implements CanActivate {
  constructor (private authService: AuthService,
               private router: Router,
               private validateService: ValidateService) {

  }
  canActivate() {

    if (this.authService.checkPermission()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
