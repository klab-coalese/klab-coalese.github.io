(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click) = \"toggleShowme()\"> Sort by </button>\n<h1 *ngIf = \"showSomething\" >hide me</h1> -->\n<mat-tab-group mat-stretch-tabs animationDuration=\"0ms\">\n        <mat-tab label=\"Grouping\"><app-grouping></app-grouping></mat-tab>\n        <mat-tab label=\"Dashboard\"><app-overtable> </app-overtable></mat-tab>\n</mat-tab-group>\n      \n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grouping/grouping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n            \n<!-- <p-dropdown [options]=\"categories\" [(ngModel)]=\"selectedCategory\" placeholder=\"Select a Category\" optionLabel=\"label\" [showClear]=\"true\"></p-dropdown> -->\n\n\n        <!-- <div class=\"dropdown\">\n                Sort Students by \n                <button class=\"dropbtn\">Select</button>\n                <div class=\"dropdown-content\">\n                  <a href=\"\" >Collaboration</a>\n                  <a href=\"\" >Communication</a>\n                  \n                </div>\n              </div> -->\n\n<div class = \"parent-container\">\n    <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\n            <mat-radio-group aria-label=\"Sort students by\"> \n                    <mat-radio-button value=\"1\" id = \"button1\" style=\"color: #A9B9FF\" (click)=\"sortAttributes(1)\">Collaboration</mat-radio-button>\n                    <mat-radio-button value=\"2\" id = \"button2\" style=\"color: #F47645\" (click)=\"sortAttributes(2)\">Communication</mat-radio-button>\n                    <mat-radio-button value=\"3\" id = \"button3\" style=\"color: #F7AA01\" (click)=\"sortAttributes(3)\">Problem Solving</mat-radio-button>\n                    <mat-radio-button value=\"4\" id = \"button4\" style=\"color: #7ACFDE\" (click)=\"sortAttributes(4)\">Project Management</mat-radio-button>\n                    <mat-radio-button value=\"5\" id = \"button5\" style=\"color: #FFA2DD\" (click)=\"sortAttributes(5)\">Group discussion</mat-radio-button>\n            </mat-radio-group> \n\n        <!-- optionLabel=\"name\" (onChange)=\"sortAttributes($event)\" -->\n        <div *ngFor=\"let student of availableStudents; index as i\"  class=\"ui-helper-clearfix\" pDraggable=\"students\" (onDragStart)=\"dragStart($event,student)\" (onDragEnd)=\"dragEnd($event)\">\n                \n                <div class = \"student-profile-info\">\n                    <img class = \"student-image\" src = {{student.image_source}}>\n                    \n\n                    <div class = \"student-name\">\n                        <b>{{student.name}}</b>\n                    </div>\n                </div>\n                <div class = \"student-performance\">\n\n                    <p class = \"group-header-desc\" ><b>{{student.student_header[header_index]}}</b></p>\n<!-- \n                    <p class = \"line-desc\">{{shortHand(student.collaboration)}}</p> -->\n                    <p class = \"line-desc\">Col</p>\n                    <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration) >\n                                       \n                    </div>\n                    \n                    <!-- <p class = \"line-desc\">{{shortHand(student.communication)}}</p> -->\n                    <p class = \"line-desc\">Com</p>\n                    <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.problem)}}</p> -->\n                    <p class = \"line-desc\">P.S</p>\n                    <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.project_management)}}</p> -->\n                    <p class = \"line-desc\">P.M</p>\n                    <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)>\n\n                    </div>\n\n                    <!-- <p class = \"line-desc\">{{shortHand(student.group_discussion)}}</p> -->\n                    <p class = \"line-desc\">G.D</p>\n                    <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)>\n\n                    </div>\n\n                </div>\n        </div>\n</div>\n\n<div class = \"grouping-container\">\n    <button class = \"add-group-list\" (click)=\"increment_groups()\"> +</button> <p class = \"add-group-text\">Add group</p>\n    <button id = \"smart-grouping\" (click)=\"smart_grouping()\"> Smart Grouping</button>\n    <div class=\"ui-g-12 ui-md-6 drop-column\" *ngFor =\"let group of selectedStudents; index as i\"  [attr.data-index]=\"i\" pDroppable=\"students\" (onDrop)=\"drop($event,i)\" [ngClass]=\"{'ui-highlight-student':draggedStudent}\">\n        <p-table [value]=\"selectedStudents[i]\" >\n            <ng-template pTemplate=\"body\" let-student>\n                <tr>\n                    <div class = \"student-group-name\">\n                        <td>{{student.name}}</td>\n                        <td><button mat-button class = \"button red-button\" (click)=\"removeGroupValue(student, i)\"> - </button></td>\n                    </div>\n                    <div class = \"group-avg-score\"> \n                            <!-- <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration)> </div>\n                            <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)></div>\n                            <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)></div>\n                            <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)></div>\n                            <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)></div> -->\n                    </div>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n</div>\n<script>\n    var line1 = document.getElementById('line1'));\n    line1.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n\n    var line2 = document.getElementById('line2'));\n    line2.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line3 = document.getElementById('line3'));\n    line3.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line4 = document.getElementById('line4'));\n    line4.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line5 = document.getElementById('line5'));\n    line5.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grouping/smart-group/smart-group.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grouping/smart-group/smart-group.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <p-table [value]=\"selectedStudents[index]\" >\n        <ng-template pTemplate=\"body\" let-student>\n            <tr>\n                <div class = \"student-group-name\">\n                    <td>{{student.name}}</td>\n                    <td><button mat-button class = \"button red-button\" (click)=\"removeGroupValue(student, index)\"> - </button></td>\n                </div>\n                <div class = \"group-avg-score\"> \n                        <!-- <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration)> </div>\n                        <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)></div>\n                        <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)></div>\n                        <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)></div>\n                        <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)></div> -->\n                </div>\n            </tr>\n        </ng-template>\n    </p-table>\n\n\n\n<!-- <div class=\"ui-g-12 ui-md-6 drop-column\" *ngFor =\"let group of selectedStudents; index as i\"  [attr.data-index]=\"i\" pDroppable=\"students\" (onDrop)=\"drop($event,i)\" [ngClass]=\"{'ui-highlight-student':draggedStudent}\">\n    <p-table [value]=\"selectedStudents[i]\" >\n        <ng-template pTemplate=\"body\" let-student>\n            <tr>\n                <div class = \"student-group-name\">\n                    <td>{{student.name}}</td>\n                    <td><button mat-button class = \"button red-button\" (click)=\"removeGroupValue(student, i)\"> - </button></td>\n                </div>\n                <div class = \"group-avg-score\"> \n                        <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration)> </div>\n                        <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)></div>\n                        <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)></div>\n                        <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)></div>\n                        <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)></div> \n                </div>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"header-component\">\n<img id =\"klab-logo\" src=\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d28d795f3c1a5b03fe8132a/img/header-logo-qr-code@2x.png\">\n<img id = \"klab-name\"src = \"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d28d9e18280a320cafb1493/img/home-coalesce@2x.png\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class = \"homepage\">\n    <div class = \"welcomediv\">\n        <h1 id = \"welcomemessage\">Welcome, Travis</h1>\n    </div>\n    <div class = \"courses\">\n            <a routerLink=\"dashboard\"><button class=\"button\">History 1A  </button></a>\n        <a routerLink=\"dashboard\"><button class=\"button\">History 2A  </button></a>\n        <a routerLink=\"dashboard\"><button class=\"button\">Classic  </button></a>\n        \n    </div>\n</div>\n<body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/overtable/overtable.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/overtable/overtable.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"serial_no\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.serial_no}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"last_evaluation\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Evaluation </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_evaluation}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"last_check_in\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Check In </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_check_in}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"collaboration\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Collaboration </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.collaboration}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"communication\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Communication </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.problem_solving}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"problem_solving\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Problem Solving </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.problem_solving}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"group_discussion\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Group Discussion </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.group_discussion}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {Router} from '@angular/router';
let AppComponent = class AppComponent {
    // import {Router} from '@angular/router';
    constructor() {
        this.title = 'app works!';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _overtable_overtable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overtable/overtable.component */ "./src/app/overtable/overtable.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grouping/grouping.component */ "./src/app/grouping/grouping.component.ts");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dragdrop */ "./node_modules/primeng/dragdrop.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _grouping_smart_group_smart_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grouping/smart-group/smart-group.component */ "./src/app/grouping/smart-group/smart-group.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _overtable_overtable_component__WEBPACK_IMPORTED_MODULE_11__["OvertableComponent"],
            _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_13__["GroupingComponent"],
            _grouping_smart_group_smart_group_component__WEBPACK_IMPORTED_MODULE_17__["SmartGroupComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    // toggleShowme()
    // {
    //   this.showSomething = !this.showSomething;
    // }
    ngOnInit() {
        // this.studentlist = new Array<string>();
        // this.showSomething = false;
        // this.dataSource.sort = this.sort;
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/grouping/grouping.component.css":
/*!*************************************************!*\
  !*** ./src/app/grouping/grouping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button\r\n{\r\n    display: block;\r\n}\r\n\r\nbutton#smart-grouping\r\n{\r\n    margin-left: 5%;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n    margin-right : 10px;\r\n}\r\n\r\n/* find me */\r\n\r\n.ui-g-12.ui-md-6.ui-g-nopad.drag-column\r\n{\r\n    width: 70%;\r\n    min-width: 70%;\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 0.5fr 0.5fr 0.5fr;\r\n    grid-row-gap : 10px;\r\n    /* grid-column-gap : 5px; */\r\n    /* grid-template-rows: ; */\r\n    grid-auto-rows: -webkit-min-content;\r\n    grid-auto-rows: min-content;\r\n    position: relative;\r\n    \r\n\r\n}\r\n\r\n.ui-helper-clearfix.ng-star-inserted\r\n{\r\n    border: 1px solid gray;\r\n    width: 90%;\r\n    height : 200;\r\n    display: inline-block;\r\n    \r\n    margin : 5px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 1px 1px 1px gray;\r\n}\r\n\r\n/* find me */\r\n\r\n.parent-container\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-width: 100%;\r\n    padding-top: 4%;\r\n    \r\n    \r\n}\r\n\r\n/*find me*/\r\n\r\n.grouping-container\r\n{\r\n    width: 30%;\r\n    min-width: 30%;\r\n    display: inline-block;\r\n    background: gray;\r\n    height : 100%;\r\n    position: relative;\r\n}\r\n\r\n.ui-g-12.ui-md-6.drop-column.ng-star-inserted\r\n{\r\n    border: 2px dotted;\r\n    width: 80%;\r\n    height : 200px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: white;\r\n}\r\n\r\n.student-image \r\n{\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n}\r\n\r\n.student-name\r\n{\r\n    margin-left: 20px;\r\n    margin-top : 2px;\r\n    width : 20%;\r\n}\r\n\r\nmat-radio-group.mat-radio-group\r\n{\r\n    display: inline-block;\r\n    position : relative;\r\n    grid-column: 1 / span 1;\r\n    \r\n    /* margin-left: 3%;\r\n    margin-right: 9.7%;\r\n    margin-top: 7%; */\r\n}\r\n\r\nmat-radio-button\r\n{\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.student-profile-info\r\n{\r\n    width : 40%;\r\n    display: inline-block;\r\n}\r\n\r\n.student-performance\r\n{\r\n    display: inline-block;\r\n    width : 50%;\r\n    margin-left : 5%;\r\n}\r\n\r\np#sort-title\r\n{\r\n    margin-left : 3%;\r\n}\r\n\r\np.line-desc\r\n{\r\n    display: inline-block;\r\n    font-size : 11px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.line\r\n{\r\n    \r\n    height: 15px;\r\n    \r\n    margin-left: 20%;\r\n    box-sizing: border-box;\r\n    background: #000;\r\n    margin-top : -20%;\r\n    \r\n}\r\n\r\n.line-1\r\n{\r\n    \r\n    background: #A9B9FF;\r\n}\r\n\r\n.line-2 \r\n{\r\n    background: #F47645;\r\n}\r\n\r\n.line-3\r\n{\r\n    background: #F7AA01;\r\n}\r\n\r\n.line-4\r\n{\r\n    background: #7ACFDE;\r\n}\r\n\r\n.line-5\r\n{\r\n    background: #FFA2DD;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.button {\r\n    width: 25px;\r\n    height: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n.red-button {\r\n    background-color: #d3cfcf;\r\n    \r\n  }\r\n\r\n.group-header-desc\r\n{\r\n    color :#A9B9FF;\r\n}\r\n\r\n.add-group-text\r\n{\r\n    display: inline-block;\r\n    color: white;\r\n}\r\n\r\n.add-group-list\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    border-radius: 50%;\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity:0;\r\n    }\r\n    to {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fadein { /* Safari and Chrome */\r\n    from {\r\n        opacity:0;\r\n    }\r\n    to {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n\r\n  }\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQSxZQUFZOztBQUNaOztJQUVJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7OztBQUd0Qjs7QUFHQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7O0lBRXJCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUNBLFlBQVk7O0FBQ1o7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7OztBQUduQjs7QUFDQSxVQUFVOztBQUNWOztJQUVJLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCOztxQkFFaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUNBOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBOzs7SUFHSSxZQUFZOztJQUVaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7O0FBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFHQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSSx5QkFBeUI7O0VBRTNCOztBQUVGOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBU0EsNEJBQTRCLHNCQUFzQjtJQUM5QztRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBVUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUVBLGtFQUFrRTs7QUFDbEU7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7RUFFckI7O0FBRUEseUNBQXlDOztBQUN6QztJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBLDRDQUE0Qzs7QUFDNUMsMkJBQTJCLHNCQUFzQixDQUFDOztBQUVsRCxvQ0FBb0M7O0FBQ3BDLG1DQUFtQyxjQUFjLENBQUM7O0FBRWxELDBGQUEwRjs7QUFDMUYsMEJBQTBCLHlCQUF5QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b24jc21hcnQtZ3JvdXBpbmdcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG59XHJcbi8qIGZpbmQgbWUgKi9cclxuLnVpLWctMTIudWktbWQtNi51aS1nLW5vcGFkLmRyYWctY29sdW1uXHJcbntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDAuNWZyIDAuNWZyO1xyXG4gICAgZ3JpZC1yb3ctZ2FwIDogMTBweDtcclxuICAgIC8qIGdyaWQtY29sdW1uLWdhcCA6IDVweDsgKi9cclxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogOyAqL1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLnVpLWhlbHBlci1jbGVhcmZpeC5uZy1zdGFyLWluc2VydGVkXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0IDogMjAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyYXk7XHJcbn1cclxuLyogZmluZCBtZSAqL1xyXG4ucGFyZW50LWNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4vKmZpbmQgbWUqL1xyXG4uZ3JvdXBpbmctY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICBoZWlnaHQgOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udWktZy0xMi51aS1tZC02LmRyb3AtY29sdW1uLm5nLXN0YXItaW5zZXJ0ZWRcclxue1xyXG4gICAgYm9yZGVyOiAycHggZG90dGVkO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodCA6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbiA6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc3R1ZGVudC1pbWFnZSBcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG59XHJcblxyXG4uc3R1ZGVudC1uYW1lXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcCA6IDJweDtcclxuICAgIHdpZHRoIDogMjAlO1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAubWF0LXJhZGlvLWdyb3VwXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcclxuICAgIFxyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5LjclO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7ICovXHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b25cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLnN0dWRlbnQtcHJvZmlsZS1pbmZvXHJcbntcclxuICAgIHdpZHRoIDogNDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zdHVkZW50LXBlcmZvcm1hbmNlXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoIDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQgOiA1JTtcclxufVxyXG5cclxucCNzb3J0LXRpdGxlXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0IDogMyU7XHJcbn1cclxuXHJcbnAubGluZS1kZXNjXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZSA6IDExcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubGluZVxyXG57XHJcbiAgICBcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcCA6IC0yMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmxpbmUtMVxyXG57XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNBOUI5RkY7XHJcbn1cclxuXHJcblxyXG4ubGluZS0yIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ3NjQ1O1xyXG59XHJcblxyXG4ubGluZS0zXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNGN0FBMDE7XHJcbn1cclxuXHJcbi5saW5lLTRcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzdBQ0ZERTtcclxufVxyXG5cclxuLmxpbmUtNVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZBMkREO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4ucmVkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjZmNmO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuLmdyb3VwLWhlYWRlci1kZXNjXHJcbntcclxuICAgIGNvbG9yIDojQTlCOUZGO1xyXG59XHJcblxyXG4uYWRkLWdyb3VwLXRleHRcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLWdyb3VwLWxpc3Rcclxue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4gIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/grouping/grouping.component.ts":
/*!************************************************!*\
  !*** ./src/app/grouping/grouping.component.ts ***!
  \************************************************/
/*! exports provided: GroupingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingComponent", function() { return GroupingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student */ "./src/app/grouping/student.ts");



// import {SelectItem} from 'primeng/api';
let GroupingComponent = class GroupingComponent {
    // selectedCategory : string;
    // categories : SelectItem[] = new Array();
    constructor() {
        this.availableStudents = new Array();
        this.selectedStudents = new Array();
        this.group_Placeholder_Container = new Array();
        this.groupDesignValues = new Array();
    }
    ngOnInit() {
        this.numberOfGroups = 3;
        this.studentsPerGroup = 4;
        // Header index references the header on student card
        this.header_index = 0;
        var dataSource = [
            { image_source: '', name: 'Ariana Camper', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Dan Sawyer', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Max Goldberg', gender: "Male", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Paige Braun', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Sawyer Sam', gender: "Male", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Sam Leighburg', gender: "Female", collaboration: 'Developing', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Eadric Garrett', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Darby Pilsner', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Isabell Terry', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Chris Jones', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Chris Walker', gender: "Male", collaboration: 'Developing', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Erika Portman', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Audrey Farwell', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Mark Cosinberg', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Leana Banks', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Jon Whittaker', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
        ];
        // this.categories =  [
        //   {label:'Select Category', value:null},
        //   {label:'Collaboration', value:1},
        //   {label:'Communication', value:2},
        //   {label:'Problem Solving', value:3},
        //   {label:'Project Management', value:4},
        //   {label:'Group Discussion', value:5}
        // ];
        for (let i = 0; i < dataSource.length; i++) {
            dataSource[i].image_source = '/assets/images/Student' + i.toString() + ".jpeg";
            this.availableStudents[i] = new _student__WEBPACK_IMPORTED_MODULE_2__["Student"](dataSource[i].image_source, dataSource[i].name, dataSource[i].gender, dataSource[i].collaboration, dataSource[i].problem_solving, dataSource[i].communication, dataSource[i].group_discussion, dataSource[i].project_management);
        }
        for (let i = 0; i < this.numberOfGroups; i++) {
            this.group_Placeholder_Container.push(this.group_Placeholder_Container.length);
            this.selectedStudents[i] = new Array();
        }
    }
    // moveStudent(index : number)
    // {
    //   var pusnhToList = this.availableStudents.splice(index,1)[0];
    //   this.selectedStudents.push(pushToList);
    // }
    calculate_average(index) {
        let collaboration_total = 0;
        let communication_total = 0;
        let problem_total = 0;
        let project_management_total = 0;
        let group_discussion_total = 0;
        let group_length = this.selectedStudents[index].length;
        for (let i = 0; i < this.selectedStudents[index].length; i++) {
            collaboration_total += this.label_to_value(this.selectedStudents[index][i].collaboration);
            communication_total += this.label_to_value(this.selectedStudents[index][i].communication);
            problem_total += this.label_to_value(this.selectedStudents[index][i].problem);
            project_management_total += this.label_to_value(this.selectedStudents[index][i].project_management);
            group_discussion_total += this.label_to_value(this.selectedStudents[index][i].group_discussion);
        }
        let collaboration_average = collaboration_total / group_length;
        let communication_average = communication_total / group_length;
        let problem_average = problem_total / group_length;
        let project_management_average = project_management_total / group_length;
        let group_discussion_average = group_discussion_total / group_length;
        this.groupDesignValues = [];
    }
    dragStart(event, student) {
        this.draggedStudent = student;
    }
    drop(event, i) {
        if (this.draggedStudent) {
            let draggedStudentIndex = this.findIndex(this.draggedStudent);
            this.selectedStudents[i] = [...this.selectedStudents[i], this.draggedStudent];
            this.availableStudents = this.availableStudents.filter((val, i) => i != draggedStudentIndex);
            this.draggedStudent = null;
        }
    }
    dragEnd(event) {
        this.draggedStudent = null;
    }
    findIndex(student) {
        let index = -1;
        for (let i = 0; i < this.availableStudents.length; i++) {
            if (student.name === this.availableStudents[i].name) {
                index = i;
                break;
            }
        }
        return index;
    }
    findGroupIndex(student, ind) {
        let index = -1;
        for (let i = 0; i < this.selectedStudents[ind].length; i++) {
            if (student.name === this.selectedStudents[ind][i].name) {
                index = i;
                break;
            }
        }
        return index;
    }
    increment_groups() {
        this.numberOfGroups += 1;
        this.selectedStudents[this.numberOfGroups - 1] = new Array();
    }
    label_to_percentage(value) {
        let return_value = "";
        if (value == "Exemplary") {
            return_value = "70%";
        }
        if (value == "Accomplished") {
            return_value = "50%";
        }
        if (value == "Developing") {
            return_value = "30%";
        }
        return return_value;
    }
    label_to_value(value) {
        let return_value = 0;
        if (value == "Exemplary") {
            return_value = 100;
        }
        if (value == "Accomplished") {
            return_value = 70;
        }
        if (value == "Developing") {
            return_value = 50;
        }
        return return_value;
    }
    shortHand(value) {
        let return_value = "";
        if (value == "Exemplary") {
            return_value = "Exp";
        }
        if (value == "Accomplished") {
            return_value = "Acc";
        }
        if (value == "Developing") {
            return_value = "Dev";
        }
        return return_value;
    }
    setAtrributeStyle(value) {
        return "max width : " + value + ";";
    }
    sortAttributes(value) {
        let header_style_element = document.getElementsByClassName('group-header-desc');
        // console.log(value);
        if (value == 1) {
            this.availableStudents.sort((a, b) => a.collaboration.localeCompare(b.collaboration)).reverse();
            this.header_index = 0;
            console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#A9B9FF";
            }
        }
        if (value == 2) {
            this.availableStudents.sort((a, b) => a.communication.localeCompare(b.communication)).reverse();
            this.header_index = 1;
            // console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F47645";
            }
        }
        if (value == 3) {
            this.availableStudents.sort((a, b) => a.problem.localeCompare(b.problem)).reverse();
            this.header_index = 2;
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F7AA01";
            }
        }
        if (value == 4) {
            this.availableStudents.sort((a, b) => a.collaboration.localeCompare(b.project_management)).reverse();
            this.header_index = 3;
            // console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#7ACFDE";
            }
        }
        if (value == 5) {
            this.availableStudents.sort((a, b) => a.group_discussion.localeCompare(b.group_discussion)).reverse();
            this.header_index = 4;
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#FFA2DD";
                // header_style_element[i].style.animation = "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s;  -o-animation: fadein 1s; animation: fadein 1s;"
            }
            // console.log(this.header_index);
        }
    }
    removeGroupValue(student, index) {
        console.log(index);
        let StudentIndex = this.findGroupIndex(student, index);
        console.log(StudentIndex);
        this.availableStudents = [student, ...this.availableStudents];
        this.selectedStudents[index] = this.selectedStudents[index].filter((val, i) => i != StudentIndex);
    }
    labelScore(value) {
        if (value == "Exemplary")
            return "10";
        if (value == "Accomplished")
            return "7.5";
        if (value == "Developing")
            return "5";
    }
    formGroups(studentData, studentsPerGroup) {
        var jsonData = studentData;
        // Segregate male and female participants in roster for grouping
        var male_leadership = studentData.filter(el => el.gender == "Male");
        var female_leadership = studentData.filter(el => el.gender == "Female");
        var collaboration = studentData;
        var problem = studentData;
        var communication = studentData;
        var groupDiscussion = studentData;
        var size_groups = studentsPerGroup;
        // Sort groups, then form better groups
        male_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
        female_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
        // console.log(male_leadership, female_leadership);
        collaboration.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
        communication.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
        problem.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));
        // console.log(collaboration, communication, problem);
        var class_roster = [];
        var roster_size = jsonData.length;
        var no_of_groups = Math.floor(roster_size / size_groups);
        this.numberOfGroups = no_of_groups;
        for (let i = 0; i < no_of_groups; i++) {
            class_roster.push([]);
        }
        // console.log(class_roster);
        // **Grouping begins here**
        // Set leaders first based on equity
        let female_leaders = Math.floor(no_of_groups / 2);
        let male_leaders = no_of_groups - female_leaders;
        let remove_elements_array = [];
        console.log(female_leaders);
        for (let i = 0; i < female_leaders; i++) {
            class_roster[i].push(female_leadership.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        for (let i = female_leaders; i < female_leaders + male_leaders; i++) {
            class_roster[i].push(male_leadership.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        console.log(class_roster);
        console.log(remove_elements_array);
        for (let i in remove_elements_array) {
            communication = communication.filter(function (el) { return el.name != remove_elements_array[i]; });
            collaboration = collaboration.filter(function (el) { return el.name != remove_elements_array[i]; });
            problem = problem.filter(function (el) { return el.name != remove_elements_array[i]; });
            groupDiscussion = groupDiscussion.filter(function (el) { return el.name != remove_elements_array[i]; });
        }
        // Grouping on other 4 components begins here
        let remainder_roster = [communication, collaboration, problem, groupDiscussion];
        var round = 0;
        for (let i = 0; i < jsonData.length - female_leaders - male_leaders; i++) {
            if (round % 2 == 0) {
                var push_value = remainder_roster[i % 4].pop();
                class_roster[(i) % no_of_groups].push(push_value);
                console.log((i) % no_of_groups);
            }
            else {
                var push_value = remainder_roster[i % 4].pop();
                class_roster[(no_of_groups - 1) - (i % no_of_groups)].push(push_value);
                console.log((no_of_groups - 1) - (i % no_of_groups));
            }
            // Remember that the pool of users is shared, one of these is bound to be redundant
            // But I am too lazy to optimize for something with O(n) complexity to begin with
            remainder_roster[0] = remainder_roster[0].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[1] = remainder_roster[1].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[2] = remainder_roster[2].filter(function (el) { return el.name != push_value.name; });
            remainder_roster[3] = remainder_roster[3].filter(function (el) { return el.name != push_value.name; });
            if (i % no_of_groups == 0 && i != 0) {
                round += 1;
            }
        }
        console.log(class_roster);
        let undecided_class_roster = [];
        for (let i in class_roster) {
            if (class_roster[i].length > size_groups) {
                undecided_class_roster.push(class_roster[i].pop());
            }
            else {
                console.log(class_roster[i].length, size_groups);
            }
        }
        console.log(undecided_class_roster);
        var eval_class_roster = [];
        for (let i = 0; i < class_roster.length; i++) {
            var roster_total = 0;
            let roster_average = 0;
            var counter = 0;
            for (let j = 0; j < class_roster[i].length; j++) {
                let collaboration_score = this.labelScore(class_roster[i][j].collaboration);
                let communication_score = this.labelScore(class_roster[i][j].communication);
                let problem_score = this.labelScore(class_roster[i][j].problem);
                let groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
                roster_total = roster_total + 0.25 * parseFloat(collaboration_score) + 0.25 * parseFloat(communication_score) + 0.25 * parseFloat(problem_score) + 0.25 * parseFloat(groupDiscussion_score);
                counter += 1;
            }
            roster_average = roster_total / counter;
            eval_class_roster.push(roster_average);
        }
        // console.log(eval_class_roster);
        // Find lowest scoring groups and arrange accordingly
        let eval_class_roster_sorted = eval_class_roster.slice();
        eval_class_roster_sorted.sort();
        console.log(eval_class_roster_sorted);
        // console.log(eval_class_roster);
        // console.log(eval_class_roster_sorted);
        for (let i = 0; i < undecided_class_roster.length; i++) {
            let find_this_index = eval_class_roster_sorted[i];
            class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
        }
        console.log(class_roster);
        return class_roster;
    }
    smart_grouping() {
        for (let i = 0; i < this.selectedStudents.length; i++) {
            this.availableStudents = [...this.selectedStudents[i], ...this.availableStudents];
            // console.log(this.availableStudents);
            this.selectedStudents[i] = [];
        }
        // console.log(this.availableStudents);
        var class_roster = this.formGroups(this.availableStudents, this.studentsPerGroup);
        for (let i = 0; i < class_roster.length; i++) {
            this.selectedStudents[i] = class_roster[i];
        }
        this.availableStudents = [];
    }
};
GroupingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grouping',
        template: __webpack_require__(/*! raw-loader!./grouping.component.html */ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html"),
        styles: [__webpack_require__(/*! ./grouping.component.css */ "./src/app/grouping/grouping.component.css")]
    })
], GroupingComponent);



/***/ }),

/***/ "./src/app/grouping/smart-group/smart-group.component.css":
/*!****************************************************************!*\
  !*** ./src/app/grouping/smart-group/smart-group.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5nL3NtYXJ0LWdyb3VwL3NtYXJ0LWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/grouping/smart-group/smart-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/grouping/smart-group/smart-group.component.ts ***!
  \***************************************************************/
/*! exports provided: SmartGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartGroupComponent", function() { return SmartGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SmartGroupComponent = class SmartGroupComponent {
    constructor() {
        this.selectedStudents = new Array();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SmartGroupComponent.prototype, "selectedStudents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SmartGroupComponent.prototype, "index", void 0);
SmartGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smart-group',
        template: __webpack_require__(/*! raw-loader!./smart-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/grouping/smart-group/smart-group.component.html"),
        styles: [__webpack_require__(/*! ./smart-group.component.css */ "./src/app/grouping/smart-group/smart-group.component.css")]
    })
], SmartGroupComponent);



/***/ }),

/***/ "./src/app/grouping/student.ts":
/*!*************************************!*\
  !*** ./src/app/grouping/student.ts ***!
  \*************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
    constructor(image_source = "blank", name = "blank", gender = "blank", collaboration = "blank", problem = "blank", communication = "blank", group_discussion = "blank", project_management = "blank") {
        this.student_header = new Array();
        this.image_source = image_source;
        this.name = name;
        this.gender = gender;
        this.collaboration = collaboration;
        this.communication = communication;
        this.problem = problem;
        this.group_discussion = group_discussion;
        this.project_management = project_management;
        this.student_header = [this.collaboration, this.communication, this.problem, this.project_management, this.group_discussion];
    }
}
Student.ctorParameters = () => [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-component\r\n{\r\n    z-index: 1;\r\n}\r\nimg#klab-logo\r\n{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    margin-bottom: 5%;\r\n}\r\nimg#klab-name\r\n{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    \r\n    margin-bottom: 7%;\r\n    margin-left: -4%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7QUFDZDtBQUNBOztJQUVJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksNkJBQXFCO1lBQXJCLHFCQUFxQjs7SUFFckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29tcG9uZW50XHJcbntcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuaW1nI2tsYWItbG9nb1xyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuaW1nI2tsYWItbmFtZVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.homepage\r\n{\r\n    background-image: url(\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d2de932b8a66527697c8b55/img/home-vintage-texture-15.png\");\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    overflow: auto;\r\n}\r\n\r\nh1\r\n{\r\n    color: white;\r\n    font-size: 72px;\r\n    margin-left: 15%;\r\n    font-family: 'Trebuchet MS';\r\n}\r\n\r\n.button {\r\n    border-width: 3px;\r\n    border-color: black;\r\n    background-image: url(\"https://anima-uploads.s3.amazonaws.com/projects/5d280040f3c1a5b03fe80ee2/releases/5d2de932b8a66527697c8b55/img/home-vintage-texture-15.png\");\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 25px;\r\n    width : 200px;\r\n    height : 100px;\r\n    margin-right: 50px;\r\n    border-radius: 30px;\r\n    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.6);   \r\n    cursor: pointer; \r\n  }\r\n\r\n.button:active {\r\n    \r\n    background-color: gray;\r\n    box-shadow: inset 0px 0px 5px #c1c1c1;\r\n  }\r\n\r\n.courses\r\n  {\r\n    margin-top: 7%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.welcomediv\r\n  {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLG1LQUFtSztJQUNuSyxlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtS0FBbUs7SUFDbkssWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxlQUFlO0VBQ2pCOztBQUVBOztJQUVFLHNCQUFzQjtJQUdoQixxQ0FBcUM7RUFDN0M7O0FBQ0E7O0lBRUUsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBRUE7O0lBRUUsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ob21lcGFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FuaW1hLXVwbG9hZHMuczMuYW1hem9uYXdzLmNvbS9wcm9qZWN0cy81ZDI4MDA0MGYzYzFhNWIwM2ZlODBlZTIvcmVsZWFzZXMvNWQyZGU5MzJiOGE2NjUyNzY5N2M4YjU1L2ltZy9ob21lLXZpbnRhZ2UtdGV4dHVyZS0xNS5wbmdcIik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9hbmltYS11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vcHJvamVjdHMvNWQyODAwNDBmM2MxYTViMDNmZTgwZWUyL3JlbGVhc2VzLzVkMmRlOTMyYjhhNjY1Mjc2OTdjOGI1NS9pbWcvaG9tZS12aW50YWdlLXRleHR1cmUtMTUucG5nXCIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGggOiAyMDBweDtcclxuICAgIGhlaWdodCA6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7ICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAjYzFjMWMxO1xyXG4gICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggI2MxYzFjMTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4ICNjMWMxYzE7XHJcbiAgfVxyXG4gIC5jb3Vyc2VzXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAud2VsY29tZWRpdlxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/overtable/overtable.component.css":
/*!***************************************************!*\
  !*** ./src/app/overtable/overtable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-row:nth-child(even){\r\n    background-color:white;\r\n    }\r\n  \r\n  .mat-row:nth-child(odd){\r\n    background-color:rgba(247,247,247,1.0);\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnRhYmxlL292ZXJ0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCOztFQUVKO0lBQ0ksc0NBQXNDO0lBQ3RDIiwiZmlsZSI6InNyYy9hcHAvb3ZlcnRhYmxlL292ZXJ0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ3LDI0NywyNDcsMS4wKTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/overtable/overtable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/overtable/overtable.component.ts ***!
  \**************************************************/
/*! exports provided: OvertableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertableComponent", function() { return OvertableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");




const ELEMENT_DATA = [
    { serial_no: 1, name: 'Ariana Campbell', last_evaluation: false, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 2, name: 'Dan Smith', last_evaluation: true, last_check_in: 'Jun 15th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 3, name: 'Max Goldstein', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 4, name: 'Paige Voss', last_evaluation: true, last_check_in: 'Jun 2nd', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 5, name: 'Sawyer Strong', last_evaluation: false, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 6, name: 'Sam Smiley', last_evaluation: false, last_check_in: 'Jun 18th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 7, name: 'Eadric Granok', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Fair', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 8, name: 'Darby Gillett', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Needs work', group_discussion: '20% more' },
    { serial_no: 9, name: 'Isabell Plotsker', last_evaluation: false, last_check_in: 'Jun 15th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 10, name: 'Chris Campbell', last_evaluation: true, last_check_in: 'Jun 8th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 11, name: 'Chris Xie', last_evaluation: true, last_check_in: 'Jun 13th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
    { serial_no: 12, name: 'Erika Welda', last_evaluation: true, last_check_in: 'Jun 18th', collaboration: 'Good', communication: 'Good', problem_solving: 'Good', group_discussion: '20% more' },
];
let OvertableComponent = class OvertableComponent {
    constructor() {
        this.displayedColumns = ['serial_no', 'name', 'last_evaluation', 'last_check_in', 'collaboration', 'communication', 'problem_solving', 'group_discussion'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], OvertableComponent.prototype, "sort", void 0);
OvertableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overtable',
        template: __webpack_require__(/*! raw-loader!./overtable.component.html */ "./node_modules/raw-loader/index.js!./src/app/overtable/overtable.component.html"),
        styles: [__webpack_require__(/*! ./overtable.component.css */ "./src/app/overtable/overtable.component.css")]
    })
], OvertableComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rishi\Desktop\Final Project - Capstone\coalesce2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map