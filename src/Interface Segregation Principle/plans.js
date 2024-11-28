"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumPlan = exports.DataPlan = exports.BasicPlan = void 0;
var services_1 = require("./services");
var services_2 = require("./services");
var services_3 = require("./services");
var services_4 = require("./services");
var BasicPlan = /** @class */ (function () {
    function BasicPlan() {
        this.callingService = new services_1.BasicCallingService();
    }
    BasicPlan.prototype.makeCall = function (number) {
        this.callingService.makeCall(number);
    };
    BasicPlan.prototype.receiveCall = function (number) {
        this.callingService.receiveCall(number);
    };
    return BasicPlan;
}());
exports.BasicPlan = BasicPlan;
var DataPlan = /** @class */ (function () {
    function DataPlan() {
        this.callingService = new services_1.BasicCallingService();
        this.dataService = new services_2.DataService();
    }
    DataPlan.prototype.makeCall = function (number) {
        this.callingService.makeCall(number);
    };
    DataPlan.prototype.receiveCall = function (number) {
        this.callingService.receiveCall(number);
    };
    DataPlan.prototype.useData = function (megabytes) {
        this.dataService.useData(megabytes);
    };
    DataPlan.prototype.checkDataBalance = function () {
        return this.dataService.checkDataBalance();
    };
    return DataPlan;
}());
exports.DataPlan = DataPlan;
var PremiumPlan = /** @class */ (function () {
    function PremiumPlan() {
        this.callingService = new services_1.BasicCallingService();
        this.dataService = new services_2.DataService();
        this.internationalService = new services_3.InternationalService();
        this.entertainmentService = new services_4.EntertainmentService();
    }
    PremiumPlan.prototype.makeCall = function (number) {
        this.callingService.makeCall(number);
    };
    PremiumPlan.prototype.receiveCall = function (number) {
        this.callingService.receiveCall(number);
    };
    PremiumPlan.prototype.useData = function (megabytes) {
        this.dataService.useData(megabytes);
    };
    PremiumPlan.prototype.checkDataBalance = function () {
        return this.dataService.checkDataBalance();
    };
    PremiumPlan.prototype.makeInternationalCall = function (country, number) {
        this.internationalService.makeInternationalCall(country, number);
    };
    PremiumPlan.prototype.streamMedia = function (service) {
        this.entertainmentService.streamMedia(service);
    };
    PremiumPlan.prototype.downloadContent = function (contentId) {
        this.entertainmentService.downloadContent(contentId);
    };
    return PremiumPlan;
}());
exports.PremiumPlan = PremiumPlan;
