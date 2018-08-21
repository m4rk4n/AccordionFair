import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";
import { Order } from "../shared/order";

@Component({
    selector: "admin",
    templateUrl: "admin.component.html"
})
export class Admin {

    constructor(private data: DataService, private router: Router) {}

    public ordersSet: boolean = false;
    public orders: Order[] = [];

    ngOnInit(): void{
        this.data.ordersRequested = true;
        if (this.data.loginRequired) {
            console.log("rerouted to login");
            this.router.navigate(["login"]);
        }

        this.data.getAllOrders()
            .subscribe(success => {
                if (success) {
                    this.orders = this.data.ordersByUser;
                    console.log("adminOrders set");
                }
            });

        if (this.data.ordersByUser.length > 0) {
            console.log("ordersSet flag set");
            this.ordersSet = true;
        }
    }
}