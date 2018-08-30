"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var carousel_1 = require("ngx-bootstrap/carousel");
var angular_font_awesome_1 = require("angular-font-awesome");
var angularx_qrcode_1 = require("angularx-qrcode");
var app_component_1 = require("./app.component");
var productList_component_1 = require("./shop/productList.component");
var cart_component_1 = require("./shop/cart.component");
var shop_component_1 = require("./shop/shop.component");
var checkout_component_1 = require("./checkout/checkout.component");
var login_component_1 = require("./login/login.component");
var orderAddress_component_1 = require("./orderAddress/orderAddress.component");
var dataService_1 = require("./shared/dataService");
var admin_component_1 = require("./admin/admin.component");
var orders_component_1 = require("./orders/orders.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var register_component_1 = require("./register/register.component");
var register_success_component_1 = require("./register/register-success/register-success.component");
//let routes = [
//    { path: "", component: Shop },
//    { path: "checkout", component: Checkout },
//    { path: "login", component: Login },
//    { path: "order-address", component: OrderAddress },
//    { path: "admin", component: Admin },
//    { path: "orders", component: OrdersComponent }
//];
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "register-success", component: register_success_component_1.RegisterSuccessComponent },
    { path: "shop", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login },
    { path: "order-address", component: orderAddress_component_1.OrderAddress },
    { path: "admin", component: admin_component_1.Admin },
    { path: "orders", component: orders_component_1.OrdersComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                register_component_1.RegisterComponent,
                app_component_1.AppComponent,
                productList_component_1.ProductList,
                cart_component_1.Cart,
                shop_component_1.Shop,
                checkout_component_1.Checkout,
                login_component_1.Login,
                orderAddress_component_1.OrderAddress,
                admin_component_1.Admin,
                orders_component_1.OrdersComponent,
                register_success_component_1.RegisterSuccessComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                angularx_qrcode_1.QRCodeModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false //for Debugging of the Routes
                }),
                angular_font_awesome_1.AngularFontAwesomeModule,
                carousel_1.CarouselModule.forRoot()
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map