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
        // racunat subtotal na licu mjesta jbg lol izbrisat ovo
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

       //public int Id { get; set; }
       // [Required]
       // public int Quantity { get; set; }
       // [Required]
       // public decimal UnitPrice { get; set; }

       // [Required]
       // public int ProductId { get; set; }

       // public string ProductCategory { get; set; }
       // public string ProductSize { get; set; }
       // public string ProductTitle { get; set; }
       // public string ProductRegisters { get; set; }
       // public string ProductWeight { get; set; }
       // public bool ProductCassoto { get; set; }
       // public string ProductArtId { get; set; }
