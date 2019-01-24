(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/pages/project/list-poject/list-poject.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/project/list-poject/list-poject.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.card-container ul {\r\n    text-align: center;\r\n    margin: auto 0;\r\n}\r\n\r\n.card-container li {\r\n    list-style-type: none;\r\n    padding: .5em .5em .5em .5em;\r\n    text-align: left;\r\n}\r\n\r\n/*.card {*/\r\n\r\n/*transition: 0.2s;*/\r\n\r\n/*overflow: hidden;*/\r\n\r\n/*width: 7em;*/\r\n\r\n/*word-wrap: break-word;*/\r\n\r\n/*}*/\r\n\r\n/*.card-image {*/\r\n\r\n/*box-shadow: 1 1 #000;*/\r\n\r\n/*transition: .3s;*/\r\n\r\n/*background-color: #C33;*/\r\n\r\n/*margin: auto 0;*/\r\n\r\n/*text-align: center;*/\r\n\r\n/*}*/\r\n\r\n.card-image:hover {\r\n    -webkit-transform: scale(1.25, 1.25);\r\n            transform: scale(1.25, 1.25);\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    box-shadow: 2 2 #0f0;\r\n}"

/***/ }),

/***/ "./src/app/pages/project/list-poject/list-poject.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/project/list-poject/list-poject.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"form-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\"><h3 class=\"card-title\">projects</h3></div>\n                        <div class=\"col-md-6\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\"><input class=\"form-control mr-2\"\n                                                             type=\"text\"\n                                                             name=\"search\"\n                                                             placeholder=\"Search\"\n                                                             [(ngModel)]=\"searchText\"></div>\n                                <div class=\"col-md-6\">\n                                    <a routerLink=\"/project/create\" class=\"btn btn-success\"><i\n                                            class=\"fa fa-check\"></i>Create project\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <!--<div *ngFor=\"let hero of projectList | searchPipe :searchText :'project'\">-->\n                    <!--<div class=\"row\" (click)=\"seletectProject(hero)\">-->\n                    <!--&lt;!&ndash;<div >&ndash;&gt;-->\n                    <!--<div class=\"col-sm-3\">-->\n                    <!--<div class=\"card\">-->\n                    <!--<h5 class=\"card-header\">{{hero.project.project}}</h5>-->\n                    <!--<div class=\"card-body\">-->\n                    <!--<div class=\"row\">-->\n                    <!--<div class=\"col-sm-6\"><h5 class=\"card-title\">-->\n                    <!--{{hero.project.formsubmitted}}</h5>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-sm-6\"><h5 class=\"card-title\">Number of-->\n                    <!--forms</h5></div>-->\n                    <!--</div>-->\n                    <!--<div class=\"row\">-->\n                    <!--<div class=\"col-sm-6\"><h5 class=\"card-title\">{{hero.project.total}}</h5>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-sm-6\">{{hero.project.count}}</div>-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                    <!--</div>-->\n                    <!--</div>-->\n                    <ul class=\"card-container\">\n                        <li *ngFor=\"let hero of projectList | searchPipe :searchText :'project'\">\n                            <div class=\"card\" (click)=\"seletectProject(hero.id)\">\n                                <h5 class=\"card-header\">{{hero.project.project}}</h5>\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">\n                                            {{hero.project.formsubmitted}}</h5>\n                                        </div>\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">Number of\n                                            forms</h5></div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">{{hero.project.total}}</h5>\n                                        </div>\n                                        <div class=\"col-sm-6\">{{hero.project.count}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                    <!--{{ projectList | json}}-->\n                </div>\n                <div class=\"form-actions\">\n                    <!--{{selectedRecord | json}}-->\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"card\">\n                                <h1>{{selectedRecord.project.project}}</h1>\n                                <h4> Last Updated :{{selectedRecord.project.lastupdated | date: 'MMM d, y h:mm:ss\n                                    a'}}</h4>\n                                <div class=\"card-body\">\n                                    <h4> Created On :{{selectedRecord.project.createdon | date: 'MMM d, y h:mm:ss\n                                        a'}}</h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">\n                                            {{selectedRecord.project.description}}</h5>\n                                        </div>\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">Number of\n                                            forms</h5></div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\"><h5 class=\"card-title\">Project School</h5>\n                                        </div>\n                                        <div class=\"col-sm-6\">Project School</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!--<ul class=\"card-container\" >-->\n<!--<li *ngFor=\"let hero of projectList | searchPipe :searchText :'project'\">-->\n<!--<div class=\"card\">-->\n<!--<div class=\"card-image\">-->\n<!--<img src=\"http://placehold.it/100\">-->\n<!--</div>-->\n<!--<div class=\"card-theme\">-->\n<!--<a href=\"#\">Should you be here?</a>-->\n<!--</div>-->\n<!--</div>-->\n<!--</li>-->\n<!--</ul>-->\n\n\n"

/***/ }),

/***/ "./src/app/pages/project/list-poject/list-poject.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/project/list-poject/list-poject.component.ts ***!
  \********************************************************************/
/*! exports provided: ListPojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPojectComponent", function() { return ListPojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/toastr-message.service */ "./src/app/shared/services/toastr-message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/http.service */ "./src/app/shared/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPojectComponent = /** @class */ (function () {
    function ListPojectComponent(_router, _httpService, _toastrMessageService) {
        this._router = _router;
        this._httpService = _httpService;
        this._toastrMessageService = _toastrMessageService;
    }
    ListPojectComponent.prototype.ngOnInit = function () {
        this.projectList = [];
        this.getProjectList();
        this.seletectProject(1);
    };
    ListPojectComponent.prototype.seletectProject = function (i) {
        debugger;
        this.selectedRecord = JSON.parse(JSON.stringify(this.projectList[i]));
        console.log(this.selectedRecord);
    };
    ListPojectComponent.prototype.getProjectList = function () {
        var _this = this;
        this._httpService.get('/projectList')
            .subscribe(function (result) {
            if (result.data) {
                _this.projectList = result.data;
                _this._toastrMessageService.typeSuccess(result.msg);
                console.log(_this.projectList);
            }
        }, function (error) {
            _this._toastrMessageService.typeError(error.error.response_message || error.status_text);
        });
    };
    ListPojectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-poject',
            template: __webpack_require__(/*! ./list-poject.component.html */ "./src/app/pages/project/list-poject/list-poject.component.html"),
            styles: [__webpack_require__(/*! ./list-poject.component.css */ "./src/app/pages/project/list-poject/list-poject.component.css")],
            providers: [_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_1__["ToastrMessageService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_1__["ToastrMessageService"]])
    ], ListPojectComponent);
    return ListPojectComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/pipe/search.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/project/pipe/search.pipe.ts ***!
  \***************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText, key) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase().trim();
        return items.filter(function (it) {
            if (it.project[key]) {
                return it.project[key].toLowerCase().includes(searchText);
            }
            else {
                console.log('This invalid name');
            }
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchPipe'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/pages/project/pipe/unique.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/project/pipe/unique.pipe.ts ***!
  \***************************************************/
/*! exports provided: UniqueDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDataPipe", function() { return UniqueDataPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by rohit on 2019-01-24.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UniqueDataPipe = /** @class */ (function () {
    function UniqueDataPipe() {
    }
    UniqueDataPipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        var uniqueArray = value.filter(function (el, index, array) {
            return array.indexOf(el).project == index;
        });
        return uniqueArray;
    };
    UniqueDataPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'uniqueData',
            pure: false
        })
    ], UniqueDataPipe);
    return UniqueDataPipe;
}());



/***/ }),

/***/ "./src/app/pages/project/project-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/project/project-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _list_poject_list_poject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-poject/list-poject.component */ "./src/app/pages/project/list-poject/list-poject.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"],
        children: [
            {
                path: '',
                redirectTo: '/project/list',
                pathMatch: 'full'
            },
            {
                path: 'list', component: _list_poject_list_poject_component__WEBPACK_IMPORTED_MODULE_3__["ListPojectComponent"]
            },
            {
                path: 'create',
                loadChildren: './create-project/create-project.module#CreateProjectModule'
            }
        ]
    }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/toastr-message.service */ "./src/app/shared/services/toastr-message.service.ts");
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



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router) {
        this.router = router;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")],
            providers: [_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_1__["ToastrMessageService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/project/project.module.ts ***!
  \*************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/pages/project/project-routing.module.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _list_poject_list_poject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-poject/list-poject.component */ "./src/app/pages/project/list-poject/list-poject.component.ts");
/* harmony import */ var _pipe_unique_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/unique.pipe */ "./src/app/pages/project/pipe/unique.pipe.ts");
/* harmony import */ var _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe/search.pipe */ "./src/app/pages/project/pipe/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectRoutingModule"]
            ],
            declarations: [_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"], _list_poject_list_poject_component__WEBPACK_IMPORTED_MODULE_5__["ListPojectComponent"], _pipe_unique_pipe__WEBPACK_IMPORTED_MODULE_6__["UniqueDataPipe"], _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map