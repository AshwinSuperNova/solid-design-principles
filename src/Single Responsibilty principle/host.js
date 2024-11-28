"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostService = void 0;
var HostService = /** @class */ (function () {
    function HostService() {
        this.tables = [
            { number: 1, seats: 2, isOccupied: false },
            { number: 2, seats: 4, isOccupied: false },
            { number: 3, seats: 6, isOccupied: false }
        ];
    }
    HostService.prototype.seatGuests = function (numberOfGuests) {
        var availableTable = this.findSuitableTable(numberOfGuests);
        if (!availableTable) {
            throw new Error('No suitable table available');
        }
        availableTable.isOccupied = true;
        console.log("Host: Seated ".concat(numberOfGuests, " guests at table ").concat(availableTable.number));
        return availableTable.number;
    };
    HostService.prototype.findSuitableTable = function (numberOfGuests) {
        return this.tables.find(function (table) {
            return !table.isOccupied && table.seats >= numberOfGuests;
        });
    };
    HostService.prototype.releaseTable = function (tableNumber) {
        var table = this.tables.find(function (t) { return t.number === tableNumber; });
        if (table) {
            table.isOccupied = false;
            console.log("Host: Table ".concat(tableNumber, " is now available"));
        }
    };
    return HostService;
}());
exports.HostService = HostService;
