import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService"
import { Product } from "../shared/product";
import { Order } from "../shared/order";
import {  HubConnection } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";
import { QRCodeModule } from 'angularx-qrcode';
import { forEach } from "@angular/router/src/utils/collection";

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

       // console.log("ngOnInit for  OrderAddress component entered!");

        this.data.getBtcPrice()
            .subscribe(success => {
                if (success)
                    this.btcPrice = this.data.btcPrice; // string to number conversion magic
            });

        this.data.getOrderAddress()
            .subscribe(success => {
                if (success) {
                    this.order = this.data.orderFromServer;
                    this.orderAddress = this.data.orderAddress;

                    // stavio ovdje jer ce se samo odavde samo jednom zavrtit jer ako stavim van subscribe u ngInit tad se izvrsi malo prije nego subscribe zavrsi
                    // a ruzno mi je da se izvrsava u connection funkciji svaki put kad transakcija dodje
                    console.log(this.order);
                }
                else {
                    console.log("ngOnInit orderAddress, getOrderAddress is not success");
                }
            });
        console.log("this order after getOrderAddress" + this.order + " " + Date.now().toString());

        //this order after getOrderAddressundefined 1532523876659 prije od
        //                                          1532523876672 

      

        // this._hubConnection = new HubConnection('http://localhost:1874/notify');
        // user has to be authorized for this to work, probably?
        let connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:8888/notifyHub", { accessTokenFactory: () => this.data.token }) //JWT Bearer
                                    //.withUrl("/notifyHub") // obicni sa kuki autentikacijom
                                    //.withUrl("http://localhost:8888/notifyHub")
                                    //.withUrl("http://localhost:8888/notifyHub", {
                                    //                      skipNegotiation: true,
                                    //                      transport: signalR.HttpTransportType.WebSockets         bypassing negotiation, kao bez autentikacije
                                    //})
            .build();

            connection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

        connection.on("ReceiveNotification", (txId, txAmount, totalAmountOfBitcoinPayed) => {
            this.payments.push(txAmount);
            //const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            // logiku za formiranje loga
            const txLog = txAmount + " has been received from transaction with id: " + txId;

            // const msg = poruka;
           // var totalPaymentsInUSD = totalAmountOfBitcoinPayed * this.order.btcPrice;
           // var totalPriceInBTC = this.orderTotal / this.btcPrice;

            console.log(
                "Out of flow control \n" +
                "orderTotalInBTC: " + this.order.orderTotalInBitcoin + "\n" +
                "totalAmountOfBitcoinPAyed: " + totalAmountOfBitcoinPayed + "\n" +
                "paymentExceeded: " + this.paymentExceeded + "\n" +
                "paymentCorrect: " + this.paymentCorrect + "\n" +
                "paymentNotSatisfied: " + this.paymentNotSatisfied 
                
            );

            if (this.order.orderTotalInBitcoin > totalAmountOfBitcoinPayed) {
                this.paymentExceeded = false;
                this.paymentCorrect = false;
                this.paymentNotSatisfied = true;
                this.paymentDiffBTC = this.order.orderTotalInBitcoin - totalAmountOfBitcoinPayed;
                console.log(
                    "In first if " +
                    "orderTotalInBTC: " + this.order.orderTotalInBitcoin +
                    "totalAmountOfBitcoinPAyed: " + totalAmountOfBitcoinPayed +
                    "paymentExceeded: " + this.paymentExceeded +
                    "paymentCorrect: " + this.paymentCorrect +
                    "paymentNotSatisfied: " + this.paymentNotSatisfied
                );
            } else if (this.order.orderTotalInBitcoin == totalAmountOfBitcoinPayed) {
                this.paymentExceeded = false;
                this.paymentCorrect = true;
                this.paymentNotSatisfied = false;
                console.log(
                    "in second if " + 
                    "orderTotalInBTC: " + this.order.orderTotalInBitcoin +
                    "totalAmountOfBitcoinPAyed: " + totalAmountOfBitcoinPayed +
                    "paymentExceeded: " + this.paymentExceeded +
                    "paymentCorrect: " + this.paymentCorrect +
                    "paymentNotSatisfied: " + this.paymentNotSatisfied
                );
            } else if (this.order.orderTotalInBitcoin <= totalAmountOfBitcoinPayed) {
               // this.paymentCorrect = true;
                this.paymentExceeded = true;
                this.paymentCorrect = false;
                this.paymentNotSatisfied = false;
                this.paymentDiffBTC = totalAmountOfBitcoinPayed - this.order.orderTotalInBitcoin;
                console.log(
                    "in third if " +
                    "orderTotalInBTC: " + this.order.orderTotalInBitcoin +
                    "totalAmountOfBitcoinPAyed: " + totalAmountOfBitcoinPayed +
                    "paymentExceeded: " + this.paymentExceeded +
                    "paymentCorrect: " + this.paymentCorrect +
                    "paymentNotSatisfied: " + this.paymentNotSatisfied
                );
            }

            
            

            const li = document.createElement("li");
            li.textContent = txLog;
            document.getElementById("messagesList").appendChild(li);
            // li.innerHTML += '<i class="fa fa-btc"></i>';

            console.log("in notify...js.connection.on() TRACING, DELETE ME!!!");

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