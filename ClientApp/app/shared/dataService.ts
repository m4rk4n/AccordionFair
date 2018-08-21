import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs//add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public token: string = ""; //should be private
    private tokenExpiration: Date;

    public ordersByUser: Order[] = [];

    public order: Order = new Order(); // this order is created in ng and sent to server
    public orderFromServer: Order; // this one is retrieved from server on getOrderAddress
    public orderAddress: string = "";
    public ordersRequested: boolean = false;
    public btcPrice: number = 0;

    public products: Product[] = [];

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .map((data: any[]) => {
                this.products = data;
                return true;
            });
    }

    getAllOrders(): Observable<boolean> {
        console.log("in getAllOrders");
        return this.http.get("/api/orders", {
            headers: new HttpHeaders()
                .set("Authorization", "Bearer " + this.token)
        })
            .map((data: any[]) => {
                this.ordersByUser = data;
                console.log("mapped data from api/orders");
                console.log(this.ordersByUser);
                return true;
            });
    }

    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .map(response => {
                // this.order = new Order();  // maybe an old order will stay if new Order() is removed
                // need to get orderAddress from server
                return true; 
            })
    }

    getOrderAddress(): Observable<boolean>{
       // console.log("this is orderNumber " + this.order.orderNumber);
       
        var url = "/api/OrderAddress/" + this.order.orderNumber;
        return this.http
                .get(url)
            .map((data: any) => {
                    this.orderFromServer = data;
                    this.orderAddress = data.bitcoinAddress; // jednoo maket
                this.order.orderAddress = data.bitcoinAddress;

                // ugly but works, SETTING TOTALS HERE
                this.order.orderTotalInBitcoin = data.OrderTotalInBTC;
                this.order.orderTotalInUSD = data.OrderTotalInUSD;
                    return true;
            });
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(creds): Observable<boolean> {
        return this.http
            .post("/account/createtoken", creds)
            .map((data: any) => {
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            });
    }

    register(userInfo): Observable<boolean> {
        return this.http
            .post("/account/register", userInfo)
            .map((data: any) => {
                // maybe some success or error message?
                return true;
            });
    }

    getBtcPrice(): Observable<boolean> {
        return this.http
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .map((data: any) => {
                this.btcPrice = data.bpi.USD.rate;
                //this.btcPrice = this.btcPrice.substring(0, this.btcPrice.length - 2);
                this.order.btcPrice = this.btcPrice; 
                return true;
            });
    }

    public AddToOrder(newProduct: Product) {

        let item: OrderItem = this.order.items.find(i => i.productId == newProduct.id);

        if (item) { 
            item.quantity++;
        } else {
            item = new OrderItem();
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
    }
}