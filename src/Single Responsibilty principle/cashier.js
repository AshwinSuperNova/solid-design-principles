"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierService = void 0;
var CashierService = /** @class */ (function () {
    function CashierService() {
    }
    CashierService.prototype.processPayment = function (order, paymentMethod) {
        console.log("Cashier: Processing payment of $".concat(order.totalAmount));
        console.log("Cashier: Payment method - ".concat(paymentMethod));
        order.status = 'paid';
    };
    CashierService.prototype.generateReceipt = function (order) {
        console.log("Cashier: Generated receipt for table ".concat(order.tableNumber));
        console.log("Items: ".concat(order.items.map(function (item) { return item.name; }).join(', ')));
        console.log("Total: $".concat(order.totalAmount));
    };
    return CashierService;
}());
exports.CashierService = CashierService;
