webpackJsonp([1,4],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 120;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(134);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(195),
        styles: [__webpack_require__(188)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_home_user_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_home_admin_home_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ordertrack_ordertrack_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__orderstatusupdate_orderstatusupdate_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_home_user_home_component__["a" /* UserHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_home_admin_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ordertrack_ordertrack_component__["a" /* OrdertrackComponent */],
            __WEBPACK_IMPORTED_MODULE_13__orderstatusupdate_orderstatusupdate_component__["a" /* OrderstatusupdateComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyBwVQwXXevHiT1wLXReukBV1IPaEfdxRWc",
                libraries: ["places"]
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_home_user_home_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ordertrack_ordertrack_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderstatusupdate_orderstatusupdate_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_home_admin_home_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'track', component: __WEBPACK_IMPORTED_MODULE_5__ordertrack_ordertrack_component__["a" /* OrdertrackComponent */] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_6__orderstatusupdate_orderstatusupdate_component__["a" /* OrderstatusupdateComponent */] },
    { path: 'adminhome', component: __WEBPACK_IMPORTED_MODULE_7__admin_home_admin_home_component__["a" /* AdminHomeComponent */] },
    { path: 'userhome', component: __WEBPACK_IMPORTED_MODULE_3__user_home_user_home_component__["a" /* UserHomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".page-container\n{\n    margin:50px 50px 50px 50px;\n    text-align: center;\n}\n.title\n{\n    margin:auto;\n    width:50%;\n    padding:10px 10px 10px 10px;\n}\n.address-div\n{\nwidth:600px;\nmargin:auto;\n}\nagm-map {\n    height: 200px;\n\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".page-container\n{\n    text-align:center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".login-box\n{\n    text-align:center;\n    width:50%;\n    margin:auto;\n    padding-top:100px;\n    \n}\n.btn-primary\n{\n    width:150px;\n}\n\nform\n{\n    width:50%;\n    margin:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".page-container\n{\n    margin:50px 50px 50px 50px;\n    text-align: center;\n}\n.title\n{\n    margin:auto;\n    width:50%;\n    padding:10px 10px 10px 10px;\n}\n.address-div\n{\nwidth:90%;\nmargin:auto;\n}\nagm-map {\n    height: 400px;\n\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".page-container\n{\n    margin:50px 50px 50px 50px;\n    text-align: center;\n}\n.title\n{\n    margin:auto;\n    width:50%;\n    padding:10px 10px 10px 10px;\n}\n.address-div\n{\nwidth:800px;\nmargin:auto;\n}\nagm-map {\n    height: 200px;\n\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".page-container\n{\n    margin:50px 50px 50px 50px;\n    text-align: center;\n}\n.title\n{\n    margin:auto;\n    width:50%;\n    padding:10px 10px 10px 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <h2>{{restaurant.name}}</h2>\n    <button class=\"btn btn-success\" (click)=\"logout()\" >logout</button>\n\n   \n  <div style=\"margin-left:100px;float:left;\">\n          <table class=\"table\" style=\"width:400px\" align=\"center\" >\n      \n              <thead class=\"thead-dark\">\n                  <tr>\n                      <th scope=\"col\" colspan=\"5\"> Order List</th>\n                      \n                    </tr>\n               \n                <tr>\n                  <th scope=\"col\">OrderId</th>\n                  <th scope=\"col\">Delivery Address</th>\n                  <th scope=\"col\">#</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of orders;let i = index \">\n                  <td>{{order.id}}</td>\n                  <td>{{order.deliveryAddress.geolocation}}</td>\n                  <td>\n                    <button class=\"btn btn-primary\" (click)=\"showOrder(order.id)\" >Show Order Details</button>\n                  </td>\n                </tr>\n                </tbody>\n                </table>\n      </div>\n      \n      <div style=\"margin-left:100px;float:left\" >\n\n          <h3> Order#{{orderData.order.id}}</h3>\n          <h5>Delivery Address:{{orderData.order.deliveryAddress.geolocation}}</h5>\n          <h5>Status:&nbsp;<span style=\"font-weight:bold\">{{orderData.order.status}}</span></h5>\n          <table class=\"table\" style=\"width:400px\" align=\"center\" >\n\n              <thead class=\"thead-dark\">\n               \n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">Image</th>\n                  <th scope=\"col\">Item</th>\n                  <th scope=\"col\">Cost</th>\n                  <th scope=\"col\">Quantity</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let orderitem of orderData.order.items;let i = index \">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td> <img height=\"50\" src=\"{{restUrl}}{{orderitem.menuitem.imgUrl}}\" /></td>\n                  <td>{{orderitem.menuitem.description}}</td>\n                  <td>{{orderitem.menuitem.cost}}</td>\n                  <td>{{orderitem.quantity}}</td>\n                </tr>\n                </tbody>\n                </table>\n\n          <div  *ngIf=\"statusStep==1\">\n              <button class=\"btn btn-success\" (click)=\"chnageOrderStatus(orderData.order.id,'ACCEPTED',orderData.taskId)\" >Accept</button>\n              <button class=\"btn btn-danger\" (click)=\"chnageOrderStatus(orderData.order.id,'REJECTED',orderData.taskId)\" >Reject</button>\n          </div>\n          <div  *ngIf=\"statusStep==2\">\n              <button class=\"btn btn-success\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_READY',orderData.taskId)\" >Order Ready</button>\n              <button class=\"btn btn-danger\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_READY_REJECTED',orderData.taskId)\" >Order Ready Reject</button>\n          </div>\n          <div  *ngIf=\"statusStep==3\">\n              <button class=\"btn btn-success\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_IN_DELIVERY',orderData.taskId)\" >Order In Delivery</button>\n              <button class=\"btn btn-danger\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_IN_DELIVERY_REJECTED',orderData.taskId)\" >Delivery Reject</button>\n          </div>\n          <div  *ngIf=\"statusStep==4\">\n              <button class=\"btn btn-success\" (click)=\"changeOrderLocation(orderData.order.id,orderData.taskId)\" >Change Order Current Location</button>\n              <button class=\"btn btn-success\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_DELIVERED',orderData.taskId)\" >Order Delivered</button>\n              <button class=\"btn btn-danger\" (click)=\"chnageOrderStatus(orderData.order.id,'ORDER_NOT_DELIVERED',orderData.taskId)\" >Order Not Delivered</button>\n          </div>\n      <div class=\"address-div\" [hidden]='!showMap' style=\"clear:both\">\n          <div class=\"form-group\">\n           Order Current Location <input placeholder=\"search for location\"\n            autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" \n            type=\"text\" [(ngModel)]=\"geolocation\" class=\"form-control\" \n            #search [formControl]=\"searchControl\">\n          </div>\n          <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n          </agm-map>\n        </div>\n     </div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <img src=\"assets/images/restaurant1.jpg\" />\n\n    <h1>{{userType | uppercase}} &nbsp;LOGIN </h1>\n    <div *ngIf=\"userType=='staff'\">\n      <p>If you are Kitchen Staff use userid: admin , password:123</p>\n      <p>If you are Delivery Staff use userid: delivery , password:123</p>\n    </div>\n\n    <div *ngIf=\"userType=='customer'\">\n        <p>Use following userid to login</p>\n        <p>userid: customer , password:123</p>\n        <p>userid: guest , password:123</p>\n\n    </div>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"email\">User Id:</label>\n        <input type=\"text\" class=\"form-control\" id=\"userid\" name=\"userid\" [(ngModel)]=\"userid\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"passowrd\" name=\"passowrd\" [(ngModel)]=\"password\">\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<p>\n  orderstatusupdate works!\n</p>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <h2>{{restaurant.name}}</h2>\n\n    <h3>Your Order#{{orderData.order.id}}</h3>\n    <h5>Delivery Address:{{orderData.order.deliveryAddress.geolocation}}</h5>\n    <h5>Status:{{orderData.order.status}}</h5>\n    <h5>Order Current Location:{{orderData.order.currentAddressLocation.geolocation}}</h5>\n\n    <div class=\"address-div\">\n        <div class=\"form-group\">\n        </div>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n        <p>&nbsp;</p>\n        <p>      \n          <button class=\"btn btn-primary\" (click)=\"gotoHome()\">Back to Home</button>\n          <button class=\"btn btn-primary\" (click)=\"trackOrder()\">Track Order Again</button>\n          \n        </p>\n\n      </div>\n\n  </div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <h2>{{restaurant.name}}</h2>\n    <button class=\"btn btn-success\" (click)=\"logout()\" >logout</button>\n\n    <div class=\"address-div\">\n        <div class=\"form-group\">\n         Delivery Address <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" [(ngModel)]=\"geolocation\" class=\"form-control\" #search [formControl]=\"searchControl\">\n        </div>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n      </div>\n\n<div style=\"float:left\">\n    <table class=\"table\" style=\"width:400px\" align=\"center\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\" colspan=\"5\">Menu</th>\n                \n              </tr>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Image</th>\n            <th scope=\"col\">Item</th>\n            <th scope=\"col\">Cost</th>\n            <th scope=\"col\">&nbsp;</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let menuitem of restaurant.menuitems;let i = index \">\n            <th scope=\"row\">{{i+1}}</th>\n            <td> <img height=\"50\" src=\"{{restUrl}}{{menuitem.imgUrl}}\" /></td>\n            <td>{{menuitem.description}}</td>\n            <td>{{menuitem.cost}}</td>\n            <td><button class=\"btn btn-primary\" (click)=\"addItem(menuitem)\">Add</button></td>\n          </tr>\n          </tbody>\n          </table>\n\n    \n    </div>\n\n    <div style=\"margin-left:100px;float:left\">\n       \n    \n\n    <table class=\"table\" style=\"width:400px\" align=\"center\" >\n\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\" colspan=\"5\">New Order</th>\n                \n              </tr>\n         \n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Image</th>\n            <th scope=\"col\">Item</th>\n            <th scope=\"col\">Cost</th>\n            <th scope=\"col\">Quantity</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let orderitem of orderItems;let i = index \">\n            <th scope=\"row\">{{i+1}}</th>\n            <td> <img height=\"50\" src=\"{{restUrl}}{{orderitem.menuitem.imgUrl}}\" /></td>\n            <td>{{orderitem.menuitem.description}}</td>\n            <td>{{orderitem.menuitem.cost}}</td>\n            <td>  <input type=\"text\" class=\"form-control\" id=\"quantity\" name=\"quantity\" [(ngModel)]=\"orderitem.quantity\">\n            </td>\n          </tr>\n          </tbody>\n          </table>\n    <button class=\"btn btn-primary\" (click)=\"placeOrder()\" *ngIf=\"!orderSuccess\">Place Order</button>\n\n    <div *ngIf=\"orderSuccess\">\n        <h4>{{orderSuccessMsg}}</h4>\n        <button class=\"btn btn-primary\" (click)=\"trackOrder(orderSuccessId)\" >Track Order</button>\n\n       </div>\n\n    </div>\n\n    \n  </div>\n  <div style=\"margin-left:100px;float:left\">\n          <table class=\"table\" style=\"width:400px\" align=\"center\" >\n      \n              <thead class=\"thead-dark\">\n                  <tr>\n                      <th scope=\"col\" colspan=\"5\"> Order List</th>\n                      \n                    </tr>\n               \n                <tr>\n                  <th scope=\"col\">OrderId</th>\n                  <th scope=\"col\">Delivery Address</th>\n                  <th scope=\"col\">#</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of orders;let i = index \">\n                  <td>{{order.id}}</td>\n                  <td>{{order.deliveryAddress.geolocation}}</td>\n                  <td><button class=\"btn btn-primary\" (click)=\"trackOrder(order.id)\" >Track Order</button>\n                  </td>\n                </tr>\n                </tbody>\n                </table>\n      </div>\n  \n      "

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n<h1 class=\"title\">Welcome to Food Ordering App</h1>\n<h2>{{restaurant.name}}</h2>\n<img src=\"assets/images/restaurant1.jpg\" />\n<h4>If You are looking for ordering food click Login</h4>\n<h4>Are you restaurant staff, click restaurant login to process orders</h4>\n<h2>Userid's provided on the login screen for demo</h2>\n\n<button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n<button class=\"btn btn-primary\" (click)=\"restaurantLogin()\">Restaurant Login</button>\n</div>"

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REST_URL; });
var REST_URL = "http://localhost:8092";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminHomeComponent = (function () {
    function AdminHomeComponent(mapsAPILoader, ngZone, router, route, http) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.http = http;
        this.restaurant = {};
        this.orderItems = [];
        this.orderSuccess = false;
        this.orderSuccessMsg = "";
        this.orders = [];
        this.showMap = false;
        this.statusStep = 0;
        this.orderData = { order: { id: "", deliveryAddress: { geolocation: "" } } };
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restUrl = __WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */];
        this.userid = localStorage.getItem("userid");
        this.restaurantId = localStorage.getItem("restaurant");
        var appResponse;
        this.route.queryParams.subscribe(function (params) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/menu/restaurant/' + _this.restaurantId).subscribe(function (response) {
                appResponse = response;
                _this.restaurant = appResponse.data;
                console.log(appResponse);
            }, function (err) {
                console.log("Error occured.");
            });
            _this.loadOrders();
            _this.prepareLocationSearch();
        });
    };
    AdminHomeComponent.prototype.prepareLocationSearch = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 12;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    console.log("address place", _this.searchElementRef.nativeElement.value);
                    _this.geolocation = _this.searchElementRef.nativeElement.value;
                    _this.saveOrderLocation();
                });
            });
        });
    };
    AdminHomeComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                console.log(position);
            });
        }
    };
    AdminHomeComponent.prototype.loadOrders = function () {
        var _this = this;
        var appResponse;
        var options = {
            withCredentials: true
        };
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order/list/' + this.userid, options).subscribe(function (response) {
            appResponse = response;
            _this.orders = appResponse.data;
            console.log("orders ", appResponse);
        }, function (err) {
            console.log("Error occured.");
        });
    };
    AdminHomeComponent.prototype.addItem = function (menuitem) {
        this.orderSuccess = false;
        console.log(menuitem);
        var orderitem = {};
        orderitem.quantity = 1;
        orderitem.menuitem = menuitem;
        orderitem.menuitemCode = menuitem.menuitemCode;
        this.orderItems.push(orderitem);
    };
    AdminHomeComponent.prototype.chnageOrderStatus = function (orderIdIn, status, taskIdIn) {
        var _this = this;
        var appResponse;
        var options = {
            withCredentials: true
        };
        var body = {
            userid: this.userid,
            orderId: orderIdIn,
            orderStatus: status,
            taskId: taskIdIn
        };
        this.http.put(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order', body, options)
            .subscribe(function (response) {
            console.log(response);
            appResponse = response;
            if (appResponse.status == 1) {
                _this.loadOrders();
                _this.showOrder(orderIdIn);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    AdminHomeComponent.prototype.saveOrderLocation = function () {
        var _this = this;
        var appResponse;
        var options = {
            withCredentials: true
        };
        var body = {
            userid: this.userid,
            orderId: this.orderData.order.id,
            currentAddressLocation: {
                "geolocation": this.geolocation,
                "latitude": this.latitude,
                "longitude": this.longitude
            },
            restaurantId: this.restaurantId,
            taskId: this.orderData.taskId
        };
        this.http.put(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order/currentlocation', body, options)
            .subscribe(function (response) {
            console.log(response);
            appResponse = response;
            if (appResponse.status == 1) {
                _this.loadOrders();
                _this.showOrder(_this.orderData.order.id);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    AdminHomeComponent.prototype.changeOrderLocation = function () {
        this.showMap = true;
    };
    AdminHomeComponent.prototype.statusStepUpdate = function () {
        if (this.orderData.order.status == 'PLACED') {
            this.statusStep = 1;
        }
        else if (this.orderData.order.status == 'ACCEPTED') {
            this.statusStep = 2;
        }
        if (this.orderData.order.status == 'ORDER_READY') {
            this.statusStep = 3;
        }
        if (this.orderData.order.status == 'ORDER_IN_DELIVERY') {
            this.statusStep = 4;
        }
        if (this.orderData.order.status == 'ORDER_DELIVERED') {
            this.statusStep = 5;
        }
        if (this.orderData.order.status == 'REJECTED'
            || this.orderData.order.status == 'ORDER_READY_REJECTED'
            || this.orderData.order.status == 'ORDER_IN_DELIVERY_REJECTED'
            || this.orderData.order.status == 'ORDER_NOT_DELIVERED') {
            this.statusStep = 0;
        }
    };
    AdminHomeComponent.prototype.showOrder = function (orderId) {
        var _this = this;
        this.restUrl = __WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */];
        var appResponse;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order/' + orderId).subscribe(function (response) {
            appResponse = response;
            _this.orderData = appResponse.data;
            console.log(_this.orderData);
            _this.statusStepUpdate();
        }, function (err) {
            console.log("Error occured.");
        });
    };
    AdminHomeComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    return AdminHomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], AdminHomeComponent.prototype, "searchElementRef", void 0);
AdminHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-admin-home',
        template: __webpack_require__(194),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _f || Object])
], AdminHomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_constants__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restUrl = __WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */];
        this.route.queryParams.subscribe(function (params) {
            _this.userType = params["userType"];
            _this.restaurantId = params["restaurantId"];
            console.log("params", params);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var options = {
            withCredentials: true
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/user/login', {
            userid: this.userid,
            password: this.password,
            userType: this.userType
        })
            .subscribe(function (response) {
            console.log(response);
            _this.appResponse = response;
            if (_this.appResponse.status == 1) {
                localStorage.setItem("userid", _this.userid);
                var navigationExtras = {
                    queryParams: {
                        "restaurantId": _this.restaurantId
                    }
                };
                if (_this.userType == 'staff') {
                    _this.router.navigate(['adminhome'], navigationExtras);
                }
                else {
                    _this.router.navigate(['userhome'], navigationExtras);
                }
            }
            else {
                alert("Invalid credentials.");
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(196),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderstatusupdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderstatusupdateComponent = (function () {
    function OrderstatusupdateComponent() {
    }
    OrderstatusupdateComponent.prototype.ngOnInit = function () {
    };
    return OrderstatusupdateComponent;
}());
OrderstatusupdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-orderstatusupdate',
        template: __webpack_require__(197),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], OrderstatusupdateComponent);

//# sourceMappingURL=orderstatusupdate.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdertrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdertrackComponent = (function () {
    function OrdertrackComponent(mapsAPILoader, ngZone, router, route, http) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.http = http;
        this.restaurant = {};
        this.orderData = { order: { id: "", deliveryAddress: { geolocation: "" }, currentAddressLocation: {} } };
    }
    OrdertrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restUrl = __WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */];
        this.userid = localStorage.getItem("userid");
        this.restaurantId = localStorage.getItem("restaurant");
        var appResponse;
        this.route.queryParams.subscribe(function (params) {
            _this.orderId = params["orderId"];
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order/' + _this.orderId).subscribe(function (response) {
                appResponse = response;
                _this.orderData = appResponse.data;
                _this.zoom = 16;
                _this.geolocation = _this.orderData.order.currentAddressLocation.geolocation;
                _this.latitude = parseFloat(_this.orderData.order.currentAddressLocation.latitude);
                _this.longitude = parseFloat(_this.orderData.order.currentAddressLocation.longitude);
                console.log(_this.orderData.order.currentAddressLocation);
            }, function (err) {
                console.log("Error occured.");
            });
        });
    };
    OrdertrackComponent.prototype.prepareLocationSearch = function () {
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 17.366019;
        this.longitude = 78.39225650000003;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
        });
    };
    OrdertrackComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                console.log(position);
            });
        }
    };
    OrdertrackComponent.prototype.gotoHome = function () {
        var navigationExtras = {
            queryParams: {
                "orderId": this.orderId
            }
        };
        this.router.navigate(['userhome'], navigationExtras);
    };
    OrdertrackComponent.prototype.trackOrder = function () {
        this.ngOnInit();
    };
    return OrdertrackComponent;
}());
OrdertrackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-ordertrack',
        template: __webpack_require__(198),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _e || Object])
], OrdertrackComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ordertrack.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserHomeComponent = (function () {
    function UserHomeComponent(mapsAPILoader, ngZone, router, route, http) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.http = http;
        this.restaurant = {};
        this.orderItems = [];
        this.orderSuccess = false;
        this.orderSuccessMsg = "";
        this.orders = [];
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restUrl = __WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */];
        this.userid = localStorage.getItem("userid");
        this.restaurantId = localStorage.getItem("restaurant");
        var appResponse;
        this.route.queryParams.subscribe(function (params) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/menu/restaurant/' + _this.restaurantId).subscribe(function (response) {
                appResponse = response;
                _this.restaurant = appResponse.data;
                console.log(appResponse);
            }, function (err) {
                console.log("Error occured.");
            });
            _this.loadOrders();
            _this.prepareLocationSearch();
        });
    };
    UserHomeComponent.prototype.prepareLocationSearch = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 12;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    console.log("address place", _this.searchElementRef.nativeElement.value);
                    _this.geolocation = _this.searchElementRef.nativeElement.value;
                });
            });
        });
    };
    UserHomeComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                console.log(position);
            });
        }
    };
    UserHomeComponent.prototype.loadOrders = function () {
        var _this = this;
        var appResponse;
        var options = {
            withCredentials: true
        };
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order/list/' + this.userid, options).subscribe(function (response) {
            appResponse = response;
            _this.orders = appResponse.data;
            console.log("orders ", appResponse);
        }, function (err) {
            console.log("Error occured.");
        });
    };
    UserHomeComponent.prototype.addItem = function (menuitem) {
        this.orderSuccess = false;
        console.log(menuitem);
        var orderitem = {};
        orderitem.quantity = 1;
        orderitem.menuitem = menuitem;
        orderitem.menuitemCode = menuitem.menuitemCode;
        this.orderItems.push(orderitem);
    };
    UserHomeComponent.prototype.placeOrder = function () {
        var _this = this;
        var appResponse;
        var options = {
            withCredentials: true
        };
        var body = {
            userid: this.userid,
            address: {
                "geolocation": this.geolocation,
                "latitude": this.latitude,
                "longitude": this.longitude
            },
            restaurantId: this.restaurantId,
            items: this.orderItems
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/order', body, options)
            .subscribe(function (response) {
            console.log(response);
            appResponse = response;
            if (appResponse.status == 1) {
                _this.orderSuccess = true;
                _this.orderSuccessMsg = appResponse.data.message;
                _this.orderSuccessId = appResponse.data.orderId;
                _this.loadOrders();
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    UserHomeComponent.prototype.trackOrder = function (orderId) {
        var navigationExtras = {
            queryParams: {
                "orderId": orderId
            }
        };
        this.router.navigate(['track'], navigationExtras);
    };
    UserHomeComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    return UserHomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], UserHomeComponent.prototype, "searchElementRef", void 0);
UserHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-user-home',
        template: __webpack_require__(199),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _f || Object])
], UserHomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-home.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_constants__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = (function () {
    function WelcomeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.restaurant = {};
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__globals_constants__["a" /* REST_URL */] + '/restaurants').subscribe(function (response) {
            console.log(response);
            _this.appResponse = response;
            _this.restaurant = _this.appResponse.data[0];
            console.log(_this.restaurant);
            localStorage.setItem("restaurant", _this.restaurant.restaurantId);
        }, function (err) {
            console.log("Error occured.");
        });
    };
    WelcomeComponent.prototype.login = function () {
        var navigationExtras = {
            queryParams: {
                "userType": "customer", "restaurantId": this.restaurant.restaurantId
            }
        };
        this.router.navigate(['login'], navigationExtras);
    };
    WelcomeComponent.prototype.restaurantLogin = function () {
        var navigationExtras = {
            queryParams: {
                "userType": "staff", "restaurantId": this.restaurant.restaurantId
            }
        };
        this.router.navigate(['login'], navigationExtras);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(200),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], WelcomeComponent);

var _a, _b;
//# sourceMappingURL=welcome.component.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.bundle.js.map