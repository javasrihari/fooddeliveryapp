import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrdertrackComponent } from './ordertrack/ordertrack.component';
import { OrderstatusupdateComponent } from './orderstatusupdate/orderstatusupdate.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
    { path: 'track', component: OrdertrackComponent },
    { path: 'status', component: OrderstatusupdateComponent },
    { path: 'adminhome', component: AdminHomeComponent },

{ path: 'userhome', component: UserHomeComponent },
{ path: 'login', component: LoginComponent },
{path : '', component : WelcomeComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }