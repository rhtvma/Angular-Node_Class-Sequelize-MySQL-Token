(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/toastr-message.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/toastr-message.service.ts ***!
  \***********************************************************/
/*! exports provided: ToastrMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrMessageService", function() { return ToastrMessageService; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrMessageService = /** @class */ (function () {
    function ToastrMessageService(_toastrService) {
        this._toastrService = _toastrService;
    }
    // Success Type
    ToastrMessageService.prototype.typeSuccess = function (message) {
        this._toastrService.success(message, 'Success!');
    };
    // Error Type
    ToastrMessageService.prototype.typeError = function (message) {
        this._toastrService.error(message, 'Error!');
    };
    //Dismiss toastr on Click
    ToastrMessageService.prototype.dismissToastOnClick = function (val1, val2) {
        this._toastrService.info(val1, val2);
    };
    // Remove current toasts using animation
    ToastrMessageService.prototype.clearToast = function () {
        this._toastrService.clear();
    };
    ToastrMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], ToastrMessageService);
    return ToastrMessageService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map