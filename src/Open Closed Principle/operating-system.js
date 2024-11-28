"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatingSystem = void 0;
var OperatingSystem = /** @class */ (function () {
    function OperatingSystem(appStore) {
        this.appStore = appStore;
    }
    OperatingSystem.prototype.launchApp = function (appId) {
        var app = this.appStore.getApp(appId);
        if (app) {
            app.start();
        }
        else {
            console.log('App not found');
        }
    };
    OperatingSystem.prototype.closeApp = function (appId) {
        var app = this.appStore.getApp(appId);
        if (app) {
            app.stop();
        }
    };
    OperatingSystem.prototype.listInstalledApps = function () {
        console.log('\nInstalled Apps:');
        this.appStore.getInstalledApps().forEach(function (app) {
            console.log("- ".concat(app.name, " (").concat(app.appId, ")"));
        });
    };
    return OperatingSystem;
}());
exports.OperatingSystem = OperatingSystem;
