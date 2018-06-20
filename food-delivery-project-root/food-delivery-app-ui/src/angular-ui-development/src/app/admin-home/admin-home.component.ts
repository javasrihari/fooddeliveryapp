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
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public geolocation:string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  restaurantId:any;
  userid:any;
  restaurant:any={};
  restUrl:string;
  orderItems:Array<any>=[];
  orderSuccess:boolean=false;
  orderSuccessMsg:string="";
  orderSuccessId:string;
  orders:Array<any>=[];
  showMap:boolean=false;
  statusStep=0;
  orderId:string;
  orderData:any={order:{id:"",deliveryAddress:{geolocation:""}}};

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private router : Router,private route : ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.restUrl=constants.REST_URL;
    this.userid=localStorage.getItem("userid");
    this.restaurantId=localStorage.getItem("restaurant");
    var  appResponse:any;
    this.route.queryParams.subscribe(params => {
      this.http.get(constants.REST_URL+'/menu/restaurant/'+this.restaurantId).subscribe(response => {
        appResponse=response;
        this.restaurant=appResponse.data;
        console.log(appResponse);
  
      },
      err => {
        console.log("Error occured.")
      });

       this.loadOrders();
       this.prepareLocationSearch() ;

      
      });

 
  }

  prepareLocationSearch() {
    //set google maps defaults
    this.zoom = 12;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log("address place",this.searchElementRef.nativeElement.value );
          this.geolocation=this.searchElementRef.nativeElement.value;
          this.saveOrderLocation();
        });
      });
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

loadOrders()
{
  var  appResponse:any;
  var options={
    withCredentials:true
}
  this.http.get(constants.REST_URL+'/order/list/'+this.userid,options).subscribe(response => {
    appResponse=response;
    this.orders=appResponse.data;
    console.log("orders ",appResponse);

  },
  err => {
    console.log("Error occured.")
  });
}

  addItem(menuitem)
  {
    this.orderSuccess=false;
    console.log(menuitem);
    var orderitem:any={};
    orderitem.quantity=1;
    orderitem.menuitem=menuitem;
    orderitem.menuitemCode=menuitem.menuitemCode;
    this.orderItems.push(orderitem);
  }

  chnageOrderStatus(orderIdIn,status,taskIdIn)
  {

    var  appResponse:any;

    var options={
      withCredentials:true
  }
  var body:any={
    userid:this.userid,
    orderId:orderIdIn,
    orderStatus:status,
    taskId:taskIdIn
    
  };
    this.http.put(constants.REST_URL+'/order',body,options)
        .subscribe(
          response => {
            console.log(response);
            appResponse=response;
            if(appResponse.status==1)
            {
              this.loadOrders();
              this.showOrder(orderIdIn);
            }
          },
          err => {
            console.log("Error occured");
          }
        );
  }

  saveOrderLocation()
  {

    var  appResponse:any;

    var options={
      withCredentials:true
  }
  var body:any={
    userid:this.userid,
    orderId:this.orderData.order.id,
    currentAddressLocation:{
      "geolocation": this.geolocation ,
      "latitude": this.latitude, 
      "longitude": this.longitude
  
    },
    restaurantId:this.restaurantId,
    taskId:this.orderData.taskId
    
  };
    this.http.put(constants.REST_URL+'/order/currentlocation',body,options)
        .subscribe(
          response => {
            console.log(response);
            appResponse=response;
            if(appResponse.status==1)
            {
              this.loadOrders();
              this.showOrder(this.orderData.order.id);
            }
          },
          err => {
            console.log("Error occured");
          }
        );
  }
  changeOrderLocation()
  {
    this.showMap=true;
    
  }
  
statusStepUpdate()
{
  if(this.orderData.order.status=='PLACED')
  {
    this.statusStep=1;
  }else
  if(this.orderData.order.status=='ACCEPTED')
  {
    this.statusStep=2;

  }
  if(this.orderData.order.status=='ORDER_READY')
  {
    this.statusStep=3;

  }
  if(this.orderData.order.status=='ORDER_IN_DELIVERY')
  {
    this.statusStep=4;

  }
  if(this.orderData.order.status=='ORDER_DELIVERED')
  {
    this.statusStep=5;

  }

  if(this.orderData.order.status=='REJECTED' 
  || this.orderData.order.status=='ORDER_READY_REJECTED'
  || this.orderData.order.status=='ORDER_IN_DELIVERY_REJECTED'
  || this.orderData.order.status=='ORDER_NOT_DELIVERED')
  {
    this.statusStep=0;

  }

}

  showOrder(orderId) {
    this.restUrl=constants.REST_URL;
    var  appResponse:any;
    
    this.http.get(constants.REST_URL+'/order/'+orderId).subscribe(response => {
      appResponse=response;
      this.orderData=appResponse.data;
      console.log(this.orderData);
      this.statusStepUpdate();
    },
    err => {
      console.log("Error occured.")
    });
    
    
  }
  logout()
  {
    this.router.navigate(['/']);

  }
    
}
