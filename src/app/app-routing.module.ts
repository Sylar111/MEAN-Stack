import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { CharityComponent } from './charity/charity.component';  // Add this
import { EditCharityComponent } from './charity/edit-charity/edit-charity.component';
import { DeleteCharityComponent } from './charity/delete-charity/delete-charity.component';
import { NewCharityComponent } from './charity/new-charity/new-charity.component';
import { DonationComponent } from './donation/donation.component';  // Add this
import { LoginComponent } from './login/login.component';  // Add this
import { RegisterComponent } from './register/register.component';  // Add this
import { DashboardComponent } from './dashboard/dashboard.component';  // Add this
import { ProfileComponent} from './profile/profile.component';
import { PublicProfileComponent} from './public-profile/public-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent} from './admin/admin.component';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { PermissionGuard } from './guards/permission.guard';
import { ContactComponent} from './contact/contact.component';
import {CharitydashboardComponent} from './charitydashboard/charitydashboard.component';
import {UserguideComponent} from './userguide/userguide.component';
import {SearchingComponent} from './searching/searching.component';
import {EditPermissionComponent} from './admin-dashboard/edit-permission/edit-permission.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    //canActivate: [AdminGuard]
  },
  {
    path: 'charity',
    component: CharityComponent
  },
  {
    path: 'edit-charity/:id',
    component: EditCharityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete-charity/:id',
    component: DeleteCharityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donation',
    component: DonationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'charitydashboard',
    component: CharitydashboardComponent
  },
  {
    path: 'userguide',
    component: UserguideComponent
  },
  {
    path: 'searching',
    component: SearchingComponent
  },
  {
    path: 'edit-permission/',
    component: EditPermissionComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
