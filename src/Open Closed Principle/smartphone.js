"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_store_1 = require("./app-store");
var operating_system_1 = require("./operating-system");
var apps_1 = require("./apps");
var apps_2 = require("./apps");
var apps_3 = require("./apps");
var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.appStore = new app_store_1.AppStore();
        this.os = new operating_system_1.OperatingSystem(this.appStore);
    }
    Smartphone.prototype.installApp = function (app) {
        this.appStore.installApp(app);
    };
    Smartphone.prototype.uninstallApp = function (appId) {
        this.appStore.uninstallApp(appId);
    };
    Smartphone.prototype.openApp = function (appId) {
        this.os.launchApp(appId);
    };
    Smartphone.prototype.closeApp = function (appId) {
        this.os.closeApp(appId);
    };
    Smartphone.prototype.showInstalledApps = function () {
        this.os.listInstalledApps();
    };
    return Smartphone;
}());
var smartphone = new Smartphone();
smartphone.installApp(new apps_1.MessagingApp('msg1', 'WhatsChat'));
smartphone.installApp(new apps_2.GameApp('game1', 'PuzzleMania'));
smartphone.installApp(new apps_3.MusicApp('music1', 'MusicStream'));
smartphone.showInstalledApps();
console.log('\nUsing Apps:');
smartphone.openApp('msg1');
smartphone.openApp('game1');
smartphone.closeApp('game1');
smartphone.openApp('music1');
smartphone.uninstallApp('game1');
smartphone.showInstalledApps();
