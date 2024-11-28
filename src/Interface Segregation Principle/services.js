"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntertainmentService = exports.InternationalService = exports.DataService = exports.BasicCallingService = void 0;
var BasicCallingService = /** @class */ (function () {
    function BasicCallingService() {
    }
    BasicCallingService.prototype.makeCall = function (number) {
        console.log("Making call to ".concat(number));
    };
    BasicCallingService.prototype.receiveCall = function (number) {
        console.log("Receiving call from ".concat(number));
    };
    return BasicCallingService;
}());
exports.BasicCallingService = BasicCallingService;
var DataService = /** @class */ (function () {
    function DataService() {
        this.dataBalance = 1000; // 1GB
    }
    DataService.prototype.useData = function (megabytes) {
        this.dataBalance -= megabytes;
        console.log("Used ".concat(megabytes, "MB of data"));
    };
    DataService.prototype.checkDataBalance = function () {
        console.log("Remaining data: ".concat(this.dataBalance, "MB"));
        return this.dataBalance;
    };
    return DataService;
}());
exports.DataService = DataService;
var InternationalService = /** @class */ (function () {
    function InternationalService() {
    }
    InternationalService.prototype.makeInternationalCall = function (country, number) {
        console.log("Making international call to ".concat(country, ": ").concat(number));
    };
    return InternationalService;
}());
exports.InternationalService = InternationalService;
var EntertainmentService = /** @class */ (function () {
    function EntertainmentService() {
    }
    EntertainmentService.prototype.streamMedia = function (service) {
        console.log("Streaming content from ".concat(service));
    };
    EntertainmentService.prototype.downloadContent = function (contentId) {
        console.log("Downloading content ID: ".concat(contentId));
    };
    return EntertainmentService;
}());
exports.EntertainmentService = EntertainmentService;
