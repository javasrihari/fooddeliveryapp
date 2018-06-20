import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgmCoreModule } from '@agm/core';
import { OrdertrackComponent } from './ordertrack/ordertrack.component';
import { OrderstatusupdateComponent } from './orderstatusupdate/orderstatusupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    AdminHomeComponent,
    WelcomeComponent,
    OrdertrackComponent,
    OrderstatusupdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,AgmCoreModule.forRoot({
      apiKey: "AIzaSyBwVQwXXevHiT1wLXReukBV1IPaEfdxRWc",
      libraries: ["places"]
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
