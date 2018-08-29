import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs//add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public token: string = ""; 
    private tokenExpiration: Date;

    public ordersByUser: Order[] = [];

    public order: Order = new Order(); 
    public orderFromServer: Order;
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
                return true; 
            })
    }

    getOrderAddress(): Observable<boolean>{
       
        var url = "/api/OrderAddress/" + this.order.orderNumber;
        return this.http
                .get(url)
            .map((data: any) => {
                    this.orderFromServer = data;
                    this.orderAddress = data.bitcoinAddress; 
                this.order.orderAddress = data.bitcoinAddress;
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
                return true;
            });
    }

    getBtcPrice(): Observable<boolean> {
        return this.http
            // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .get("https://blockchain.info/ticker")
            .map((data: any) => {
                // this.btcPrice = data.bpi.USD.rate;
                this.btcPrice = data.USD.sell;
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

            this.order.items.push(item);
        }
    }
}