(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'project',
                loadChildren: './project/project.module#ProjectModule'
            }
        ]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());

// https://blackrockdigital.github.io/startbootstrap-agency/


/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sidenav {\r\n    height: 100%;\r\n    width: 160px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.main {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n    <app-header></app-header>\n</div>\n<div class=\"main\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent(router) {
        this.router = router;
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/project']);
        }
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
            ],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\n    color: hotpink;\n}"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n        Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://www.linkedin.com/in/rhtvma/\">Rohit Verma</a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n    padding-left: 160px;\r\n    transition: all 0.4s ease 0s;\r\n}\r\n\r\n#sidebar-wrapper {\r\n    margin-left: -160px;\r\n    left: 160px;\r\n    width: 160px;\r\n    background: #000;\r\n    position: fixed;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    z-index: 1000;\r\n    transition: all 0.4s ease 0s;\r\n}\r\n\r\n#wrapper.active {\r\n    padding-left: 0;\r\n}\r\n\r\n#wrapper.active #sidebar-wrapper {\r\n    left: 0;\r\n}\r\n\r\n#page-content-wrapper {\r\n    width: 100%;\r\n}\r\n\r\n.sidebar-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 160px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-nav li {\r\n    line-height: 40px;\r\n    text-indent: 20px;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    color: #999999;\r\n    display: block;\r\n    text-decoration: none;\r\n    padding-left: 60px;\r\n}\r\n\r\n.sidebar-nav li a span:before {\r\n    position: absolute;\r\n    left: 0;\r\n    color: #41484c;\r\n    text-align: center;\r\n    width: 20px;\r\n    line-height: 18px;\r\n}\r\n\r\n.sidebar-nav li a:hover,\r\n.sidebar-nav li.active {\r\n    color: #fff;\r\n    background: rgba(255,255,255,0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n    height: 65px;\r\n    line-height: 60px;\r\n    font-size: 18px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n    color: #999999;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n    color: #fff;\r\n    background: none;\r\n}\r\n\r\n.content-header {\r\n    height: 65px;\r\n    line-height: 65px;\r\n}\r\n\r\n.content-header h1 {\r\n    margin: 0;\r\n    margin-left: 20px;\r\n    line-height: 65px;\r\n    display: inline-block;\r\n}\r\n\r\n#menu-toggle {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-menu {\r\n    color: #000;\r\n}\r\n\r\n.inset {\r\n    padding: 20px;\r\n}\r\n\r\n@media (max-width:767px) {\r\n\r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n\r\n    #sidebar-wrapper {\r\n        left: 0;\r\n    }\r\n\r\n    #wrapper.active {\r\n        position: relative;\r\n        left: 160px;\r\n    }\r\n\r\n    #wrapper.active #sidebar-wrapper {\r\n        left: 160px;\r\n        width: 160px;\r\n        transition: all 0.4s ease 0s;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- Sidebar -->\n    <div id=\"sidebar-wrapper\">\n        <nav id=\"spy\">\n            <ul class=\"sidebar-nav nav\">\n                <li class=\"sidebar-brand\">\n                    <a routerLink=\"/project/list\"><span class=\"fa fa-home solo\">Home</span></a>\n                </li>\n                <li>\n                    <a routerLink=\"/project\">\n                        <span class=\"fa fa-folder-o\">Projects</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n\n<!--&lt;!&ndash;<nav class=\"navbar navbar-dark bg-dark mb-5\">&ndash;&gt;-->\n<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">-->\n<!--<a class=\"navbar-brand\" routerLink=\"/home\">Angular & Bootstrap</a>-->\n<!--<div class=\"navbar-expand mr-auto\">-->\n<!--<div class=\"navbar-nav\">-->\n<!--<a class=\"nav-item nav-link active\" routerLink=\"/home\">Home</a>-->\n<!--<a class=\"nav-item nav-link\" routerLink=\"/about\">About</a>-->\n<!--<a class=\"nav-item nav-link\" routerLink=\"/contact\">Contact</a>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"navbar-expand ml-auto navbar-nav\">-->\n<!--<div class=\"navbar-nav\">-->\n<!--<a class=\"nav-item nav-link\" href=\"https://github.com/rhtvma\" target=\"_blank\">-->\n<!--<i class=\"fa fa-github\"></i>-->\n<!--</a>-->\n<!--<a class=\"nav-item nav-link\" href=\"https://twitter.com/rhtvma\" target=\"_blank\">-->\n<!--<i class=\"fa fa-twitter\"></i>-->\n<!--</a>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"pull-right\">-->\n<!--<ul class=\"nav pull-right\">-->\n<!--<li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Welcome, {{userName()}}-->\n<!--<b class=\"caret\"></b></a>-->\n<!--<ul class=\"dropdown-menu\">-->\n<!--<li><a href=\"/help/support\"><i class=\"icon-envelope\"></i> Contact Support</a></li>-->\n<!--<li class=\"divider\"></li>-->\n<!--<li><a (click)=\"logout()\"><i class=\"icon-off\"></i> Logout</a></li>-->\n<!--</ul>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_router) {
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map