(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "./src/app/pages/home/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolio {\n    padding: 60px;\n}"

/***/ }),

/***/ "./src/app/pages/home/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div class=\"container\">\n    <section id=\"portfolio\">\n        <!-- Portfolio Item Heading -->\n        <h1 class=\"my-4\">Page Heading\n            <small>Secondary Text</small>\n        </h1>\n\n        <!-- Portfolio Item Row -->\n        <div class=\"row\">\n\n            <div class=\"col-md-8\">\n                <img class=\"img-fluid\" src=\"http://placehold.it/750x500\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-4\">\n                <h3 class=\"my-3\">Project Description</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida\n                    pellentesque\n                    urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,\n                    justo eu convallis placerat, felis enim.</p>\n                <h3 class=\"my-3\">Project Details</h3>\n                <ul>\n                    <li>Lorem Ipsum</li>\n                    <li>Dolor Sit Amet</li>\n                    <li>Consectetur</li>\n                    <li>Adipiscing Elit</li>\n                </ul>\n            </div>\n\n        </div>\n        <!-- /.row -->\n\n        <!-- Related Projects Row -->\n        <h3 class=\"my-4\">Related Projects</h3>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-3 col-sm-6 mb-4\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n                </a>\n            </div>\n\n            <div class=\"col-md-3 col-sm-6 mb-4\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n                </a>\n            </div>\n\n            <div class=\"col-md-3 col-sm-6 mb-4\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n                </a>\n            </div>\n\n            <div class=\"col-md-3 col-sm-6 mb-4\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n                </a>\n            </div>\n\n        </div>\n        <!-- /.row -->\n\n\n    </section>\n\n</div>\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/pages/home/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/pages/home/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/pages/home/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/portfolio/portfolio.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio.module.ts ***!
  \**********************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/pages/home/portfolio/portfolio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: _portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]
    }
];
var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module.js.map