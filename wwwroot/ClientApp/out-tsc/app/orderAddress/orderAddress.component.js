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
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var signalR = require("@aspnet/signalr");
var OrderAddress = /** @class */ (function () {
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
                //console.log(this.order);
                //console.log(this.orderQRInfo);
            }
        });
        var connection = new signalR.HubConnectionBuilder()
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
    OrderAddress = __decorate([
        core_1.Component({
            selector: "order-address",
            templateUrl: "orderAddress.component.html",
            styleUrls: [
                "orderAddress.component.css"
            ]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], OrderAddress);
    return OrderAddress;
}());
exports.OrderAddress = OrderAddress;
//# sourceMappingURL=orderAddress.component.js.map