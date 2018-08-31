import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { QRCodeModule } from 'angularx-qrcode';
import { DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";
import { Login } from "./login/login.component";
import { OrderAddress } from "./orderAddress/orderAddress.component"
import { DataService } from "./shared/dataService";
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register/register-success/register-success.component';



let routes = [
    { path: "", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "about", component: AboutComponent },
    { path: "register", component: RegisterComponent },
    { path: "register-success", component: RegisterSuccessComponent},
    { path: "shop", component: Shop },
    { path: "checkout", component: Checkout },
    { path: "login", component: Login },
    { path: "order-address", component: OrderAddress },
    { path: "orders", component: OrdersComponent }
];

@NgModule({
    declarations: [
      HomeComponent,
      ContactComponent,
      AboutComponent,
      RegisterComponent,
      AppComponent,
      ProductList,
      Cart,
      Shop,
      Checkout,
      Login, 
      OrderAddress,
      OrdersComponent,
      RegisterSuccessComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      QRCodeModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false 
      }),
      AngularFontAwesomeModule,
      CarouselModule.forRoot()
  ],
    providers: [ 
        DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
