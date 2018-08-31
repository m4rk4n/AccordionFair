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
            this.data.ordersRequested = true;
            this.router.navigate(["login"]);
        }

        this.data.getAllOrders()
            .subscribe(success => {
                if (success) {
                    this.orders = this.data.ordersByUser;
                }
            });

        if (this.data.ordersByUser.length > 0) {
            this.ordersSet = true;
        }
  }
}
