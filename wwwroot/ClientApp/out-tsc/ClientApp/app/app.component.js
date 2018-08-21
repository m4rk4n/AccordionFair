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
var utils_1 = require("ngx-bootstrap/utils");
var dataService_1 = require("./shared/dataService");
var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        var _this = this;
        this.data = data;
        this.btcPrice = "";
        this.title = 'Product List';
        utils_1.setTheme("bs4");
        this.data.getBtcPrice()
            .subscribe(function (success) {
            if (success) {
                _this.btcPrice = _this.data.btcPrice.toString();
                _this.btcPrice = _this.btcPrice.substring(0, _this.btcPrice.length - 2);
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'entry',
            templateUrl: "./app.component.html",
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map