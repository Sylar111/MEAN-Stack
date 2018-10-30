import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharityComponent } from './charity/charity.component';
import { AppRoutingModule } from './/app-routing.module';
import { DonationComponent } from './donation/donation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { CharityService } from './services/charity.service';
import { AdminComponent } from './admin/admin.component';
import { AdminService} from './services/admin.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { DataService } from './services/data.service';
import { EditCharityComponent } from './charity/edit-charity/edit-charity.component';
import { PermissionGuard } from './guards/permission.guard';
import { DeleteCharityComponent } from './charity/delete-charity/delete-charity.component';
import { NewCharityComponent } from './charity/new-charity/new-charity.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import {AppService} from './services/app.service';
import {TransactionService} from './services/transaction.service';
import { ContactComponent } from './contact/contact.component';
import {MessageService} from './services/message.service';
import { EthcontractService} from './services/ethcontract.service';
import { InternaltransService} from './services/internaltrans.service';
import { CharitydashboardComponent } from './charitydashboard/charitydashboard.component';
import { NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor } from 'ng-loading-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserguideComponent } from './userguide/userguide.component';
import { MarkdownModule} from 'ngx-markdown';
import { LMarkdownEditorModule} from 'ngx-markdown-editor';
import { SearchingComponent } from './searching/searching.component';
import {GetbalanceService} from './services/getbalance.service';
import {GettransactionService} from './services/gettransaction.service';
import { FileUploadModule} from 'ng2-file-upload';
import { EditPermissionComponent } from './admin-dashboard/edit-permission/edit-permission.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharityComponent,
    DonationComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    AdminDashboardComponent,
    EditCharityComponent,
    DeleteCharityComponent,
    NewCharityComponent,
    PublicProfileComponent,
    ContactComponent,
    CharitydashboardComponent,
    UserguideComponent,
    SearchingComponent,
    EditPermissionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    NgLoadingSpinnerModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    LMarkdownEditorModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true },
    InternaltransService, EthcontractService, MessageService,
    ValidateService, AppService, TransactionService, AuthService,
    AdminService, AuthGuard, AdminGuard, PermissionGuard, CharityService, DataService,
    GetbalanceService, GettransactionService],

  bootstrap: [AppComponent, CharityComponent]
})
export class AppModule { }
