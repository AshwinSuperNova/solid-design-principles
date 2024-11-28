"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePlanManager = void 0;
var plans_1 = require("./plans");
var MobilePlanManager = /** @class */ (function () {
    function MobilePlanManager() {
    }
    MobilePlanManager.prototype.demonstratePlanFeatures = function (planName, plan) {
        console.log("\nDemonstrating ".concat(planName, " features:"));
        if (this.hasCallingService(plan)) {
            plan.makeCall('123-456-7890');
            plan.receiveCall('098-765-4321');
        }
        if (this.hasDataService(plan)) {
            plan.useData(100);
            plan.checkDataBalance();
        }
        if (this.hasInternationalService(plan)) {
            plan.makeInternationalCall('UK', '44-123-456789');
        }
        if (this.hasEntertainmentService(plan)) {
            plan.streamMedia('Netflix');
            plan.downloadContent('MOVIE-001');
        }
    };
    MobilePlanManager.prototype.hasCallingService = function (plan) {
        return 'makeCall' in plan && 'receiveCall' in plan;
    };
    MobilePlanManager.prototype.hasDataService = function (plan) {
        return 'useData' in plan && 'checkDataBalance' in plan;
    };
    MobilePlanManager.prototype.hasInternationalService = function (plan) {
        return 'makeInternationalCall' in plan;
    };
    MobilePlanManager.prototype.hasEntertainmentService = function (plan) {
        return 'streamMedia' in plan && 'downloadContent' in plan;
    };
    return MobilePlanManager;
}());
exports.MobilePlanManager = MobilePlanManager;
var planManager = new MobilePlanManager();
var basicPlan = new plans_1.BasicPlan();
var dataPlan = new plans_1.DataPlan();
var premiumPlan = new plans_1.PremiumPlan();
planManager.demonstratePlanFeatures('Basic Plan', basicPlan);
planManager.demonstratePlanFeatures('Data Plan', dataPlan);
planManager.demonstratePlanFeatures('Premium Plan', premiumPlan);
