"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaiterService = void 0;
var WaiterService = /** @class */ (function () {
    function WaiterService() {
        this.activeOrders = [];
    }
    WaiterService.prototype.takeOrder = function (tableNumber, items) {
        var order = {
            tableNumber: tableNumber,
            items: items,
            totalAmount: this.calculateTotal(items),
            status: 'pending'
        };
        this.activeOrders.push(order);
        console.log("Waiter: Took order for table ".concat(tableNumber));
        return order;
    };
    WaiterService.prototype.serveOrder = function (order) {
        order.status = 'served';
        console.log("Waiter: Serving order to table ".concat(order.tableNumber));
    };
    WaiterService.prototype.calculateTotal = function (items) {
        return items.reduce(function (sum, item) { return sum + item.price; }, 0);
    };
    return WaiterService;
}());
exports.WaiterService = WaiterService;
