(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about {\n    padding: 60px;\n}"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div class=\"container\">\n    <section id=\"about\">\n        <div class=\"container\">\n            <h3 class=\"text-center text-uppercase\">about us</h3>\n            <p class=\"text-center w-75 m-auto\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum\n                purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"my-4 text-center\">Our Team</h2>\n            </div>\n            <div class=\" col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/img/about/1.jpg\" alt=\"\">\n                <h3>Rohit Verma\n                    <small>Job Title</small>\n                </h3>\n                <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map