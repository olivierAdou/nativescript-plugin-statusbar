"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusbar_common_1 = require("./statusbar.common");
var application_1 = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var color = require("color");
var View;
var window;
var decorView;
var enableFullScreen = (function () {
    function enableFullScreen() {
    }
    enableFullScreen.prototype.leanBack = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var View_1 = android.view.View;
            var window_1 = application_1.android.startActivity.getWindow();
            var decorView_1 = window_1.getDecorView();
            decorView_1.setSystemUiVisibility(View_1.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View_1.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View_1.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    enableFullScreen.prototype.immersive = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var View_2 = android.view.View;
            var window_2 = application_1.android.startActivity.getWindow();
            var decorView_2 = window_2.getDecorView();
            decorView_2.setSystemUiVisibility(View_2.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View_2.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View_2.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View_2.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View_2.SYSTEM_UI_FLAG_FULLSCREEN
                | View_2.SYSTEM_UI_FLAG_IMMERSIVE);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    enableFullScreen.prototype.stickyImmersive = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var View_3 = android.view.View;
            var window_3 = application_1.android.startActivity.getWindow();
            var decorView_3 = window_3.getDecorView();
            decorView_3.setSystemUiVisibility(View_3.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View_3.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View_3.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View_3.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View_3.SYSTEM_UI_FLAG_FULLSCREEN
                | View_3.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    return enableFullScreen;
}());
exports.enableFullScreen = enableFullScreen;
var Statusbar = (function (_super) {
    __extends(Statusbar, _super);
    function Statusbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enableFullScreen = new enableFullScreen;
        return _this;
    }
    Statusbar.prototype.verifiyDevice = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.setNavigationBarColor = function (codecolor) {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var window_4 = application_1.android.startActivity.getWindow();
            window_4.setNavigationBarColor(new color.Color(codecolor).android);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.setStatusBarColor = function (codecolor) {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var window_5 = application_1.android.startActivity.getWindow();
            window_5.setStatusBarColor(new color.Color(codecolor).android);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.setNavigationBarColorTransparent = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var window_6 = application_1.android.startActivity.getWindow();
            window_6.setNavigationBarColor(0x000000);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.setStatusBarColorTransparent = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var window_7 = application_1.android.startActivity.getWindow();
            window_7.setStatusBarColor(0x000000);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.hideStaturbar = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var View_4 = android.view.View;
            var window_8 = application_1.android.startActivity.getWindow();
            var decorView_4 = window_8.getDecorView();
            decorView_4.setSystemUiVisibility(View_4.SYSTEM_UI_FLAG_FULLSCREEN);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    Statusbar.prototype.hideNavigationBar = function () {
        if (application_1.android && platform_1.device.sdkVersion >= '21') {
            var View_5 = android.view.View;
            var window_9 = application_1.android.startActivity.getWindow();
            var decorView_5 = window_9.getDecorView();
            decorView_5.setSystemUiVisibility(View_5.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
        }
        else {
            throw new Error('Device not compatible, please use min SDKversion 21');
        }
    };
    return Statusbar;
}(statusbar_common_1.Common));
exports.Statusbar = Statusbar;
//# sourceMappingURL=statusbar.android.js.map