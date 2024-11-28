"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefService = void 0;
var ChefService = /** @class */ (function () {
    function ChefService() {
    }
    ChefService.prototype.prepareOrder = function (order) {
        return new Promise(function (resolve) {
            console.log("Chef: Starting preparation for table ".concat(order.tableNumber));
            order.status = 'preparing';
            setTimeout(function () {
                order.status = 'ready';
                console.log("Chef: Order ready for table ".concat(order.tableNumber));
                resolve(order);
            }, 2000);
        });
    };
    return ChefService;
}());
exports.ChefService = ChefService;
