import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService"
import { Product } from "../shared/product";
import { Order } from "../shared/order";
import {  HubConnection } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";
import { QRCodeModule } from 'angularx-qrcode';
import { forEach } from "@angular/router/src/utils/collection";
import { DecimalPipe } from '@angular/common';

@Component({
    selector: "order-address",
    templateUrl: "orderAddress.component.html",
    styleUrls: [
        "orderAddress.component.css"
    ]
})

export class OrderAddress implements OnInit {

    constructor(private data: DataService) { } 

    public order: Order;
    public orderAddress: string = "";
    public orderQRInfo = "";


    public msgs: string[] = [];
    public payments: number[] = [];
    public sumOfTransactions: number = 0;
    public btcPrice: number;
    public paymentDiffUSD: number = 0;
    public paymentDiffBTC: number = 0;
    public paymentExceeded: boolean = false;
    public paymentCorrect: boolean = false;
    public paymentNotSatisfied: boolean = true;

    ngOnInit(): void {


        this.data.getBtcPrice()
            .subscribe(success => {
                if (success)
                    this.btcPrice = this.data.btcPrice; 
            });

        this.data.getOrderAddress()
            .subscribe(success => {
                if (success) {
                    this.order = this.data.orderFromServer;
                    this.orderAddress = this.data.orderAddress;

                    this.orderQRInfo = "bitcoin:" + this.orderAddress + "?" + "amount=" + this.order.orderTotalInBitcoin;
                    //console.log(this.order);
                    //console.log(this.orderQRInfo);
                }
            });


      


        let connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:8888/notifyHub", { accessTokenFactory: () => this.data.token }) //JWT Bearer
            .build();

            connection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

        connection.on("ReceiveNotification", (txId, txAmount, totalAmountOfBitcoinPayed) => {
            this.payments.push(txAmount);
            const txLog = txAmount + " has been received from transaction with id: " + txId;
            if (this.order.orderTotalInBitcoin > totalAmountOfBitcoinPayed) {
                this.paymentExceeded = false;
                this.paymentCorrect = false;
                this.paymentNotSatisfied = true;
                this.paymentDiffBTC = this.order.orderTotalInBitcoin - totalAmountOfBitcoinPayed;
            } else if (this.order.orderTotalInBitcoin == totalAmountOfBitcoinPayed) {
                this.paymentExceeded = false;
                this.paymentCorrect = true;
                this.paymentNotSatisfied = false;
            } else if (this.order.orderTotalInBitcoin <= totalAmountOfBitcoinPayed) {
                this.paymentExceeded = true;
                this.paymentCorrect = false;
                this.paymentNotSatisfied = false;
                this.paymentDiffBTC = totalAmountOfBitcoinPayed - this.order.orderTotalInBitcoin;
            }

            
            

            const li = document.createElement("li");
            li.textContent = txLog;
            document.getElementById("messagesList").appendChild(li);
            let forEachBuffer = 0;
            if (this.payments.length > 0) {
                this.payments.forEach(function (amount) {
                     forEachBuffer += amount;
                    });
            }
            this.sumOfTransactions = forEachBuffer;
        });
    }
}