"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs//add/operator/map");
var order_1 = require("./order");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = ""; //should be private
        this.ordersByUser = [];
        this.order = new order_1.Order(); // this order is created in ng and sent to server
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
        console.log("in getAllOrders");
        return this.http.get("/api/orders", {
            headers: new http_1.HttpHeaders()
                .set("Authorization", "Bearer " + this.token)
        })
            .map(function (data) {
            _this.ordersByUser = data;
            console.log("mapped data from api/orders");
            console.log(_this.ordersByUser);
            return true;
        });
    };
    DataService.prototype.checkout = function () {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .map(function (response) {
            // this.order = new Order();  // maybe an old order will stay if new Order() is removed
            // need to get orderAddress from server
            return true;
        });
    };
    DataService.prototype.getOrderAddress = function () {
        // console.log("this is orderNumber " + this.order.orderNumber);
        var _this = this;
        var url = "/api/OrderAddress/" + this.order.orderNumber;
        return this.http
            .get(url)
            .map(function (data) {
            _this.orderFromServer = data;
            _this.orderAddress = data.bitcoinAddress; // jednoo maket
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
            // maybe some success or error message?
            return true;
        });
    };
    DataService.prototype.getBtcPrice = function () {
        var _this = this;
        return this.http
            // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .get("https://blockchain.info/ticker")
            .map(function (data) {
            // this.btcPrice = data.bpi.USD.rate;
            _this.btcPrice = data.USD.sell;
            //  this.btcPrice = Number.parseFloat(Number.parseFloat(this.btcPrice.toString()).toPrecision(8));
            // this.btcPrice = +this.btcPrice.toFixed(8); // with + operator, a conversion from string to number happens
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
            item = new order_1.OrderItem();
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
            //item = new OrderItem();
            //item.productId = newProduct.id;
            //item.productArtist = newProduct.artist;
            //item.productArtId = newProduct.artId;
            //item.productCategory = newProduct.category;
            //item.productSize = newProduct.size;
            //item.productTitle = newProduct.title;
            //item.unitPrice = newProduct.price;
            //item.quantity = 1;
            //id: number;
            //category: string;
            //size: string;
            //price: number;
            //title: string;
            //keys: number;
            //reeds: string;
            //registers: string;
            //basses: number;
            //weight: string;
            //cassoto: boolean;
            //artId: string;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map