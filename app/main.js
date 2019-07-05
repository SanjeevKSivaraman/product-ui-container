(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" style=\"background-color: green;\">\n    <mat-toolbar-row>\n        <span>BCG App Container </span>\n    </mat-toolbar-row>\n</mat-toolbar>\n<div id=\"product-container\">\n    <app-login *ngIf=\"showLogin\"></app-login>\n    <app-dashboard *ngIf=\"showDashboard\"></app-dashboard>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, http) {
        this.route = route;
        this.http = http;
        this.email = '';
        this.isAuthenticated = 'false';
        this.showLogin = false;
        this.showDashboard = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.isAuthenticated = params['sso'];
            console.log(_this.isAuthenticated);
            if (!_this.isAuthenticated) {
                _this.openLogin();
            }
            else {
                _this.openDashboard();
            }
        });
    };
    AppComponent.prototype.checkAuth = function () {
        var _this = this;
        // Fire initial check if user is logged in
        this.http.get('authorizerDummyUrl').subscribe(function (result) {
            _this.openDashboard();
        }, function (error) {
            // Won't need as Function would redirect with isAuhtenticated=false in queryParams for this Container
            _this.openLogin();
            // this.openDashboard();
        });
    };
    AppComponent.prototype.openDashboard = function () {
        this.showDashboard = true;
        this.showLogin = false;
    };
    AppComponent.prototype.openLogin = function () {
        this.showLogin = true;
        this.showDashboard = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 300px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAB4CAMAAADxEXZuAAAAaVBMVEX///8Xe1cAc0sPeVR7qJSrx7vT4doyhGQAb0T1+vgAdU7a5uE6hGQAcUgAYCvp8O0Aaz7H2dEAZzfA1Mu4z8VypI6QtKSDrpueva/h6+ekwrV0oIpCi21nm4QpfFldmH9PkHQAWyFIhWW+JHAbAAAK/ElEQVR4nO1d7ZKqMBKVNCAJZgBFQAaR9f0fcmF0ZkTTSYeEqbu1nl+3bk214STp9Fc6m80bb7zxxhv/b+BZGhdl1FRVXVVNVBZxesq4J9GnSXY7yq4m2YdRtifRa+NURNVxCJI8SeQNyfhv6M51VKZun8Djsq0vW3GXzSbZeZ4Ew7GKisxaXNFGtigPsf3vfCFtP4eeSSEgmANAMDnRUy4lJyvrcyckexEdgBj/ezt8NrGdxFCCLYKg73ddfbD8CN4MPbySMv+GoD8XdmK/UFz6wCQa+mtlM6Mhw8VpAMDy/bYhb+GsuHxIzch/IfKkstpWPKuTXJAGLT+6A5mchczcfilJzuWJwks00MZ+QyKPBZUbXoSJpIsWedem6zMzgsmhMc0Cb4fEgpcvsSKkbaryEyx4mSBkR9tUjsyMvySGUvsLUQeWvASTXujP5mVz+gwWDB/YEP0FM9OmuuCTkO5o6uVVqkgM4+eVtKf8PuLOrAQ8MDPtKeREzJqlg5+Qa5dNvE2Wixb75k+YGSe4VX1EcUmWLZj78GucmawRDpyPI76aNqsfZsZTvHqV3fZOwqHDN+nporNeCNgbTyhPzIy2Qv0kmYeOg5e4Zo8XKPUZEsVErsTMOAvzH0sHBzUwgZ3RQZd7N84DMZgPbn/MBPLxLIm3lnbGM6DHBs8b1zFDcDAS45MZ6H9PqGLruNwD/MyuwHHFBCIkmNgemQnEj13jToz8xAZfM1dioKe4ND6ZCfL2Toyrggxgi8UMqtx5mCYTcgVmAvY1GXHgSkwgMEOscVRfk+yBQoxnZmQ4isx27sQMyF4qe9etNLpNNGfbLzOQ8A0/U0QKmef7EXmesFciP5DBpyRigE1hznwKeipMqsToF+iYAZagUEUUf8CqUUOaBi5YIs5VGWcj0iKqu2eZybPVeAc36i8AIZPu2JTFiDKqLzASPzvLKKYMzgzsYo4iK6qhx0YIQ6snBlhwPb5Ee0/RuYOfM0d0yF7qDLIF7C7PgSle1MP218cimTI6ZvRbkZdnlBrtcge5rUv1nGVR2N8CFujgDdpXBsdIfRwXzeV7ywpkOXpiZnJ1lxyeidAF8HlcJdNoMDus0CoZxmpNiDQr724/uMWBzcxsNtHelheR1yYL63TeA+zUf5VddEomH2K9XcuLYHTk9vr44yMWM2NrWYC4UE7L+IrZYZpVCqKnaI8mkBfCn92xnBn9HD5D9Ga//yYWUQQprn0BjrQ9kp4pbsEdy5nZlBZGFxuoRwKGC8oMgDKgqIJNHsuBmdNAXjRssJgsJWJ0L0G+JKtphgMzm5DKjM32RtBhCxSkK+kIXJhpiNuJuRMTYT8ltsSUozVcmCmJxBydR8kxyxL6dbbSxo2ZA4kYocnTUYH+EqPbJ7ZYfc1A777cOealJqGzbBQuzFQUPcNcj+sRKeKNiZ27bBRrn03Sx6y26gQNBGtp3wlO9ox5zcDWR/kgEm+XxBjUMrjYwIQlk/vQkCe18yqczUctHPwmggksjj6WDKJ/0Si6HyxnpjZnZ+kBNC3UmxawKLonLGYG0YrzWSXUTZmBeNls3SWzlBleURIEQEp5mVCpd22+cmn4MmYKmpvdexm82jMQ7s6YHggzRYYjbXtalYbwYqGe1G52blkSbg0k36T5XplTS8z8DF7tgwCQ12MWUzGr0EZylNrieir2PojZqKtlGN0eGLZUzCo+/WZvZyBm1g3gah+EVs8woc3JNyrko3pdkRk/xjsSU5XUuEza00c8i5uuyIwfNVMoty9QQ3lozEuF5NGXWZMZL25NqbQoyT4TGiZVIWn/hBmgJ0p1qJQJP3GmCber5ZGPObEVmdn6YIar832kGsTp86wSqewxC7geM+RCFS0ydbEO0xTeP6D4sBoyezRN/3VmUnVshsYMt6xdm2U5/nVmEJeexgzJ7X2U+r/EDHLokpjRF9yopP4NM340MOKjUTRwZmPKfOGP9EwgPDDDkfolSnqPElub449ObcIVIjPUdt4U6jRaeqk2YqDErCB2TRvYQ8r5iOWzA6PrMdh/2V95B5JYZaXDFZv3xEQ7ttp0oHiUhBYIRojOmZgYdZRnLo4CJwsX+weUKIQpxhNIwuV098gVXqFjSEtwbBvqMC9OUMeBt6UhLlgc2ouRm9w52/SJ/gQwLTO0ApYnzC0wJEJO8PF5fDFUSwv8JiQNKVqDZtDvp+A/H1qoI6ihMQ5MrIXYHAzX09CrkEREGk/ZKavClYtRznSXEzPjpGp3FBjUpGn8WiPWJRMXb1VTCrPyBDdmNvFOt2rExSkVl2ovfLtkb5WLEbqZjeTIzKbV301xKhKptWEnc/8CFOpw2NNx58rM5qJdNMSgpHr8hjsfy/equuz66YKPMzOFdmJdKouOBvN8eWURkpWfGxnOzGy09jB+U9+I2Oi3LNU0sXIxwm6+O92Z0V9ZkUvLpAmJItqN9Feol4x4Gqk7M+q0xy81C/dTRDDvl+WHEcn7J+/dnZlI79QurH8vSE4roVnKC1K1oQHi6e9WZ2ZZdf1Jb0L+wL4OmyOK/aWEYPXdNF1VsTY8+IWYQcP7R6DDRcIuwfP8ra2Bv6gZLEfPP8mpRaFp+aRCibRqe92X7swQPoLZFahmpP4J39S8TLYOMZKLUKw9Z2ZKylewwYLqlLqV7tQI+tl9wDJQ4lWVuzLDtd7BLzVX8uFddJaNVIB0JXlCiVVGqD7YlRlqfQr5VnKL9pxwll2holU9EVyjEOQEKYiBcIyMKmZBgxkQhHwo17TgSxR60I0Zq+5EYn80aISs2S/txLk3NHDlpcAVojJg7cIMP1h2iJSy0nRvSCNtJ05D7xm5jfBB88Mlx9ei2rdzYKZY0GRR9mGknFxeVIO2KywMtT6FBElXqR2RU/Sp6Iv08LXKpWzfmcfcnkc7fgbdWdk9x6BgRIRVjDzI3g7VszLj5fmqX25CXVps383pp6XT0l5cUzP5qeNSNHVcOkTVa8clBb7aghrV/a2ZUx0Vp+mCRHxozn2iaz41gSEtOlbMa2shHrp0Ef5cDtNgsTu4c8AoeX/rLqbqAPYE1KtbgxnnpnEvYPfsYencmPIZAo1+rcCMtLPuCRDXb+3ReGYdAI0e+WdGhnzwS81j8MvYk85OssCdFu/MTC3f7CvktBL7x/NGn4SyA+jyYb6Zuc1vRg+wGCF28wVfO7aq/gVo+234Zkbc0mNZ6N6S9QZ2fdYElXMb3BuEZiv5Z+anuQevXDti3yAV6bZ24RMKcwjDZXKvzMBjf4zSw+kN6mbk8SLzew5jMM0nMwAzczJ2PqLQwEvm2tQfGNqzegVmRP/UvS2r3Za9HFBjg1dOK5L15sSvP2bYq9HEy375sjGEXOJuuY5PcMr9MwOJ0v/IwoUPq4A0doFqkkVbCkROqhTww4zmqaJ4WLDuQXSE4pgs7O0PcBEQc6Y+mBFyaDW/Vp41gUalvKQzPpd1QxEGdqqMsaNT52QbEJ5E48U5oX+AxYNlX6FAoL/3I5Mz+Zk1t3fiQOYffXMy/xhPQ1o3iemRO7u3I3nWyj1lU0GyDw09hOfM2L+6eL93YPv0YjnoX0YEEKK/VkvKEuPjziQaeormesSClzq/n+u0LnjKoumJUUXv+yn+Kfvhs1l8I4ofqnMXKGKwU/xzEt2u2i3MA7KibMJhK/P85wHW5PsBVsex87RsR3rg93HX+7uxVXT412m5Y3oQOP59EPgQ+3u09+FB4FF2G329NexH9BtvvPHGG3+A/wJEFcH7eGY92AAAAABJRU5ErkJggg==');\r\n  background-size: contain;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[3];\r\n        grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 10px;\r\n  }\r\n\r\n.one {\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 1 / 3;\r\n    -ms-grid-row: 1;\r\n    grid-row: 1;\r\n  }\r\n\r\n.two { \r\n    -ms-grid-column: 2; \r\n    -ms-grid-column-span: 1; \r\n    grid-column: 2 / 3;\r\n    -ms-grid-row: 1;\r\n    grid-row: 1;\r\n  }\r\n\r\n.three {\r\n    -ms-grid-column: 1;\r\n    grid-column: 1;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 3;\r\n    grid-row: 2 / 5;\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"one\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Key By BCG</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"data:image/png;base64,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\" alt=\"Photo of a Shiba Inu\">\n\n      <mat-card-actions>\n        <button mat-button (click)=\"openKey()\">Open</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <div class=\"two\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Amethyst</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"https://lh3.googleusercontent.com/bwKOFTX1TIHLyjaWIrko2AMU8xyUBeR9j85qmjH7lROqh7bgC4U4VpMHAe_imdE8mQ\" alt=\"Photo of a Shiba Inu\">\n\n      <mat-card-actions>\n        <button mat-button (click)=\"openOgb()\">Open</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    // ng-el
    DashboardComponent.prototype.openOgb = function () {
        this.resetContainer();
        var ogbElement = document.createElement('ng-el');
        var ogbElContainer = document.getElementById('product-container');
        ogbElContainer.appendChild(ogbElement);
    };
    // ng-el-key
    DashboardComponent.prototype.openKey = function () {
        this.resetContainer();
        var keyElement = document.createElement('ng-el-key');
        var keyElContainer = document.getElementById('product-container');
        keyElContainer.appendChild(keyElement);
    };
    DashboardComponent.prototype.resetContainer = function () {
        document.getElementById('product-container').innerHTML = '';
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Wrapper\" style=\"margin-left : 100px; margin-top : 100px;\">\n  Email :\n  <input class=\"Input-text\" type=\"text\" [(ngModel)]=\"email\" style=\"margin-bottom: 30px;\">\n  <button mat-raised-button color=\"primary\" (click)=\"login()\">Go to your Identity Provider</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.email = '';
    }
    LoginComponent.prototype.login = function () {
        window.location.href = 'https://32t8586hq7.execute-api.us-east-1.amazonaws.com/Prod/api/values/email';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\uniyal aakash\Desktop\expr\micro-frontends-with-web-components\container\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map