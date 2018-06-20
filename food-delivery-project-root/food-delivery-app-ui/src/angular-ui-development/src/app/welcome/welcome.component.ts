import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import * as constants from '../globals/constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 restaurant:any={};
 appResponse:any;
  constructor(private router : Router,private http: HttpClient) { }

  ngOnInit() {

    this.http.get(constants.REST_URL+'/restaurants').subscribe(response => {
      console.log(response);
      this.appResponse=response;
      this.restaurant=this.appResponse.data[0];
      console.log(this.restaurant);
      localStorage.setItem("restaurant",this.restaurant.restaurantId);
    },
    err => {
      console.log("Error occured.")
    });
  
  }
  login() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "userType": "customer","restaurantId":this.restaurant.restaurantId
      }
  };
    this.router.navigate(['login'],navigationExtras);  }
    restaurantLogin() {
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "userType": "staff","restaurantId":this.restaurant.restaurantId
        }
    };
      this.router.navigate(['login'],navigationExtras);

      }
  
}
