"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            var sub = _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
            return sub;
            // racunat subtotal na licu mjesta jbg lol izbrisat ovo
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
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
//# sourceMappingURL=order.js.map