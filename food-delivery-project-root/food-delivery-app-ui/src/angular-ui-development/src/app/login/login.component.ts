import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,NavigationExtras} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import * as constants from '../globals/constants';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType:string;
userid: string;
password: string;
appResponse:any;
restaurantId:any;
restUrl:string;
constructor(private router : Router,private route : ActivatedRoute,private http: HttpClient) { }
ngOnInit() {
  this.restUrl=constants.REST_URL;
  this.route.queryParams.subscribe(params => {
    this.userType = params["userType"];
    this.restaurantId=params["restaurantId"];
    console.log("params",params);
});


}
login() {
var options={
    withCredentials:true
}
  this.http.post(constants.REST_URL+'/user/login', {
      userid:this.userid,
      password: this.password,
      userType:this.userType
    })
      .subscribe(
        response => {
          console.log(response);
          this.appResponse=response;
          if(this.appResponse.status==1)
          {
            localStorage.setItem("userid",this.userid);

            let navigationExtras: NavigationExtras = {
              queryParams: {
                "restaurantId":this.restaurantId
              }
          };
            if(this.userType=='staff')
           {
            this.router.navigate(['adminhome'],navigationExtras);
           }else{
            this.router.navigate(['userhome'],navigationExtras);
           }
          }else{
            alert("Invalid credentials.")
          }
        },
        err => {
          console.log("Error occured");
        }
      );


}
}