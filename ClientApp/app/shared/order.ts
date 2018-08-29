import * as _ from "lodash";

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();
    orderAddress: string;
    btcPrice: number;
    orderTotalInUSD: number;
    orderTotalInBitcoin: number;

    get subtotal(): number {
        var sub = _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
       return sub;
    };
}

export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategory: string;
    productSize: string;
    productTitle: string;
    productRegisters: string;
    productWeight: string;
    productCassoto: boolean;
    productArtId: string;
}