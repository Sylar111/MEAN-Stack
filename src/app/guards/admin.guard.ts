import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService} from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor (private adminService: AdminService, private router: Router) {

  }
  canActivate() {
    if (this.adminService.logged()) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
