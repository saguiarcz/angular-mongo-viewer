webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ms_assets_ms_assets_component__ = __webpack_require__("./src/app/ms-assets/ms-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mongo_dashboard_mongo_dashboard_component__ = __webpack_require__("./src/app/mongo-dashboard/mongo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__be_jobs_be_jobs_component__ = __webpack_require__("./src/app/be-jobs/be-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'assets', component: __WEBPACK_IMPORTED_MODULE_2__ms_assets_ms_assets_component__["a" /* MsAssetsComponent */] },
    { path: 'mongodashboard', component: __WEBPACK_IMPORTED_MODULE_3__mongo_dashboard_mongo_dashboard_component__["a" /* MongoDashboardComponent */] },
    { path: 'bejobs', component: __WEBPACK_IMPORTED_MODULE_4__be_jobs_be_jobs_component__["a" /* BeJobsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* The sidebar menu */\r\n.divMain{\r\n  background-color: #D8D8D8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid divMain\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light justify-content-between\" style=\"background: white; border-width: 5px; border-color: black\" >\r\n    <a class=\"navbar-brand\" routerLink=\"/dashboard\">AWS-timeseries</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </nav>\r\n  <div class=\"row\" >\r\n    <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\" >\r\n      <nav class=\"navbar navbar-expand navbar-light navbar-expand-lg px-0 flex-row flex-nowrap\" style=\"background: white\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarWEX\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse\" id=\"navbarWEX\">\r\n          <div class=\"nav flex-sm-column flex-row\">\r\n            <a class=\"nav-item nav-link\" style=\"color: black\" routerLink=\"/assets\">Home</a>\r\n            <a class=\"nav-link\" style=\"color: black\" routerLink=\"/assets\">Assets</a>\r\n            <a class=\"nav-link\" style=\"color: black\" routerLink=\"/bejobs\">Back-End Jobs</a>\r\n            <a class=\"nav-link\" style=\"color: black\" routerLink=\"/mongodashboard\">Mongo Viewer</a>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-sm-10 col-md-10 col-lg-10 col-xl-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_viewer_collection_viewer_component__ = __webpack_require__("./src/app/collection-viewer/collection-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mongo_mongo_component__ = __webpack_require__("./src/app/mongo/mongo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mongo_service__ = __webpack_require__("./src/app/mongo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ms_assets_ms_assets_component__ = __webpack_require__("./src/app/ms-assets/ms-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ms_asset_detail_ms_asset_detail_component__ = __webpack_require__("./src/app/ms-asset-detail/ms-asset-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mongo_dashboard_mongo_dashboard_component__ = __webpack_require__("./src/app/mongo-dashboard/mongo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__be_jobs_be_jobs_component__ = __webpack_require__("./src/app/be-jobs/be-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_json_viewer__ = __webpack_require__("./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_ace_editor__ = __webpack_require__("./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ms_asset_form_ms_asset_form_component__ = __webpack_require__("./src/app/ms-asset-form/ms-asset-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mongo_mongo_component__["a" /* MongoComponent */],
                __WEBPACK_IMPORTED_MODULE_3__collection_viewer_collection_viewer_component__["a" /* CollectionViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ms_assets_ms_assets_component__["a" /* MsAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ms_asset_detail_ms_asset_detail_component__["a" /* MsAssetDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mongo_dashboard_mongo_dashboard_component__["a" /* MongoDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__be_jobs_be_jobs_component__["a" /* BeJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ms_asset_form_ms_asset_form_component__["a" /* MsAssetFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_json_viewer__["a" /* NgxJsonViewerModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_ace_editor__["a" /* AceEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__mongo_service__["a" /* MongoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.attemptAuth = function (email, password) {
        var credentials = { email: email, password: password };
        console.log('attempAuth ::' + credentials);
        return this.http.post(this.baseUrl, credentials);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/be-jobs/be-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ".be-jobs-div-principal{\r\n  background-color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n}\r\n.be-jobs-div-secondary{\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n}\r\nh3 {\r\n  /*color: #004a99;*/\r\n  color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/be-jobs/be-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container be-jobs-div-principal\">\n  <h3>Back-End Jobs</h3>\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h4>Access Token</h4>\n      <textarea rows=\"15\" cols=\"50\" >Test</textarea>\n    </div>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"startBeJobs()\">Start</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"stopBeJobs()\">Stop</button>\n    </div>\n  </div>\n  <!--\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h4>Credentials</h4>\n      <input type=\"email\"\n             [(ngModel)]=\"userEmail\" >Email\n      <input type=\"password\"\n             [(ngModel)]=\"userPassword\" >Password\n      <button type=\"submit\" (click)=\"getApiToken(userEmail, userPassword)\">Get Token</button>\n    </div>\n  </div>\n  -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/be-jobs/be-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeJobsComponent = /** @class */ (function () {
    function BeJobsComponent(authService) {
        this.authService = authService;
        this.runningStatus = true;
    }
    BeJobsComponent.prototype.ngOnInit = function () {
    };
    BeJobsComponent.prototype.getApiToken = function (userEmail, userPassword) {
        this.authService.attemptAuth(userEmail, userPassword)
            .subscribe();
        console.log(this.authService);
    };
    BeJobsComponent.prototype.fetchToken = function () {
        fetch('http://localhost:3030/access_token', {
            credentials: 'include',
            headers: { 'Cache-Control': 'no-cache' }
        }).then(function (resp) {
            return resp.json();
        }).then(function (parsedResp) {
            console.log('Access Token ' + parsedResp.access_token);
            this.runningStatus = parsedResp.this.runningStatus;
        });
    };
    BeJobsComponent.prototype.startBeJobs = function () {
        this.runningStatus = true;
    };
    BeJobsComponent.prototype.stopBeJobs = function () {
        this.runningStatus = false;
    };
    BeJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-be-jobs',
            template: __webpack_require__("./src/app/be-jobs/be-jobs.component.html"),
            styles: [__webpack_require__("./src/app/be-jobs/be-jobs.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], BeJobsComponent);
    return BeJobsComponent;
}());



/***/ }),

/***/ "./src/app/collection-viewer/collection-viewer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/collection-viewer/collection-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n<div class=\"form-group\" style=\"text-align: left\">\r\n  <label for=\"expression\">Expression:</label>\r\n  <input id=\"expression\" type=\"text\" class=\"form-control\" name=\"expression\" [(ngModel)]=\"expression\">\r\n  <div class=\"card-body\">\r\n    <button class=\"btn btn-primary\" (click)=\"setDifferentExpression()\">Read data</button>\r\n    <button class=\"btn btn-primary\" (click)=\"selectAll()\">Select All</button>\r\n    <button class=\"btn btn-primary\" (click)=\"deselectAll()\">Deselect all</button>\r\n    <button class=\"btn btn-primary\" (click)=\"deleteSelected()\">Delete selected</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"collectionsDataArray\">\r\n  <div class=\"row\" *ngFor=\"let collection of collectionsDataArray; let i = index; trackBy: i\">\r\n    <div class=\"card col-10\">\r\n      <div class=\"card-body\">\r\n        {{ collection.content }}\r\n      </div>\r\n    </div>\r\n    <input type=\"checkbox\" [name]=\"'check' + i\" [(ngModel)]=\"collection.checked\" class=\"col-2\">\r\n  </div>\r\n  <ngb-pagination [maxSize]=\"12\" boundaryLinks=\"true\" ellipses=\"true\" (pageChange)=\"pageChange($event)\" [pageSize]=\"7\" [collectionSize]=\"collectionSize\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/collection-viewer/collection-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mongo_service__ = __webpack_require__("./src/app/mongo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionViewerComponent = /** @class */ (function () {
    function CollectionViewerComponent(mongoService) {
        this.mongoService = mongoService;
        this.expression = '';
        this.page = 1;
    }
    CollectionViewerComponent.prototype.ngOnInit = function () {
    };
    CollectionViewerComponent.prototype.setDifferentCollection = function (collectionname) {
        var _this = this;
        console.log('Set different collection ' + collectionname);
        this.selectedCollection = collectionname;
        this.collectionsDataArray = [];
        this.mongoService.getSelectedCollection(collectionname, this.expression).subscribe(function (data) {
            _this.collectionSize = data.count;
            data.response.map(function (elem) {
                _this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
            });
            _this.error = null;
        }, function (err) {
            var message = 'Error while reading collections';
            console.log(message);
            _this.error = message;
        });
    };
    CollectionViewerComponent.prototype.deleteSelected = function () {
        var _this = this;
        var tasks = [];
        this.collectionsDataArray.forEach(function (coll) {
            if (coll.checked) {
                tasks.push(_this.mongoService.deleteSelected(_this.selectedCollection, JSON.parse(coll.content)['_id']));
            }
        });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */], tasks).subscribe(function (resp) {
            console.log('finished');
            _this.setDifferentExpression();
        });
    };
    CollectionViewerComponent.prototype.deselectAll = function () {
        this.collectionsDataArray.forEach(function (coll) {
            coll['checked'] = false;
        });
    };
    CollectionViewerComponent.prototype.selectAll = function () {
        this.collectionsDataArray.forEach(function (coll) {
            coll['checked'] = true;
        });
    };
    CollectionViewerComponent.prototype.setDifferentExpression = function () {
        var _this = this;
        console.log('Set different collection ' + this.selectedCollection + ', expression: ' + this.expression);
        //this.selectedCollection = collectionname;
        this.collectionsDataArray = [];
        this.mongoService.getSelectedCollection(this.selectedCollection, this.expression).subscribe(function (data) {
            _this.collectionSize = data.count;
            data.response.map(function (elem) {
                _this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
            });
            _this.error = null;
        }, function (err) {
            var message = 'Error while reading collections';
            console.log(message);
            _this.error = message;
        });
    };
    CollectionViewerComponent.prototype.pageChange = function (event) {
        var _this = this;
        console.log('pagechange ' + event + ', page ' + this.page);
        this.collectionsDataArray = [];
        this.mongoService.getSelectedCollection(this.selectedCollection, this.expression, (event - 1) * 7, 7).subscribe(function (data) {
            _this.collectionSize = data.count;
            data.response.map(function (elem) {
                _this.collectionsDataArray.push(new ModelClass(JSON.stringify(elem)));
            });
            _this.error = null;
        }, function (err) {
            var message = 'Error while reading collections';
            console.log(message);
            _this.error = message;
        });
    };
    CollectionViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-collection-viewer',
            template: __webpack_require__("./src/app/collection-viewer/collection-viewer.component.html"),
            styles: [__webpack_require__("./src/app/collection-viewer/collection-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mongo_service__["a" /* MongoService */]])
    ], CollectionViewerComponent);
    return CollectionViewerComponent;
}());

var ModelClass = /** @class */ (function () {
    function ModelClass(content) {
        this.checked = false;
        this.content = content;
    }
    return ModelClass;
}());


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <h1>\n    Angular AWS-timeseries!\n  </h1>\n  <ul class=\"nav flex-column\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink=\"/assets\">Assets</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/bejobs\">Back-End Jobs</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/mongodashboard\">Mongo Viewer</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/mongo-dashboard/mongo-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".mongo-dashboard-div-principal{\r\n  background-color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n}\r\n.mongo-dashboard-div-secondary{\r\n  background-color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  padding: 5px;\r\n}\r\nh3 {\r\n  /*color: #004a99;*/\r\n  color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mongo-dashboard/mongo-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align:center\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"mongo-dashboard-div-principal\">\n        <app-mongo (collectionChanged)=\"collectionViewer.setDifferentCollection($event)\"></app-mongo>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"mongo-dashboard-div-secondary\">\n        <h3>Angular Mongo viewer!</h3>\n        <app-collection-viewer #collectionViewer></app-collection-viewer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mongo-dashboard/mongo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MongoDashboardComponent = /** @class */ (function () {
    function MongoDashboardComponent() {
    }
    MongoDashboardComponent.prototype.ngOnInit = function () {
    };
    MongoDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mongo-dashboard',
            template: __webpack_require__("./src/app/mongo-dashboard/mongo-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/mongo-dashboard/mongo-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MongoDashboardComponent);
    return MongoDashboardComponent;
}());



/***/ }),

/***/ "./src/app/mongo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MongoService = /** @class */ (function () {
    function MongoService(httpClient) {
        this.httpClient = httpClient;
    }
    MongoService.prototype.getCollections = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/mongoData');
    };
    MongoService.prototype.getSelectedCollection = function (collectionName, expression, skip, limit) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 7; }
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/mongoData?collection=' + collectionName + '&inputName=' + encodeURIComponent(expression) + '&skip=' + skip + '&limit=' + limit);
    };
    MongoService.prototype.deleteSelected = function (collectionName, expression) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/mongoRemove?collection=' + collectionName + '&inputName=' + encodeURIComponent(expression));
    };
    MongoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MongoService);
    return MongoService;
}());



/***/ }),

/***/ "./src/app/mongo/mongo.component.css":
/***/ (function(module, exports) {

module.exports = "li.active span {\r\n  background-color: darkblue;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mongo/mongo.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Mongo collections:\r\n</h2>\r\n\r\n<div *ngIf=\"collections\">\r\n  <ul *ngFor=\"let collection of collections\" class=\"navbar\">\r\n    <li [ngClass]=\"{'active': selectedCollection && collection === selectedCollection, 'nav-item': true}\" style=\"cursor: pointer;\" (click)=\"selectCollection(collection)\">\r\n      <span>{{collection | titlecase}}</span>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/mongo/mongo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mongo_service__ = __webpack_require__("./src/app/mongo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MongoComponent = /** @class */ (function () {
    function MongoComponent(mongoService) {
        this.mongoService = mongoService;
        this.collectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MongoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mongoService.getCollections().subscribe(function (data) {
            _this.collections = data.collections;
            _this.error = null;
        }, function (err) {
            var message = 'Error while reading collections';
            console.log(message);
            _this.error = message;
        });
    };
    MongoComponent.prototype.selectCollection = function (selectedCollection) {
        this.selectedCollection = selectedCollection;
        this.collectionChanged.emit(selectedCollection);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MongoComponent.prototype, "collectionChanged", void 0);
    MongoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mongo',
            template: __webpack_require__("./src/app/mongo/mongo.component.html"),
            styles: [__webpack_require__("./src/app/mongo/mongo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mongo_service__["a" /* MongoService */]])
    ], MongoComponent);
    return MongoComponent;
}());



/***/ }),

/***/ "./src/app/ms-asset-detail/ms-asset-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".msAsset-detail-div{\r\n  background-color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/ms-asset-detail/ms-asset-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msAsset\" class=\"container msAsset-detail-div\">\n  <div class=\"row\">\n    <div class=\"col\">\n        <h4>Details: JSON Object</h4>\n        <ngx-json-viewer [json]=\"msAsset\" [expanded]=\"false\"></ngx-json-viewer>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"msAsset\" class=\"container msAsset-detail-div\">\n  <h4>Details: JSON Editor</h4>\n  <div class=\"row\">\n    <div class=\"container\">\n      <ace-editor [(text)]=\"code\" mode=\"json\" style=\"height:400px;\"></ace-editor>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ms-asset-detail/ms-asset-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAssetDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ms_asset__ = __webpack_require__("./src/app/ms-asset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ms_asset_service__ = __webpack_require__("./src/app/ms-asset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsAssetDetailComponent = /** @class */ (function () {
    function MsAssetDetailComponent(msAssetService) {
        this.msAssetService = msAssetService;
    }
    MsAssetDetailComponent.prototype.ngOnInit = function () {
        this.getRawMsAsset();
    };
    /**Gets the raw data of an asset from the service**/
    MsAssetDetailComponent.prototype.getRawMsAsset = function () {
        var _this = this;
        this.msAssetService.getRawMsAsset().subscribe(function (result) {
            _this.msAssetsJSON = result;
            console.log(_this.msAssetsJSON);
        });
    };
    Object.defineProperty(MsAssetDetailComponent.prototype, "code", {
        /**Stringifies the JSON object of an asset**/
        get: function () {
            return JSON.stringify(this.msAsset, null, 2);
        },
        set: function (v) {
            try {
                this.msAssetsJSON = JSON.parse(v);
            }
            catch (e) {
                console.log('Error occured while you were typing the JSON');
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ms_asset__["a" /* MsAsset */])
    ], MsAssetDetailComponent.prototype, "msAsset", void 0);
    MsAssetDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ms-asset-detail',
            template: __webpack_require__("./src/app/ms-asset-detail/ms-asset-detail.component.html"),
            styles: [__webpack_require__("./src/app/ms-asset-detail/ms-asset-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ms_asset_service__["a" /* MsAssetService */]])
    ], MsAssetDetailComponent);
    return MsAssetDetailComponent;
}());



/***/ }),

/***/ "./src/app/ms-asset-form-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAssetFormModel; });
var MsAssetFormModel = /** @class */ (function () {
    function MsAssetFormModel(url, method, body) {
        this.url = url;
        this.method = method;
        this.body = body;
    }
    return MsAssetFormModel;
}());



/***/ }),

/***/ "./src/app/ms-asset-form/ms-asset-form.component.css":
/***/ (function(module, exports) {

module.exports = ".msAssetForm-div{\r\n  background-color: white;\r\n  margin-top: 5px;\r\n  margin-bottom: 50px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  /*padding: 10px;*/\r\n}\r\n.msAssetForm-form{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  /*padding: 10px;*/\r\n}\r\n/*\r\ntextarea{\r\n  visibility:hidden;\r\n}\r\n*/\r\n\r\n"

/***/ }),

/***/ "./src/app/ms-asset-form/ms-asset-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container msAssetForm-div\">\n  <h4>Assets Form</h4>\n  <form (ngSubmit)=\"onSubmit()\" #msAssetForm=\"ngForm\" class=\"msAssetForm-form\">\n    <div class=\"form-group row\">\n      <div class=\"col\">\n        <label for=\"urlRequest\">Url</label>\n        <input type=\"text\" class=\"form-control\" id=\"urlRequest\"\n               required\n               [(ngModel)]=\"inputUrl\" name=\"url\"\n               #spy\n               placeholder=\"http://localhost:3000/assets\">\n        <br>TODO: remove this: {{spy.className}}\n      </div>\n      <div class=\"col\">\n        <label for=\"method\">Method</label>\n        <select class=\"form-control\" id=\"method\"\n                required\n                [(ngModel)]=\"model.method\" name=\"method\">\n          <option *ngFor=\"let method of methods\" [value]=\"method\">{{method}}</option>\n        </select>\n      </div>\n      <div class=\"col\" [ngSwitch]=\"model.method\">\n            <button *ngSwitchDefault type=\"submit\" class=\"btn btn-success\"\n                    [disabled]=\"!msAssetForm.form.valid\"\n                    (click)=\"getMsAsset(inputUrl)\">\n              Get\n            </button>\n            <button *ngSwitchCase=\"'post'\" type=\"submit\" class=\"btn btn-secondary\"\n                    [disabled]=\"!msAssetForm.form.valid\"\n                    (click)=\"postMsAsset(model.body)\">\n              Add\n            </button>\n            <button *ngSwitchCase=\"'put'\" type=\"submit\" class=\"btn btn-info\"\n                    [disabled]=\"!msAssetForm.form.valid\"\n                    (click)=\"putMsAsset(model.body, inputUrl)\">\n              Update\n            </button>\n            <button *ngSwitchCase=\"'delete'\" type=\"submit\" class=\"btn btn-danger\"\n                    [disabled]=\"!msAssetForm.form.valid\"\n                    (click)=\"deleteMsAsset(inputUrl)\">\n              Delete\n            </button>\n      </div>\n    </div>\n    <div *ngIf=\"model.method !== 'get'\" class=\"form-group row\">\n      <div class=\"col\">\n        <label for=\"body\">Body</label>\n        <textarea class=\"form-control text-hide\" id=\"body\"\n                  required\n                  [(ngModel)]=\"model.body\" name=\"body\">\n        </textarea>\n        <ace-editor [(text)]=\"model.body\" mode=\"json\" style=\"height:400px;\"></ace-editor>\n      </div>\n      <div class=\"col\">\n        <h6>Response</h6>\n        <br>\n        <ace-editor [(text)]=\"stringMsAsset\" mode=\"json\" style=\"height:400px;\"></ace-editor>\n      </div>\n    </div>\n    <div *ngIf=\"model.method === 'get'\" class=\"form-group row\">\n      <div class=\"col\">\n        <h6>Response</h6>\n        <br>\n        <ace-editor [(text)]=\"msAssetResponse\" mode=\"json\" style=\"height:400px;\"></ace-editor>\n      </div>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/ms-asset-form/ms-asset-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAssetFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ms_asset_form_model__ = __webpack_require__("./src/app/ms-asset-form-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ms_asset_service__ = __webpack_require__("./src/app/ms-asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MsAssetFormComponent = /** @class */ (function () {
    function MsAssetFormComponent(route, msAssetService) {
        this.route = route;
        this.msAssetService = msAssetService;
        this.msAssetsURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl; // URL to web api
        this.submitted = false;
        this.methods = ['get', 'post', 'put', 'delete'];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__ms_asset_form_model__["a" /* MsAssetFormModel */](this.msAssetsURL, 'post', '{\n' +
            '  "name": "XWingEdit",\n' +
            '  "assetId": "A0021",\n' +
            '  "id": "B0021",\n' +
            '  "description": "Hyperspace jump capable space ship",\n' +
            '  "parentTypeId": "mdsp.spaceship",\n' +
            '  "instantiable": true,\n' +
            '  "scope": "private",\n' +
            '  "variables": [\n' +
            '    {\n' +
            '      "name": "temperature",\n' +
            '      "dataType": "STRING",\n' +
            '      "unit": "C",\n' +
            '      "searchable": true,\n' +
            '      "length": 3\n' +
            '    }\n' +
            '  ],\n' +
            '  "fileAssignments": [\n' +
            '    {\n' +
            '      "key": "logo_small",\n' +
            '      "fileId": "c27a28b6eb16b507fabc11e75da8b4ce"\n' +
            '    }\n' +
            '  ],\n' +
            '  "aspects": [\n' +
            '    {\n' +
            '      "name": "leftWing",\n' +
            '      "aspectTypeId": "mdsp.wing"\n' +
            '    }\n' +
            '  ]\n' +
            '}');
    }
    MsAssetFormComponent.prototype.ngOnInit = function () {
    };
    /**Submit this form**/
    MsAssetFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    /**Call the API with parameters**/
    MsAssetFormComponent.prototype.callApiWithParams = function () {
        var urlCall = this.model.url + '/' + this.model.method + '/' + JSON.stringify(this.model.body);
        console.log(urlCall);
    };
    /** Get MsAsset **/
    MsAssetFormComponent.prototype.getMsAsset = function (assetId) {
        var _this = this;
        // const assetId = +this.route.snapshot.paramMap.get('assetId');
        this.msAssetService.getMsAsset(assetId).subscribe(function (msAsset) { return _this.msAsset = msAsset; });
        console.log('GET method was called');
    };
    /**Subscribes to the POST request in the MsAssetService**/
    MsAssetFormComponent.prototype.postMsAsset = function (newMsAsset) {
        var _this = this;
        this.msAssetService.postMsAsset(newMsAsset)
            .subscribe(function (msAsset) { return _this.msAssets.push(msAsset); });
        console.log('POST method was called' + newMsAsset);
    };
    /**Subscribes to the PUT request in the MsAssetService**/
    MsAssetFormComponent.prototype.putMsAsset = function (bodyMsAsset, assetId) {
        this.msAssetService.putMsAsset(bodyMsAsset, assetId)
            .subscribe();
        console.log('PUT method was called');
    };
    /**Subscribes to the DELETE request in the MsAssetService**/
    MsAssetFormComponent.prototype.deleteMsAsset = function (assetId) {
        this.msAssetService.deleteMsAsset(assetId).subscribe();
        console.log('DELETE method was called');
    };
    Object.defineProperty(MsAssetFormComponent.prototype, "msAssetResponse", {
        /**Stringifies the JSON object of an asset**/
        get: function () {
            return JSON.stringify(this.msAsset, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsAssetFormComponent.prototype, "newMsAsset", {
        get: function () {
            return JSON.stringify(this.newMsAsset, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    /**Stringifies the JSON object of an asset*/
    MsAssetFormComponent.prototype.stringifymsAssetResponse = function () {
        this.stringMsAsset = JSON.stringify(this.msAsset, null, 2);
        return this.stringMsAsset;
    };
    Object.defineProperty(MsAssetFormComponent.prototype, "code", {
        set: function (v) {
            try {
                this.model.body = JSON.parse(v);
            }
            catch (e) {
                console.log('Error occured while you were typing the JSON');
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    MsAssetFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ms-asset-form',
            template: __webpack_require__("./src/app/ms-asset-form/ms-asset-form.component.html"),
            styles: [__webpack_require__("./src/app/ms-asset-form/ms-asset-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ms_asset_service__["a" /* MsAssetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__ms_asset_service__["a" /* MsAssetService */]])
    ], MsAssetFormComponent);
    return MsAssetFormComponent;
}());



/***/ }),

/***/ "./src/app/ms-asset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAssetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    }))
};
var MsAssetService = /** @class */ (function () {
    function MsAssetService(http) {
        this.http = http;
        // private msAssetsURL = 'http://localhost:3000/assets'; // URL to web api
        // private msAssetsURL = '/api/assetmanagement/v3/assets'; // URL to web api
        this.msAssetsURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + '/assets';
    }
    /** Gets ALL the assets */
    MsAssetService.prototype.getMsAssets = function () {
        return this.http.get(this.msAssetsURL);
    };
    /*
      /** Gets ALL the assets
      getMsAssetsAny(): Observable<object> {
        return this.http.get<object>(this.msAssetsURL);
      }
      */
    /** GET asset by Id*/
    MsAssetService.prototype.getMsAsset = function (assetId) {
        var url = this.msAssetsURL + "/" + assetId;
        return this.http.get(url);
    };
    /** GET: retrieves the raw data without any format*/
    MsAssetService.prototype.getRawMsAsset = function () {
        return this.http.get(this.msAssetsURL);
    };
    /** POST: add a new asset**/
    MsAssetService.prototype.postMsAsset = function (msAsset) {
        return this.http.post(this.msAssetsURL, msAsset, httpOptions);
        // TODO: Change the URL
    };
    /** DELETE: delete an asset */
    MsAssetService.prototype.deleteMsAsset = function (assetId) {
        var url = "" + this.msAssetsURL + "/" + assetId;
        return this.http.delete(url, httpOptions);
    };
    /**PUT: update an asset  */
    MsAssetService.prototype.putMsAsset = function (bodyMsAsset, assetId) {
        var url = "" + this.msAssetsURL + "/" + assetId;
        return this.http.put(url, bodyMsAsset, httpOptions);
    };
    MsAssetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MsAssetService);
    return MsAssetService;
}());



/***/ }),

/***/ "./src/app/ms-asset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAsset; });
var MsAsset = /** @class */ (function () {
    function MsAsset() {
    }
    return MsAsset;
}());



/***/ }),

/***/ "./src/app/ms-assets/ms-assets.component.css":
/***/ (function(module, exports) {

module.exports = ".msAsset-div-principal{\r\n  background-color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n}\r\n.msAsset-div-secondary{\r\n  background-color: white;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  /*padding: 10px;*/\r\n}\r\n.msAsset-div-noBackGround{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  margin-left: 1px;\r\n  margin-right: 1px;\r\n  /*padding: 10px;*/\r\n}\r\ntextarea {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n\r\n  width: 100%;\r\n}\r\nh3 {\r\n  /*color: #004a99;*/\r\n  color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/ms-assets/ms-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-5\">\n      <div class=\"msAsset-div-principal\">\n        <h3>My Assets</h3>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Id</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let msAsset of msAssets\"\n                (click)=\"onSelect(msAsset)\">\n              <td>{{msAsset.name}}</td>\n              <td>{{msAsset.assetId}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"container-fluid msAsset-div-noBackGround\">\n        <app-ms-asset-detail [msAsset]=\"selectedMsAsset\"></app-ms-asset-detail>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-ms-asset-form></app-ms-asset-form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ms-assets/ms-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ms_asset_service__ = __webpack_require__("./src/app/ms-asset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MSASSETS } from '../mock-ms-assets'; // Import from the file directly

var MsAssetsComponent = /** @class */ (function () {
    function MsAssetsComponent(msAssetService) {
        this.msAssetService = msAssetService;
        this.data = {};
    }
    MsAssetsComponent.prototype.ngOnInit = function () {
        this.getMsAssets();
        this.getRawMsAsset();
    };
    /** Displays the detail of a selected asset */
    MsAssetsComponent.prototype.onSelect = function (msAsset) {
        this.selectedMsAsset = msAsset;
    };
    MsAssetsComponent.prototype.getMsAssets = function () {
        var _this = this;
        this.msAssetService.getMsAssets().subscribe(function (msAssets) { return _this.msAssets = msAssets; });
        // this.msAssets = this.msAssetService.getMsAssets();
    };
    /**Gets the raw data of all the assets**/
    MsAssetsComponent.prototype.getRawMsAsset = function () {
        var _this = this;
        this.msAssetService.getRawMsAsset().subscribe(function (result) {
            _this.msAssetsJSON = result;
            console.log(_this.msAssetsJSON);
        });
    };
    MsAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ms-assets',
            template: __webpack_require__("./src/app/ms-assets/ms-assets.component.html"),
            styles: [__webpack_require__("./src/app/ms-assets/ms-assets.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ms_asset_service__["a" /* MsAssetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ms_asset_service__["a" /* MsAssetService */]])
    ], MsAssetsComponent);
    return MsAssetsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000' // json-server URL
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map