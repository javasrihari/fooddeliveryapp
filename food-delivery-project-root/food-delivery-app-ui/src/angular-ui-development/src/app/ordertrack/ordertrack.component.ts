import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,NavigationExtras} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import * as constants from '../globals/constants';
import { } from 'googlemaps';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-ordertrack',
  templateUrl: './ordertrack.component.html',
  styleUrls: ['./ordertrack.component.css']
})
export class OrdertrackComponent implements OnInit {

  public geolocation:string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  
  restaurantId:any;
  userid:any;
  restaurant:any={};
  restUrl:string;
  orderId:string;
  orderData:any={order:{id:"",deliveryAddress:{geolocation:""}, currentAddressLocation:{}}};

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private router : Router,private route : ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.restUrl=constants.REST_URL;
    this.userid=localStorage.getItem("userid");
    this.restaurantId=localStorage.getItem("restaurant");
    var  appResponse:any;
    
    this.route.queryParams.subscribe(params => {
      this.orderId = params["orderId"];

      this.http.get(constants.REST_URL+'/order/'+this.orderId).subscribe(response => {
        appResponse=response;
        this.orderData=appResponse.data;
        this.zoom = 16;
        this.geolocation=this.orderData.order.currentAddressLocation.geolocation;
         this.latitude=parseFloat(this.orderData.order.currentAddressLocation.latitude);
         this.longitude=parseFloat(this.orderData.order.currentAddressLocation.longitude);

        console.log(this.orderData.order.currentAddressLocation);
  
      },
      err => {
        console.log("Error occured.")
      });
      
      });

 
  }

  prepareLocationSearch() {
    //set google maps defaults
    this.zoom = 4;
   this.latitude = 17.366019;
    this.longitude = 78.39225650000003;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position);
      });
    }
  }
  gotoHome()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "orderId": this.orderId
      }
     };
    this.router.navigate(['userhome'],navigationExtras);
  }
  
  trackOrder() {
    this.ngOnInit() ;
  
  }

}

