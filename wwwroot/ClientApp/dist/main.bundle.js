webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: "\n    <p>\n      about works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n</head>\r\n<div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n        <a href=\"/\" class=\"navbar-brand\">AccordionFair</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item \">\r\n                    <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"about\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"shop\">Shop</a>\r\n                </li>\r\n                <li class=\"nav-item ml-auto\">\r\n                    <a class=\"nav-link\" routerLink=\"register\">Register</a>\r\n                </li>\r\n                <li class=\"nav-item mr-auto\">\r\n                    <a class=\"nav-link\" routerLink=\"orders\">Orders</a>\r\n                </li>\r\n                \r\n            </ul>\r\n            <div>\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item \">\r\n                        <p class=\"text-secondary\">Current Bitcoin Price: {{ btcPrice }}  <i class=\"fa fa-usd\"></i></p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"text-center text-light fixed-bottom\">Copyright 2018 Accordion Fair LLC</footer>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(data) {
        var _this = this;
        this.data = data;
        this.btcPrice = "";
        this.title = 'Product List';
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__["c" /* setTheme */])("bs4");
        this.data.getBtcPrice()
            .subscribe(function (success) {
            if (success) {
                _this.btcPrice = _this.data.btcPrice.toFixed(2);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'entry',
        template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularx_qrcode__ = __webpack_require__("../../../../angularx-qrcode/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shop_productList_component__ = __webpack_require__("../../../../../ClientApp/app/shop/productList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shop_cart_component__ = __webpack_require__("../../../../../ClientApp/app/shop/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shop_shop_component__ = __webpack_require__("../../../../../ClientApp/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkout_checkout_component__ = __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../ClientApp/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__orderAddress_orderAddress_component__ = __webpack_require__("../../../../../ClientApp/app/orderAddress/orderAddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__orders_orders_component__ = __webpack_require__("../../../../../ClientApp/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../ClientApp/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__("../../../../../ClientApp/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__("../../../../../ClientApp/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("../../../../../ClientApp/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__register_register_success_register_success_component__ = __webpack_require__("../../../../../ClientApp/app/register/register-success/register-success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */] },
    { path: "register-success", component: __WEBPACK_IMPORTED_MODULE_21__register_register_success_register_success_component__["a" /* RegisterSuccessComponent */] },
    { path: "shop", component: __WEBPACK_IMPORTED_MODULE_11__shop_shop_component__["a" /* Shop */] },
    { path: "checkout", component: __WEBPACK_IMPORTED_MODULE_12__checkout_checkout_component__["a" /* Checkout */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* Login */] },
    { path: "order-address", component: __WEBPACK_IMPORTED_MODULE_14__orderAddress_orderAddress_component__["a" /* OrderAddress */] },
    { path: "orders", component: __WEBPACK_IMPORTED_MODULE_16__orders_orders_component__["a" /* OrdersComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shop_productList_component__["a" /* ProductList */],
            __WEBPACK_IMPORTED_MODULE_10__shop_cart_component__["a" /* Cart */],
            __WEBPACK_IMPORTED_MODULE_11__shop_shop_component__["a" /* Shop */],
            __WEBPACK_IMPORTED_MODULE_12__checkout_checkout_component__["a" /* Checkout */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__orderAddress_orderAddress_component__["a" /* OrderAddress */],
            __WEBPACK_IMPORTED_MODULE_16__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__register_register_success_register_success_component__["a" /* RegisterSuccessComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularx_qrcode__["a" /* QRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, {
                useHash: true,
                enableTracing: false
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["b" /* CarouselModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__shared_dataService__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-thumb {\r\n  max-width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n  <h3>Confirm Order</h3>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <tr *ngFor=\"let o of data.order.items\">\r\n      <td><img src=\"/img/productImg/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\r\n      <td>{{ o.quantity }}</td>\r\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\r\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n    <table class=\"table table-condensed\">\r\n      <tr>\r\n        <td class=\"text-right\">Subtotal</td>\r\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Shipping</td>\r\n        <td class=\"text-right\">$ 0.00</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Total:</td>\r\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\r\n      </tr>\r\n    </table>\r\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Checkout = (function () {
    function Checkout(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["order-address"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    return Checkout;
}());
Checkout = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "checkout",
        template: __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Checkout);

var _a, _b;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: "\n    <p>\n      contact works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"background-image: url('/img/')\"></div>\r\n<carousel class=\"slide\">\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_07.jpg\" alt=\"first slide\" class=\"img-fluid\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_02.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_03.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_04.jpg\" alt=\"fouth slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_05-1.jpg\" alt=\"fifth slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_06.jpg\" alt=\"sixth slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_01.jpg\" alt=\"seventh slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_08.jpg\" alt=\"eight slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_09.jpg\" alt=\"ninth slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/2016_10_10.jpg\" alt=\"tenth slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n    <slide>\r\n        <img src=\"/img/scandalli/Bara_Zmekova_koncert_Cafe_Etage_PH11706_color-1.jpg\" alt=\"eleventh slide\" style=\"display: block; width: 100%;\" />\r\n    </slide>\r\n</carousel>\r\n\r\n<!-- Page Features -->\r\n<div class=\"container\">\r\n    <div class=\"row text-center\">\r\n\r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"/img/scandalli/scand2.jpg\" alt=\"\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Scandalli</h4>\r\n                    <p class=\"card-text\">The Scandalli brand is an icon for many because of its long, distinguished history of innovation, prestige and quality.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"shop\" class=\"btn bg-dark\">Find Out More!</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"/img/scandalli/Weltmeister.jpg\" alt=\"\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Weltmeister</h4>\r\n                    <p class=\"card-text\">\r\n                        At Weltmeister Akkordeon Manufaktur GmbH, we supply\r\n                        the music world with Weltmeister solo, button, piano\r\n                        and folklore accordions.\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"shop\" class=\"btn bg-dark\">Find Out More!</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"/img/scandalli/bugari.jpg\" alt=\"\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Armando Bugari</h4>\r\n                    <p class=\"card-text\">The Bugari Armando, proud of it's tradition, is conscious of occupying a place of importance among the various manufacturers.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"shop\" class=\"btn bg-dark\">Find Out More!</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"/img/scandalli/Excelsior.jpg\" alt=\"\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Excelsior</h4>\r\n                    <p class=\"card-text\">Shining like stars in the universe of sounds, EXCELSIOR accordions came to light in NY, USA in 1924.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"shop\" class=\"btn bg-dark\">Find Out More!</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../ClientApp/app/home/home.component.html"),
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__["a" /* CarouselConfig */], useValue: { interval: 4350, noPause: true, showIndicators: false } }
        ],
        styles: []
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\"  [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" required #password=\"ngModel\" />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\"/>\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n                <a routerLink=\"/register\" class=\"btn btn-default float-right\">Register</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.ordersRequested == true) {
                    _this.data.ordersRequested = false;
                    _this.router.navigate(["orders"]);
                }
                else if (_this.data.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "login",
        template: __webpack_require__("../../../../../ClientApp/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Login);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/orderAddress/orderAddress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/orderAddress/orderAddress.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>orderAddress.component</title>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <div>\r\n            <h3 class=\"text-success\">\r\n                Please pay to <span style=\"color:blue\">{{ orderAddress }}</span>    <i class=\"fa fa-btc\"></i>\r\n            </h3>\r\n\r\n            <div class=\"justify-content-center\" *ngIf=\"orderAddress\">\r\n                <qrcode [qrdata]=\"orderQRInfo\" [size]=\"280\" [level]=\"'M'\"></qrcode>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div>\r\n            <br /><br /><br />\r\n            <h2 class=\"text-danger\" *ngIf=\"paymentNotSatisfied\">{{ sumOfTransactions }}<i class=\"fa fa-btc\"></i> has been paid!</h2>\r\n            <h2 class=\"text-success\" *ngIf=\"paymentCorrect\">Order has been paid for!</h2>\r\n            <h4 class=\"text-success\" *ngIf=\"paymentExceeded\">You paid {{ paymentDiffBTC }}<i class=\"fa fa-btc\"></i> more!</h4>\r\n            <h4 class=\"text-info\" *ngIf=\"paymentNotSatisfied && (sumOfTransactions != 0)\">You paid {{ sumOfTransactions }}<i class=\"fa fa-btc\"></i>, to complete purchase please pay {{ (order.orderTotalInBitcoin - sumOfTransactions) | number:'1.1-8'}}<i class=\"fa fa-btc\"></i> more!</h4>\r\n\r\n            <h6 class=\"text-secondary\">Transactions for this order:</h6>\r\n            <ul id=\"messagesList\"></ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"order\">\r\n\r\n        <h3>Here are details of your order: </h3>\r\n        <h6>Order Total: {{ order.orderTotalInUSD }}<i class=\"fa fa-usd\"></i></h6>\r\n\r\n        <h6>Order Total in Bitcoin: {{ order.orderTotalInBitcoin | number:'1.1-8'}}<i class=\"fa fa-btc\"></i></h6>\r\n\r\n        <h5>Order items: </h5>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Product</th>\r\n                    <th scope=\"col\">Quantity</th>\r\n                    <th scope=\"col\">Price per Unit </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let i of order.items\">\r\n                    <td>{{ i.product.title }}</td>\r\n                    <td>{{ i.quantity }}</td>\r\n                    <td>{{ i.unitPrice }} <i class=\"fa fa-usd\"></i></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <p class=\"text-info\" *ngIf=\"order\">Please complete your payment in 15 minutes. </p>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../ClientApp/app/orderAddress/orderAddress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aspnet_signalr__ = __webpack_require__("../../../../@aspnet/signalr/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderAddress = (function () {
    function OrderAddress(data) {
        this.data = data;
        this.orderAddress = "";
        this.orderQRInfo = "";
        this.msgs = [];
        this.payments = [];
        this.sumOfTransactions = 0;
        this.paymentDiffUSD = 0;
        this.paymentDiffBTC = 0;
        this.paymentExceeded = false;
        this.paymentCorrect = false;
        this.paymentNotSatisfied = true;
    }
    OrderAddress.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBtcPrice()
            .subscribe(function (success) {
            if (success)
                _this.btcPrice = _this.data.btcPrice;
        });
        this.data.getOrderAddress()
            .subscribe(function (success) {
            if (success) {
                _this.order = _this.data.orderFromServer;
                _this.orderAddress = _this.data.orderAddress;
                _this.orderQRInfo = "bitcoin:" + _this.orderAddress + "?" + "amount=" + _this.order.orderTotalInBitcoin;
            }
        });
        var connection = new __WEBPACK_IMPORTED_MODULE_2__aspnet_signalr__["a" /* HubConnectionBuilder */]()
            .withUrl("http://localhost:8888/notifyHub", { accessTokenFactory: function () { return _this.data.token; } }) //JWT Bearer
            .build();
        connection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection :('); });
        connection.on("ReceiveNotification", function (txId, txAmount, totalAmountOfBitcoinPayed) {
            _this.payments.push(txAmount);
            var txLog = txAmount + " has been received from transaction with id: " + txId;
            if (_this.order.orderTotalInBitcoin > totalAmountOfBitcoinPayed) {
                _this.paymentExceeded = false;
                _this.paymentCorrect = false;
                _this.paymentNotSatisfied = true;
                _this.paymentDiffBTC = _this.order.orderTotalInBitcoin - totalAmountOfBitcoinPayed;
            }
            else if (_this.order.orderTotalInBitcoin == totalAmountOfBitcoinPayed) {
                _this.paymentExceeded = false;
                _this.paymentCorrect = true;
                _this.paymentNotSatisfied = false;
            }
            else if (_this.order.orderTotalInBitcoin <= totalAmountOfBitcoinPayed) {
                _this.paymentExceeded = true;
                _this.paymentCorrect = false;
                _this.paymentNotSatisfied = false;
                _this.paymentDiffBTC = totalAmountOfBitcoinPayed - _this.order.orderTotalInBitcoin;
            }
            var li = document.createElement("li");
            li.textContent = txLog;
            document.getElementById("messagesList").appendChild(li);
            var forEachBuffer = 0;
            if (_this.payments.length > 0) {
                _this.payments.forEach(function (amount) {
                    forEachBuffer += amount;
                });
            }
            _this.sumOfTransactions = forEachBuffer;
        });
    };
    return OrderAddress;
}());
OrderAddress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "order-address",
        template: __webpack_require__("../../../../../ClientApp/app/orderAddress/orderAddress.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/orderAddress/orderAddress.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object])
], OrderAddress);

var _a;
//# sourceMappingURL=orderAddress.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n</head>\r\n<h1 class=\"text-center\">All the orders:</h1>\r\n<h4 class=\"text-center\" *ngIf=\"data.ordersByUser.length > 0\"> # of orders: {{ orders.length }}</h4>\r\n<div *ngIf=\"data.ordersByUser.length > 0\">\r\n\r\n    <div *ngFor=\"let o of orders\">\r\n        <div *ngIf=\"o.orderPaymentValid || o.receivedValue > 0\"></div>\r\n            <h5>Order {{ o.orderNumber}} Info</h5>\r\n            <h6>Name: {{ o.user.firstName }}  {{o.user.lastName}}</h6>\r\n            <h6>Email: {{ o.user.email }}</h6>\r\n\r\n            <h6 class=\"\">Bitcoin Address: {{ o.bitcoinAddress }}</h6>\r\n            <h6 class=\"\">Received Value for order : {{ o.receivedValue }} <i class=\"fa fa-btc\"></i></h6>\r\n            <h6 class=\"\">More than necessary has been paid: {{ o.moreThanNecessary }}</h6>\r\n            <h6 class=\"\">Payment is valid: {{ o.orderPaymentValid }}</h6>\r\n            <h6 class=\"\">Time of the order: {{ o.orderDate | date: 'medium' }}</h6>\r\n            <br />\r\n\r\n            <h5>Order items: </h5>\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Product</th>\r\n                        <th scope=\"col\">Quantity</th>\r\n                        <th scope=\"col\">Price per Unit </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let i of o.items\">\r\n                        <td>{{ i.product.title }}</td>\r\n                        <td>{{ i.quantity }}</td>\r\n                        <td>{{ i.unitPrice }} <i class=\"fa fa-usd\"></i></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n            <!--TOTAL!!!-->\r\n            <div *ngIf=\"o.transactions.length > 0\">\r\n                <h5>Order Transactions: </h5>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Transaction Id</th>\r\n                            <th>Transaction Amount <i class=\"fa fa-btc\"></i></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let t of o.transactions\">\r\n                            <td>{{ t.transactionId }}</td>\r\n                            <td>{{ t.amount }} <i class=\"fa fa-btc\"></i></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td><strong>Total: {{ o.receivedValue }} <i class=\"fa fa-btc\"></i></strong></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <br /><br /><br />\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(data, router) {
        this.data = data;
        this.router = router;
        this.ordersSet = false;
        this.orders = [];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.loginRequired) {
            this.data.ordersRequested = true;
            this.router.navigate(["login"]);
        }
        this.data.getAllOrders()
            .subscribe(function (success) {
            if (success) {
                _this.orders = _this.data.ordersByUser;
            }
        });
        if (this.data.ordersByUser.length > 0) {
            this.ordersSet = true;
        }
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../ClientApp/app/orders/orders.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/register/register-success/register-success.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center text-success\">Congratulations! You have been registered.</h3>\r\n\r\n<h5 class=\"text-center\">Navigate to <a routerLink=\"/\">Home</a> or to <a routerLink=\"/shop\">Shop</a> ?</h5>"

/***/ }),

/***/ "../../../../../ClientApp/app/register/register-success/register-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterSuccessComponent = (function () {
    function RegisterSuccessComponent() {
    }
    RegisterSuccessComponent.prototype.ngOnInit = function () {
    };
    return RegisterSuccessComponent;
}());
RegisterSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register-success',
        template: __webpack_require__("../../../../../ClientApp/app/register/register-success/register-success.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RegisterSuccessComponent);

//# sourceMappingURL=register-success.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n            <form (submit)=\"onRegister()\" #theForm=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"userInfo.userName\" #username=\"ngModel\" required />\r\n                    <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"firstname\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"userInfo.firstName\" #firstname=\"ngModel\" required />\r\n                    <div class=\"text-danger\" *ngIf=\"firstname.touched && firstname.invalid && firstname.errors.required\">First name is required!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"lastname\">Last Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"userInfo.lastName\" #lastname=\"ngModel\" required />\r\n                    <div class=\"text-danger\" *ngIf=\"lastname.touched && lastname.invalid && lastname.errors.required\">Last name is required!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"userInfo.email\" #email=\"ngModel\" required />\r\n                    <div class=\"text-danger\" *ngIf=\"email.touched && email.invalid && email.errors.required\">Email is required!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userInfo.password\" required #password=\"ngModel\" />\r\n                    <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n                    <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.userInfo = {
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.data.register(this.userInfo)
            .subscribe(function (success) {
            _this.router.navigate(['register-success']);
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../ClientApp/app/register/register.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order__ = __webpack_require__("../../../../../ClientApp/app/shared/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.ordersByUser = [];
        this.order = new __WEBPACK_IMPORTED_MODULE_3__order__["a" /* Order */]();
        this.orderAddress = "";
        this.ordersRequested = false;
        this.btcPrice = 0;
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (data) {
            _this.products = data;
            return true;
        });
    };
    DataService.prototype.getAllOrders = function () {
        var _this = this;
        return this.http.get("/api/orders", {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                .set("Authorization", "Bearer " + this.token)
        })
            .map(function (data) {
            _this.ordersByUser = data;
            return true;
        });
    };
    DataService.prototype.checkout = function () {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", "Bearer " + this.token)
        })
            .map(function (response) {
            return true;
        });
    };
    DataService.prototype.getOrderAddress = function () {
        var _this = this;
        var url = "/api/orders/" + this.order.orderNumber;
        return this.http
            .get(url, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", "Bearer " + this.token)
        })
            .map(function (data) {
            _this.orderFromServer = data;
            _this.orderAddress = data.bitcoinAddress;
            _this.order.orderAddress = data.bitcoinAddress;
            return true;
        });
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http
            .post("/account/createtoken", creds)
            .map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        });
    };
    DataService.prototype.register = function (userInfo) {
        return this.http
            .post("/account/register", userInfo)
            .map(function (data) {
            return true;
        });
    };
    DataService.prototype.getBtcPrice = function () {
        var _this = this;
        return this.http
            .get("https://blockchain.info/ticker")
            .map(function (data) {
            // this.btcPrice = data.bpi.USD.rate;
            _this.btcPrice = data.USD.sell;
            _this.order.btcPrice = _this.btcPrice;
            return true;
        });
    };
    DataService.prototype.AddToOrder = function (newProduct) {
        var item = this.order.items.find(function (i) { return i.productId == newProduct.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new __WEBPACK_IMPORTED_MODULE_3__order__["b" /* OrderItem */]();
            item.productId = newProduct.id;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            item.productCassoto = newProduct.cassoto;
            item.productRegisters = newProduct.registers;
            item.productWeight = newProduct.weight;
            this.order.items.push(item);
        }
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shared/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            var sub = __WEBPACK_IMPORTED_MODULE_0_lodash__["sum"](__WEBPACK_IMPORTED_MODULE_0_lodash__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
            return sub;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{ data.order.items.length }}</div>\r\n<div>Subtotal: {{ data.order.subtotal | currency:\"USD\":true }}</div>\r\n<table class=\"table table-sm table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{o.productCategory}} - {{ o.productTitle }}</td> \r\n            <td>{{o.quantity}}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity | currency:\"USD\":true) }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<button class=\"btn text-light bg-dark btn-lg float-right\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cart = (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            // force login
            this.router.navigate(["login"]);
        }
        else {
            // go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    return Cart;
}());
Cart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "the-cart",
        template: __webpack_require__("../../../../../ClientApp/app/shop/cart.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Cart);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block img{\r\n    max-width: 100px;\r\n    float:left;\r\n    margin: 10px  5px;\r\n    border: solid 1px black;\r\n}\r\n\r\n\r\n.card-block .product-name{\r\n    font-size:large;\r\n    font-weight:bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h1 class=\"my-4\">\r\n    </h1>\r\n\r\n    <div class=\"row\" *ngFor=\"let p of products\">\r\n        <div class=\"col-md-7\">\r\n            <a (click)=\"addProduct(p)\">\r\n                <img src=\"/img/productImg/{{p.artId}}.jpg\" class=\"img-fluid\" alt=\"{{ p.title}}\" />\r\n            </a>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"product-name\"><strong>{{p.title}}</strong></div>\r\n            <br />\r\n            <div><strong>Price: </strong>{{ p.price | currency:\"USD\":true}}</div>\r\n            <div><strong>Size: </strong> {{ p.size }}</div>\r\n            <div><strong>Keys: </strong> {{ p.keys }}</div>\r\n            <div><strong>Reeds: </strong> {{ p.reeds }}</div>\r\n            <div><strong>Registers: </strong> {{ p.registers }}</div>\r\n            <div><strong>Basses: </strong> {{ p.basses }}</div>\r\n            <div><strong>Weight: </strong> {{ p.weight }}</div>\r\n            <div><strong>Cassoto: </strong> {{ p.cassoto }}</div>\r\n\r\n\r\n            <button id=\"buyButton\" class=\"btn text-light bg-dark btn-lg float-right\" (click)=\"addProduct(p)\">Add To Cart</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductList = (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    return ProductList;
}());
ProductList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "product-list",
        template: __webpack_require__("../../../../../ClientApp/app/shop/productList.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/shop/productList.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]) === "function" && _a || Object])
], ProductList);

var _a;
//# sourceMappingURL=productList.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"card card col-md-3 \">\r\n        <div class=\"position-fixed mr-3\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Shop = (function () {
    function Shop() {
    }
    return Shop;
}());
Shop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "the-shop",
        template: __webpack_require__("../../../../../ClientApp/app/shop/shop.component.html")
    })
], Shop);

//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
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

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reflect_metadata__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map