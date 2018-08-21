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
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
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
            // handle the success : )
            // maybe a success component that offers to navigate to shop or to home page
            _this.router.navigate(['register-success']);
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: 'register.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map