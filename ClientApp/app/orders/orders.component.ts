import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {

    constructor(private data: DataService, private router: Router) { }

    public ordersSet: boolean = false;
    public orders: Order[] = [];

    ngOnInit() { 
        if (this.data.loginRequired) {
            console.log("rerouted to login from orders.component");
            this.data.ordersRequested = true;
            this.router.navigate(["login"]);
        }

        this.data.getAllOrders()
            .subscribe(success => {
                if (success) {
                    this.orders = this.data.ordersByUser;
                    console.log("ordersByUser set");
                }
            });

        if (this.data.ordersByUser.length > 0) {
            console.log("ordersSet flag set");
            this.ordersSet = true;
        }
  }
}
