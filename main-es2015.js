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

module.exports = "<!-- <button (click) = \"toggleShowme()\"> Sort by </button>\n<h1 *ngIf = \"showSomething\" >hide me</h1> -->\n\n<mat-tab-group mat-stretch-tabs animationDuration=\"0ms\">\n        <mat-tab label=\"Grouping\"><app-grouping></app-grouping></mat-tab>\n        <mat-tab label=\"Dashboard\"><app-overtable> </app-overtable></mat-tab>\n</mat-tab-group>\n      \n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grouping/grouping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n        <span>☰ </span>\n        <span>{{item.value.name}}</span>\n</ng-template>\n        -->\n\n\n<!-- Fixed position div for rendering drag and drop interface for grouping -->\n<div class=\"hover_background_grouping\" *ngIf = \"toggleOverlayGrouping\">\n    <span class=\"conf-smart-grouping\"></span>\n    <div>\n        <div class=\"popupCloseButton\" (click) = toggleOverlay()>X</div>\n        <p>Drag and drop categories to be prioritized in making balanced student groups</p>\n            <div class=\"sortable-list-item\" [sortablejs] = \"groupingStrings\">\n                <div *ngFor = \"let item of groupingStrings\" class = \"priority-elements\">\n                    <span class= \"draggable-priority\">☰</span>\n                    <span>{{item.name}}</span>\n                </div>\n            </div>\n        <button class = \"save-priority\" (click) = \"toggleOverlay()\">Save</button>\n    </div>\n</div>\n          \n<!-- Row for rendering the overhead buttons -->\n<div class = \"button-row\">\n    <div class=\"dropdown\">\n        <button (click)=\"myFunction()\" class=\"dropbtn\">Sort by</button>\n        <div id=\"myDropdown\" class=\"dropdown-content\">\n            <a (click)=\"sortAttributes(1)\">Collaboration</a>\n            <a (click)=\"sortAttributes(2)\">Communication</a>\n            <a (click)=\"sortAttributes(3)\">Problem Solving</a>\n            <a (click)=\"sortAttributes(4)\">Project Management</a>\n            <a (click)=\"sortAttributes(5)\">Group Discussion</a>\n        </div>\n    </div>\n\n    <button class = \"configure-grouping\" (click)=\"toggleOverlay()\">Configure Grouping</button>\n\n    <button id = \"smart-grouping\" (click)=\"smart_grouping()\">Smart Grouping</button>\n    <button class = \"reset-groups\" (click)= \"reset_groups()\">Reset Groups</button>\n</div>\n    \n    <div class = \"parent-container\">\n        <!-- Div for rendering student cards -->\n        <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\n            <div *ngFor=\"let student of availableStudents; index as i\"  class=\"ui-helper-clearfix\" pDraggable=\"students\" (onDragStart)=\"dragStart($event,student)\" (onDragEnd)=\"dragEnd($event)\">\n                    \n                    <div class = \"student-profile-info\">\n                        <img class = \"student-image\" src = {{student.image_source}}>\n                        \n\n                        <div class = \"student-name\">\n                            <b>{{student.name}}</b>\n                        </div>\n                    </div>\n                    <!-- Div for rendering student performance -->\n                    <div class = \"student-performance\">\n\n                        <p class = \"group-header-desc\" ><b>{{student.student_header[header_index]}}</b></p>\n    \n                        <p class = \"line-desc\">Col</p>\n                        <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration) >              \n                        </div>\n                        \n                        \n                        <p class = \"line-desc\">Com</p>\n                        <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)>\n                        </div>\n\n                        \n                        <p class = \"line-desc\">P.S</p>\n                        <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)>\n                        </div>\n\n                        \n                        <p class = \"line-desc\">P.M</p>\n                        <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)>\n                        </div>\n\n                        \n                        <p class = \"line-desc\">G.D</p>\n                        <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)>\n\n                        </div>\n\n                    </div>\n            </div>\n            \n            \n    </div>\n\n    <div class = \"grouping-container\">\n        <button class = \"student-input-value\"(click) = toggleInput() ng-model = \"toggleInputValue\">✐</button>\n        <input class = \"student-input-box\" size = \"1\" min = \"1\" maxlength =\"2\" *ngIf = \"toggleInputValue\" [(ngModel)] = \"studentsPerGroup\" (keydown.enter) = \"toggleInput()\"> \n        <label class = \"student-group-describer\" *ngIf = \"!toggleInputValue\">{{studentsPerGroup}} </label>\n        <label class = \"label-white\">students/group</label>\n        <button class = \"save-button\" (click) = \"saveFunction()\">Save</button>\n        <button class = \"confirm-button\" (click) = \"confirmFunction()\">Confirm</button>\n        <br>\n        \n\n        <div class=\"ui-g-12 ui-md-6 drop-column\" *ngFor =\"let group of selectedStudents; index as i\"  [attr.data-index]=\"i\" pDroppable=\"students\" (onDrop)=\"drop($event,i)\" [ngClass]=\"{'ui-highlight-student':draggedStudent}\">\n            <div class = \"student-group-name\">\n                <p-table [value]=\"selectedStudents[i]\" >\n                    <ng-template pTemplate=\"body\" let-student>\n                        <tr>\n                            <td>{{student.name}}</td>\n                            <td><button mat-button class = \"button remove-button\" (click)=\"removeGroupValue(student, i)\"> - </button></td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n            <div class = \"group-avg-score\"> \n                    <div class=\"leaf leaf-1\" [ngClass] = \"groupDesignValues[i][0]\"></div>\n                    <div class=\"leaf leaf-2\" [ngClass] = \"groupDesignValues[i][1]\"></div>\n                    <div class=\"leaf leaf-3\" [ngClass] = \"groupDesignValues[i][2]\"></div>\n                    <div class=\"leaf leaf-4\" [ngClass] = \"groupDesignValues[i][3]\"></div>\n                    <div class=\"leaf leaf-5\" [ngClass] = \"groupDesignValues[i][4]\"></div>\n\n                    <!-- <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration)> </div>\n                    <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)></div>\n                    <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)></div>\n                    <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)></div>\n                    <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)></div> -->\n            </div>    \n        </div>\n        <div class=\"ui-g-12 ui-md-6 drop-column-addGroup\"  (click) = \"increment_groups()\">  \n                <div class = \"plus-sign-add\">\n                    <label class = \"plus-sign-label\">+</label>\n                </div>\n        </div>\n    </div>\n\n<!-- <script>\n    var line1 = document.getElementById('line1'));\n    line1.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n\n    var line2 = document.getElementById('line2'));\n    line2.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line3 = document.getElementById('line3'));\n    line3.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line4 = document.getElementById('line4'));\n    line4.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line5 = document.getElementById('line5'));\n    line5.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n\n</script> -->"

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

module.exports = "<!--\n<div>Icons made by <a href=\"https://www.flaticon.com/authors/mynamepong\" title=\"mynamepong\">mynamepong</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"             title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n<div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"             title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n<div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"             title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n<div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"             title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div>\n\n-->\n\n\n\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"serial_no\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let element\"> <img class=\"student-pictures\" src = {{element.image_source}}> </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>Name</b> </th>\n          <td mat-cell *matCellDef=\"let element\"> <b>{{element.name}} </b> </td>\n        </ng-container>\n      \n\n        <!-- <ng-container matColumnDef=\"last_evaluation\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Evaluation </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_evaluation}} </td>\n        </ng-container>\n      \n\n        <ng-container matColumnDef=\"last_check_in\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Check In </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.last_check_in}} </td>\n        </ng-container> -->\n\n\n        <ng-container matColumnDef=\"collaboration\">\n            \n            <th mat-header-cell *matHeaderCellDef mat-sort-header>  <b>Collaboration</b> </th>\n            <td mat-cell *matCellDef=\"let element\" class = {{element.collaboration}}> {{element.collaboration}} </td>\n        </ng-container>\n\n        <!--\n          <div class = \"image-header\"><img class = \"header-button\" src = \"/assets/images/icons/collaboration.png\"> </div>\n        -->\n\n        <ng-container matColumnDef=\"communication\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>Communication</b> </th>\n                <td mat-cell *matCellDef=\"let element\" class = {{element.communication}}> {{element.communication}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"problem_solving\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Problem Solving </b></th>\n          <td mat-cell *matCellDef=\"let element\" class = {{element.problem_solving}}> {{element.problem_solving}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"group_discussion\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header><b> Group Discussion </b></th>\n          <td mat-cell *matCellDef=\"let element\" class = {{element.group_discussion}}> {{element.group_discussion}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"project_management\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Project Management</b> </th>\n          <td mat-cell *matCellDef=\"let element\" class = {{element.project_management}}> {{element.project_management}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n"

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
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-sortablejs */ "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");




















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
            primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
            ngx_sortablejs__WEBPACK_IMPORTED_MODULE_18__["SortablejsModule"]
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

module.exports = "/* .mat-radio-button\r\n{\r\n    display: block;\r\n} */\r\n\r\n\r\n.reset-groups\r\n{\r\n  display: inline-block;\r\n  margin-left: 1%;\r\n  min-height: 40px;\r\n  background-color:#eee;\r\n  color : #F7AA01;\r\n  border : 1px solid #F7AA01;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.reset-groups:hover\r\n{\r\n  \r\n  background-color:#fff;\r\n  color : #F7AA01;\r\n  border : 2px solid #F7AA01;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.priority-elements\r\n{\r\n    min-width: 30px;\r\n    margin-top : 2%;\r\n    margin-bottom: 2%;\r\n    border: 1px solid black;\r\n\r\n}\r\n\r\n\r\n.draggable-priority\r\n{\r\n    float: left;\r\n    margin-left : 10px;\r\n}\r\n\r\n\r\n.save-priority\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.label-white\r\n{\r\n    color : white;\r\n    margin-left: 0.5%;\r\n}\r\n\r\n\r\n.configure-grouping\r\n{\r\n    background: transparent;\r\n    border : 2px solid #F7AA01;\r\n    margin-left: 5%;\r\n    min-height: 40px;\r\n    color: #F7AA01;\r\n    margin-right: 1%;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.configure-grouping:hover\r\n{\r\n    background-color: #F7AA01;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.hover_background_grouping{\r\n    background:rgba(0,0,0,.4);\r\n    cursor:pointer;\r\n    display:block;\r\n    height:100%;\r\n    position:fixed;\r\n    text-align:center;\r\n    top:0;\r\n    width:100%;\r\n    z-index:10000;\r\n}\r\n\r\n\r\n.hover_background_group .conf-smart-grouping{\r\n    display:inline-block;\r\n    height:100%;\r\n    vertical-align:middle;\r\n}\r\n\r\n\r\n.hover_background_grouping > div {\r\n    background-color: #fff;\r\n    box-shadow: 10px 10px 60px #555;\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 551px;\r\n    min-height: 100px;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n    position: absolute;\r\n    top : 40%;\r\n    right : 40%;\r\n    border-radius: 8px;\r\n    padding: 15px 5%;\r\n}\r\n\r\n\r\n.popupCloseButton {\r\n    background-color: #fff;\r\n    border: 3px solid #999;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: arial;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -20px;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.popupCloseButton:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n.student-group-describer\r\n{\r\n    color : white;\r\n}\r\n\r\n\r\n.add-group-list\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.add-group-list:hover\r\n{\r\n    color :orange;\r\n    border: 2px solid orange;\r\n}\r\n\r\n\r\n.student-input-value\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    margin-top: 4%;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.student-input-value:hover\r\n{\r\n    color : #F7AA01;\r\n    border: 2px solid #F7AA01;\r\n}\r\n\r\n\r\nbutton#smart-grouping\r\n{\r\n    display: inline-block;\r\n    min-height: 40px;\r\n    background-color:#F7AA01;\r\n    color : white;\r\n    border : 2px solid white;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n\r\nbutton.button.remove-button:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n\r\nbutton#smart-grouping:hover\r\n{\r\n    border : 2px solid gray;\r\n    cursor: pointer;   \r\n}\r\n\r\n\r\n.save-button\r\n{\r\n  display: inline-block;\r\n    \r\n    min-height: 24px;\r\n    background: transparent;\r\n    color : white;\r\n    border : 2px solid white;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n.save-button:hover\r\n{\r\n  background-color: white;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.confirm-button\r\n{\r\n  display: inline-block;\r\n  margin-left: 2%;\r\n  min-height: 24px;\r\n  background-color: white ;\r\n  color :black;\r\n  border : 2px solid white;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n\r\n}\r\n\r\n\r\n.confirm-button:hover\r\n{\r\n  background-color: #F7AA01;\r\n  border : 2px solid #F7AA01;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* find me */\r\n\r\n\r\n.ui-g-12.ui-md-6.ui-g-nopad.drag-column\r\n{\r\n    width: 70%;\r\n    min-width: 70%;\r\n    display: grid;\r\n    height: 50%;\r\n    grid-template-columns: 0.5fr 0.5fr 0.5fr;\r\n    grid-row-gap : 10px;\r\n    /* grid-column-gap : 5px; */\r\n    /* grid-template-rows: ; */\r\n    grid-auto-rows: -webkit-min-content;\r\n    grid-auto-rows: min-content;\r\n    position: relative;    \r\n\r\n}\r\n\r\n\r\n.plus-sign-add\r\n{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.plus-sign-label\r\n{\r\n  color:white;\r\n  font-size: 48px;\r\n}\r\n\r\n\r\n.ui-helper-clearfix.ng-star-inserted\r\n{\r\n    border: 1px solid gray;\r\n    width: 90%;\r\n    /* min-height : 200px; */\r\n    display: inline-block;\r\n    height: auto;\r\n    margin : 5px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 1px 1px 1px gray;\r\n}\r\n\r\n\r\n.ui-helper-clearfix.ng-star-inserted:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column-addGroup\r\n{\r\n    border: 1px dashed white;\r\n    width: 85%;\r\n    min-height : 200px;\r\n    height : 30%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: transparent;\r\n    /* box-shadow: 1px 1px 1px 1px black; */\r\n    text-align: center;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column-addGroup:hover\r\n{\r\n  border : 4px dashed white;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* find me */\r\n\r\n\r\n.parent-container\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-width: 100%;\r\n}\r\n\r\n\r\n/*find me*/\r\n\r\n\r\n.grouping-container\r\n{\r\n    width: 30%;\r\n    min-width: 30%;\r\n    display: inline-block;\r\n    background: gray;\r\n    height : 100%;\r\n    min-height : 600px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column.ng-star-inserted\r\n{\r\n    border: 1px solid black;\r\n    width: 85%;\r\n    min-height : 200px;\r\n    height : 20%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: white;\r\n    /* box-shadow: 1px 1px 1px 1px black; */\r\n    text-align: center;\r\n}\r\n\r\n\r\n.student-image \r\n{\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n}\r\n\r\n\r\n.student-name\r\n{\r\n    margin-left: 20px;\r\n    margin-top : 2px;\r\n    width : 20%;\r\n}\r\n\r\n\r\nmat-radio-group.mat-radio-group\r\n{\r\n    display: inline-block;\r\n    position : relative;\r\n    grid-column: 1 / span 1;\r\n    width: 100%;\r\n    \r\n    /*\r\n    margin-left: 3%; \r\n    margin-right: 9.7%;\r\n    margin-top: 7%; */\r\n}\r\n\r\n\r\nmat-radio-button\r\n{\r\n    margin-bottom: 2%;\r\n}\r\n\r\n\r\n.student-profile-info\r\n{\r\n    width : 40%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.student-performance\r\n{\r\n    display: inline-block;\r\n    width : 50%;\r\n    margin-left : 5%;\r\n}\r\n\r\n\r\np#sort-title\r\n{\r\n    margin-left : 3%;\r\n}\r\n\r\n\r\np.line-desc\r\n{\r\n    display: inline-block;\r\n    font-size : 11px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.line\r\n{\r\n    \r\n    min-height: 15px;\r\n    height : 5%;\r\n    margin-left: 20%;\r\n    box-sizing: border-box;\r\n    background: #000;\r\n    margin-top : -20%;\r\n    \r\n}\r\n\r\n\r\n.line-1\r\n{\r\n    \r\n    background: #A9B9FF;\r\n}\r\n\r\n\r\n.line-2 \r\n{\r\n    background: #F47645;\r\n}\r\n\r\n\r\n.line-3\r\n{\r\n    background: #F7AA01;\r\n}\r\n\r\n\r\n.line-4\r\n{\r\n    background: #7ACFDE;\r\n}\r\n\r\n\r\n.line-5\r\n{\r\n    background: #FFA2DD;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.button-row\r\n{\r\n  height : 40px;\r\n  width: 100%;\r\n  margin-top : 2%;\r\n  margin-bottom : 2%;\r\n}\r\n\r\n\r\n.button {\r\n    width: 25px;\r\n    height: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n\r\n.red-button {\r\n    background-color: #d3cfcf;\r\n    \r\n  }\r\n\r\n\r\n.group-header-desc\r\n{\r\n    color :#A9B9FF;\r\n}\r\n\r\n\r\n.add-group-text\r\n{\r\n    display: inline-block;\r\n    color: white;\r\n}\r\n\r\n\r\n.group-avg-score \r\n{\r\n    display: inline-block;\r\n    /* flex-direction: row; */\r\n    width: 40%;\r\n    height : 200px;\r\n    margin-top: 30%;\r\n    /* justify-content: center; */\r\n    \r\n    /* padding-left: 5%; */\r\n    \r\n    \r\n}\r\n\r\n\r\n.leaf {\r\n    position: absolute;\r\n    margin-left : 18%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background:white;\r\n    border-radius: 40px 0;\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n  }\r\n\r\n\r\n.leaf-1 {\r\n    -webkit-transform: rotate(-45deg) translate(4px, -4px);\r\n            transform: rotate(-45deg) translate(4px, -4px);\r\n    /* background: #A9B9FF; */\r\n    border : 2px solid #A9B9FF;\r\n  }\r\n\r\n\r\n.leaf-2 {\r\n    -webkit-transform: rotate(27deg) translate(4px, -4px);\r\n            transform: rotate(27deg) translate(4px, -4px);\r\n    /* background: #F47645; */\r\n    border : 2px solid #F47645;\r\n  }\r\n\r\n\r\n.leaf-3 {\r\n    -webkit-transform: rotate(99deg) translate(4px, -4px);\r\n            transform: rotate(99deg) translate(4px, -4px);\r\n    /* background:  #F7AA01; */\r\n    border : 2px solid #F7AA01;\r\n  }\r\n\r\n\r\n.leaf-4 {\r\n    -webkit-transform: rotate(171deg) translate(4px, -4px);\r\n            transform: rotate(171deg) translate(4px, -4px);\r\n    /* background:  #7ACFDE; */\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5 {\r\n    -webkit-transform: rotate(243deg) translate(4px, -4px);\r\n            transform: rotate(243deg) translate(4px, -4px);\r\n    /* background: #FFA2DD; */\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n/*Unfortunately CSS doesn't allow for appending to properties, so these need to be redeclared\r\n  for each class of petals for all 5 petals*/\r\n\r\n\r\n.leaf-1.exemplary\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(1.0) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(1.0) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.exemplary {\r\n    -webkit-transform: rotate(27deg) scale(1.0) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(1.0) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.exemplary{\r\n    -webkit-transform: rotate(99deg) translate(4px, -4px);\r\n            transform: rotate(99deg) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.exemplary {\r\n    -webkit-transform: rotate(171deg) translate(4px, -4px);\r\n            transform: rotate(171deg) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.exemplary{\r\n    -webkit-transform: rotate(243deg) translate(4px, -4px);\r\n            transform: rotate(243deg) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n.leaf-1.accomplished\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(0.75) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.accomplished {\r\n    -webkit-transform: rotate(27deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(0.75) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.accomplished{\r\n    -webkit-transform: rotate(99deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(99deg) scale(0.75) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.accomplished {\r\n    -webkit-transform: rotate(171deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(171deg) scale(0.75) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.accomplished{\r\n    -webkit-transform: rotate(243deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(243deg) scale(0.75) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n.leaf-1.developing\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(0.5) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.developing {\r\n    -webkit-transform: rotate(27deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(0.5) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.developing{\r\n    -webkit-transform: rotate(99deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(99deg) scale(0.5) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.developing {\r\n    -webkit-transform: rotate(171deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(171deg) scale(0.5) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.developing{\r\n    -webkit-transform: rotate(243deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(243deg) scale(0.5) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n/*Sorting button container*/\r\n\r\n\r\n.dropbtn {\r\n    background-color : #f1f1f1;\r\n    color: black;\r\n    font-size: 16px;\r\n    border: none;\r\n    border : 2px solid gray;\r\n    border-radius: 5px;\r\n    height : 40px;\r\n  }\r\n\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    /* float: right; */\r\n    width : 5%;\r\n    margin-left : 60%;\r\n  }\r\n\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n/* Links inside the dropdown */\r\n\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n\r\n\r\n.student-group-name\r\n  {\r\n      width : 50%;\r\n      height : 100%;\r\n      display: inline-block;\r\n      margin-top: 10%;\r\n      margin-left: 10px;;\r\n      \r\n  }\r\n\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n\r\n.dropdown-content a:hover {background-color: #ddd; cursor: pointer;}\r\n\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41; color: white; cursor: pointer; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7OztBQUdIOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7OztBQUVBOztJQUVJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1Qjs7QUFFM0I7OztBQUNBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjs7O0FBQ0E7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsS0FBSztJQUNMLFVBQVU7SUFDVixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JB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O0VBQ2hCOzs7QUFFQTs7TUFFSSxXQUFXO01BQ1gsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsaUJBQWlCOztFQUVyQjs7O0FBSUEsNENBQTRDOzs7QUFDNUMsMkJBQTJCLHNCQUFzQixFQUFFLGVBQWUsQ0FBQzs7O0FBRW5FLG9DQUFvQzs7O0FBQ3BDLG1DQUFtQyxjQUFjLENBQUM7OztBQUVsRCwwRkFBMEY7OztBQUMxRiwwQkFBMEIseUJBQXlCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5nL2dyb3VwaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWF0LXJhZGlvLWJ1dHRvblxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSAqL1xyXG5cclxuXHJcbi5yZXNldC1ncm91cHNcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbiAgY29sb3IgOiAjRjdBQTAxO1xyXG4gIGJvcmRlciA6IDFweCBzb2xpZCAjRjdBQTAxO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucmVzZXQtZ3JvdXBzOmhvdmVyXHJcbntcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgY29sb3IgOiAjRjdBQTAxO1xyXG4gIGJvcmRlciA6IDJweCBzb2xpZCAjRjdBQTAxO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaW9yaXR5LWVsZW1lbnRzXHJcbntcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIG1hcmdpbi10b3AgOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG59XHJcbi5kcmFnZ2FibGUtcHJpb3JpdHlcclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbn1cclxuLnNhdmUtcHJpb3JpdHlcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubGFiZWwtd2hpdGVcclxue1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xyXG59XHJcblxyXG4uY29uZmlndXJlLWdyb3VwaW5nXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkICNGN0FBMDE7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNGN0FBMDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbmZpZ3VyZS1ncm91cGluZzpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdBQTAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaG92ZXJfYmFja2dyb3VuZF9ncm91cGluZ3tcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNCk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OjEwMDAwO1xyXG59XHJcblxyXG4uaG92ZXJfYmFja2dyb3VuZF9ncm91cCAuY29uZi1zbWFydC1ncm91cGluZ3tcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuLmhvdmVyX2JhY2tncm91bmRfZ3JvdXBpbmcgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA2MHB4ICM1NTU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDU1MXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcCA6IDQwJTtcclxuICAgIHJpZ2h0IDogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA1JTtcclxufVxyXG4ucG9wdXBDbG9zZUJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb3B1cENsb3NlQnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLnN0dWRlbnQtZ3JvdXAtZGVzY3JpYmVyXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuXHJcbi5hZGQtZ3JvdXAtbGlzdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmFkZC1ncm91cC1saXN0OmhvdmVyXHJcbntcclxuICAgIGNvbG9yIDpvcmFuZ2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuXHJcbi5zdHVkZW50LWlucHV0LXZhbHVlXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnN0dWRlbnQtaW5wdXQtdmFsdWU6aG92ZXJcclxue1xyXG4gICAgY29sb3IgOiAjRjdBQTAxO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y3QUEwMTtcclxufVxyXG5cclxuYnV0dG9uI3NtYXJ0LWdyb3VwaW5nXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGN0FBMDE7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbi5idXR0b24ucmVtb3ZlLWJ1dHRvbjpob3ZlclxyXG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b24jc21hcnQtZ3JvdXBpbmc6aG92ZXJcclxue1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm0tYnV0dG9uXHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xyXG4gIGNvbG9yIDpibGFjaztcclxuICBib3JkZXIgOiAycHggc29saWQgd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29uZmlybS1idXR0b246aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0FBMDE7XHJcbiAgYm9yZGVyIDogMnB4IHNvbGlkICNGN0FBMDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIGZpbmQgbWUgKi9cclxuLnVpLWctMTIudWktbWQtNi51aS1nLW5vcGFkLmRyYWctY29sdW1uXHJcbntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMC41ZnIgMC41ZnI7XHJcbiAgICBncmlkLXJvdy1nYXAgOiAxMHB4O1xyXG4gICAgLyogZ3JpZC1jb2x1bW4tZ2FwIDogNXB4OyAqL1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA7ICovXHJcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxyXG5cclxufVxyXG5cclxuLnBsdXMtc2lnbi1hZGRcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnBsdXMtc2lnbi1sYWJlbFxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4udWktaGVscGVyLWNsZWFyZml4Lm5nLXN0YXItaW5zZXJ0ZWRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvKiBtaW4taGVpZ2h0IDogMjAwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyYXk7XHJcbn1cclxuXHJcbi51aS1oZWxwZXItY2xlYXJmaXgubmctc3Rhci1pbnNlcnRlZDpob3ZlclxyXG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWktZy0xMi51aS1tZC02LmRyb3AtY29sdW1uLWFkZEdyb3VwXHJcbntcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtaW4taGVpZ2h0IDogMjAwcHg7XHJcbiAgICBoZWlnaHQgOiAzMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbiA6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGJsYWNrOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udWktZy0xMi51aS1tZC02LmRyb3AtY29sdW1uLWFkZEdyb3VwOmhvdmVyXHJcbntcclxuICBib3JkZXIgOiA0cHggZGFzaGVkIHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogZmluZCBtZSAqL1xyXG4ucGFyZW50LWNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbi8qZmluZCBtZSovXHJcbi5ncm91cGluZy1jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIGhlaWdodCA6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0IDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51aS1nLTEyLnVpLW1kLTYuZHJvcC1jb2x1bW4ubmctc3Rhci1pbnNlcnRlZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtaW4taGVpZ2h0IDogMjAwcHg7XHJcbiAgICBoZWlnaHQgOiAyMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbiA6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGJsYWNrOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnN0dWRlbnQtaW1hZ2UgXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5cclxuLnN0dWRlbnQtbmFtZVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3AgOiAycHg7XHJcbiAgICB3aWR0aCA6IDIwJTtcclxufVxyXG5cclxubWF0LXJhZGlvLWdyb3VwLm1hdC1yYWRpby1ncm91cFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLypcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkuNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTsgKi9cclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uc3R1ZGVudC1wcm9maWxlLWluZm9cclxue1xyXG4gICAgd2lkdGggOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnN0dWRlbnQtcGVyZm9ybWFuY2Vcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGggOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDUlO1xyXG59XHJcblxyXG5wI3NvcnQtdGl0bGVcclxue1xyXG4gICAgbWFyZ2luLWxlZnQgOiAzJTtcclxufVxyXG5cclxucC5saW5lLWRlc2Ncclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplIDogMTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi5saW5lXHJcbntcclxuICAgIFxyXG4gICAgbWluLWhlaWdodDogMTVweDtcclxuICAgIGhlaWdodCA6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcCA6IC0yMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmxpbmUtMVxyXG57XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNBOUI5RkY7XHJcbn1cclxuXHJcblxyXG4ubGluZS0yIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ3NjQ1O1xyXG59XHJcblxyXG4ubGluZS0zXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNGN0FBMDE7XHJcbn1cclxuXHJcbi5saW5lLTRcclxue1xyXG4gICAgYmFja2dyb3VuZDogIzdBQ0ZERTtcclxufVxyXG5cclxuLmxpbmUtNVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZBMkREO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3dcclxue1xyXG4gIGhlaWdodCA6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcCA6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b20gOiAyJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuLnJlZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzY2ZjZjtcclxuICAgIFxyXG4gIH1cclxuXHJcbi5ncm91cC1oZWFkZXItZGVzY1xyXG57XHJcbiAgICBjb2xvciA6I0E5QjlGRjtcclxufVxyXG5cclxuLmFkZC1ncm91cC10ZXh0XHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5ncm91cC1hdmctc2NvcmUgXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0IDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIFxyXG4gICAgLyogcGFkZGluZy1sZWZ0OiA1JTsgKi9cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5sZWFmIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMTglO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFmLTEge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNBOUI5RkY7ICovXHJcbiAgICBib3JkZXIgOiAycHggc29saWQgI0E5QjlGRjtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyN2RlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjRjQ3NjQ1OyAqL1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkICNGNDc2NDU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFmLTMge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTlkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgLyogYmFja2dyb3VuZDogICNGN0FBMDE7ICovXHJcbiAgICBib3JkZXIgOiAycHggc29saWQgI0Y3QUEwMTtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtNCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzFkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgLyogYmFja2dyb3VuZDogICM3QUNGREU7ICovXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN0FDRkRFO1xyXG4gIH1cclxuICBcclxuICAubGVhZi01IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0M2RlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjRkZBMkREOyAqL1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGQTJERDtcclxuICB9XHJcblxyXG4gIC8qVW5mb3J0dW5hdGVseSBDU1MgZG9lc24ndCBhbGxvdyBmb3IgYXBwZW5kaW5nIHRvIHByb3BlcnRpZXMsIHNvIHRoZXNlIG5lZWQgdG8gYmUgcmVkZWNsYXJlZFxyXG4gIGZvciBlYWNoIGNsYXNzIG9mIHBldGFscyBmb3IgYWxsIDUgcGV0YWxzKi9cclxuXHJcbiAgLmxlYWYtMS5leGVtcGxhcnlcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTlCOUZGO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxLjApIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gIH1cclxuXHJcbiAgLmxlYWYtMi5leGVtcGxhcnkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjdkZWcpIHNjYWxlKDEuMCkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ3NjQ1O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi0zLmV4ZW1wbGFyeXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDk5ZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjRjdBQTAxO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi00LmV4ZW1wbGFyeSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzFkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogICM3QUNGREU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN0FDRkRFO1xyXG4gIH1cclxuICBcclxuICAubGVhZi01LmV4ZW1wbGFyeXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0M2RlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZBMkREO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGQTJERDtcclxuICB9XHJcblxyXG4gIC5sZWFmLTEuYWNjb21wbGlzaGVkXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogI0E5QjlGRjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC43NSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgfVxyXG5cclxuICAubGVhZi0yLmFjY29tcGxpc2hlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyN2RlZykgc2NhbGUoMC43NSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ3NjQ1O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi0zLmFjY29tcGxpc2hlZHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDk5ZGVnKSBzY2FsZSgwLjc1KSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjRjdBQTAxO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi00LmFjY29tcGxpc2hlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzFkZWcpIHNjYWxlKDAuNzUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogICM3QUNGREU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN0FDRkRFO1xyXG4gIH1cclxuICBcclxuICAubGVhZi01LmFjY29tcGxpc2hlZHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0M2RlZykgc2NhbGUoMC43NSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZBMkREO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGQTJERDtcclxuICB9XHJcblxyXG4gIC5sZWFmLTEuZGV2ZWxvcGluZ1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOUI5RkY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgfVxyXG5cclxuICAubGVhZi0yLmRldmVsb3Bpbmcge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjdkZWcpIHNjYWxlKDAuNSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ3NjQ1O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi0zLmRldmVsb3Bpbmd7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5OWRlZykgc2NhbGUoMC41KSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjRjdBQTAxO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubGVhZi00LmRldmVsb3Bpbmcge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTcxZGVnKSBzY2FsZSgwLjUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogICM3QUNGREU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN0FDRkRFO1xyXG4gIH1cclxuICBcclxuICAubGVhZi01LmRldmVsb3Bpbmd7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDNkZWcpIHNjYWxlKDAuNSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZBMkREO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGQTJERDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuLypTb3J0aW5nIGJ1dHRvbiBjb250YWluZXIqL1xyXG4uZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YxZjFmMTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0IDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIHdpZHRoIDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zdHVkZW50LWdyb3VwLW5hbWVcclxuICB7XHJcbiAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICBoZWlnaHQgOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7O1xyXG4gICAgICBcclxuICB9IFxyXG5cclxuICBcclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxOyBjb2xvcjogd2hpdGU7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4iXX0= */"

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
        this.groupingStrings = new Array();
    }
    ngOnInit() {
        this.numberOfGroups = 4;
        this.studentsPerGroup = 4;
        // Header index references the header on student card
        this.header_index = 0;
        this.toggleInputValue = false;
        this.toggleOverlayGrouping = false;
        this.header_string = "";
        // Datasource rendering available students
        var dataSource = [
            { image_source: '', name: 'Ariana Campbell', gender: "Female", collaboration: 'Exemplary', communication: 'Accomplished', problem_solving: 'Developing', group_discussion: 'Accomplished', project_management: 'Accomplished' },
            { image_source: '', name: 'Dan Sawyer', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Max Goldberg', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Paige Braun', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Sawyer Sam', gender: "Male", collaboration: 'Accomplished', communication: 'Accomplished', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Sam Leighburg', gender: "Female", collaboration: 'Developing', communication: 'Exemplary', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Eadric Garrett', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Darby Pilsner', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Isabell Terry', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
            { image_source: '', name: 'Chris Jones', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
            { image_source: '', name: 'Chris Walker', gender: "Male", collaboration: 'Developing', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
            { image_source: '', name: 'Erika Portman', gender: "Female", collaboration: 'Exemplary', communication: 'Accomplished', problem_solving: 'Accomplished', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Audrey Farwell', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Accomplished' },
            { image_source: '', name: 'Mark Cosinberg', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Accomplished', group_discussion: 'Accomplished', project_management: 'Accomplished' },
            { image_source: '', name: 'Leana Banks', gender: "Female", collaboration: 'Developing', communication: 'Accomplished', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
            { image_source: '', name: 'Jon Whittaker', gender: "Female", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Accomplished', project_management: 'Exemplary' },
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
            this.groupDesignValues[i] = new Array();
        }
        var collaboration_sorted = this.availableStudents.sort((a, b) => a.collaboration.localeCompare(b.collaboration)).reverse();
        var communication_sorted = this.availableStudents.sort((a, b) => a.communication.localeCompare(b.communication)).reverse();
        var problem_sorted = this.availableStudents.sort((a, b) => a.problem.localeCompare(b.problem)).reverse();
        var project_management_sorted = this.availableStudents.sort((a, b) => a.collaboration.localeCompare(b.project_management)).reverse();
        var group_discussion_sorted = this.availableStudents.sort((a, b) => a.group_discussion.localeCompare(b.group_discussion)).reverse();
        this.availableStudents = collaboration_sorted;
        this.groupingStrings =
            [
                { name: "Project Management", value: project_management_sorted },
                { name: "Collaboration", value: collaboration_sorted },
                { name: "Communication", value: communication_sorted },
                { name: "Problem Solving", value: problem_sorted },
                { name: "Group Discussion", value: group_discussion_sorted },
            ];
    }
    // moveStudent(index : number)
    // {
    //   var pusnhToList = this.availableStudents.splice(index,1)[0];
    //   this.selectedStudents.push(pushToList);
    // }
    saveFunction() {
        alert("Saved grouping!");
    }
    confirmFunction() {
        alert("Confirmed grouping!");
    }
    toggleInput() {
        if (this.toggleInputValue == true) {
            if (typeof this.studentsPerGroup === "string") {
                if (!isNaN(this.studentsPerGroup) && Number(this.studentsPerGroup) > 0) {
                    this.toggleInputValue = !this.toggleInputValue;
                }
                else {
                    alert("Please enter a valid number greater than 0");
                }
            }
            else {
                alert("Please enter a valid number!");
            }
        }
        else {
            this.toggleInputValue = !this.toggleInputValue;
        }
    }
    toggleOverlay(value) {
        if (value == true) {
            // Do the sortableJS component here
        }
        this.toggleOverlayGrouping = !this.toggleOverlayGrouping;
        console.log(this.groupingStrings);
    }
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
        this.groupDesignValues[index] = [this.labelDesignValues(collaboration_average), this.labelDesignValues(communication_average), this.labelDesignValues(problem_average), this.labelDesignValues(project_management_average), this.labelDesignValues(group_discussion_average)];
    }
    labelDesignValues(value) {
        if (value >= 75) {
            return "exemplary";
        }
        if (value >= 50 && value < 75) {
            return "accomplished";
        }
        else {
            return "developing";
        }
    }
    dragStart(event, student) {
        this.draggedStudent = student;
    }
    drop(event, index) {
        if (this.draggedStudent) {
            let draggedStudentIndex = this.findIndex(this.draggedStudent);
            this.selectedStudents[index] = [...this.selectedStudents[index], this.draggedStudent];
            this.availableStudents = this.availableStudents.filter((val, i) => i != draggedStudentIndex);
            this.draggedStudent = null;
            this.calculate_average(index);
            console.log(this.groupDesignValues[index]);
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
    removeGroupValue(student, index) {
        let StudentIndex = this.findGroupIndex(student, index);
        this.availableStudents = [student, ...this.availableStudents];
        this.selectedStudents[index] = this.selectedStudents[index].filter((val, i) => i != StudentIndex);
        if (this.selectedStudents[index].length == 0) {
            this.groupDesignValues[index] = ["", "", "", "", ""];
        }
        else {
            this.calculate_average(index);
        }
    }
    reset_groups() {
        for (let i = 0; i < this.selectedStudents.length; i++) {
            for (let j = 0; j < this.selectedStudents[i].length; j++) {
                this.availableStudents = [...this.availableStudents, this.selectedStudents[i][j]];
            }
            this.selectedStudents[i] = [];
            this.groupDesignValues[i] = [];
        }
    }
    increment_groups() {
        this.numberOfGroups += 1;
        this.selectedStudents[this.numberOfGroups - 1] = new Array();
        this.groupDesignValues[this.numberOfGroups - 1] = ["", "", "", "", ""];
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
    setAtrributeStyle(value) {
        return "max width : " + value + ";";
    }
    sortAttributes(value) {
        let header_style_element = document.getElementsByClassName('group-header-desc');
        // console.log(value);
        if (value == 1) {
            this.availableStudents.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
            // this.availableStudents.sort((a,b) => this.labelScore(a.collaboration).localeCompare(this.labelScore(b.collaboration)));
            this.header_index = 0;
            // console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#A9B9FF";
            }
        }
        if (value == 2) {
            this.availableStudents.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
            this.header_index = 1;
            // console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F47645";
            }
        }
        if (value == 3) {
            this.availableStudents.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));
            this.header_index = 2;
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F7AA01";
            }
        }
        if (value == 4) {
            this.availableStudents.sort((a, b) => parseFloat(this.labelScore(b.project_management)) - parseFloat(this.labelScore(a.project_management)));
            this.header_index = 3;
            // console.log(this.header_index);
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#7ACFDE";
            }
        }
        if (value == 5) {
            this.availableStudents.sort((a, b) => parseFloat(this.labelScore(b.group_discussion)) - parseFloat(this.labelScore(a.group_discussion)));
            this.header_index = 4;
            for (let i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#FFA2DD";
                // header_style_element[i].style.animation = "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s;  -o-animation: fadein 1s; animation: fadein 1s;"
            }
            // console.log(this.header_index);
        }
    }
    labelScore(value) {
        if (value == "Exemplary")
            return "10";
        if (value == "Accomplished")
            return "7.5";
        if (value == "Developing")
            return "5";
    }
    smart_grouping() {
        for (let i = 0; i < this.selectedStudents.length; i++) {
            this.availableStudents = [...this.selectedStudents[i], ...this.availableStudents];
            // console.log(this.availableStudents);
            this.selectedStudents[i] = [];
        }
        // console.log(this.availableStudents);
        var priority_list = [];
        for (let i = 0; i < this.groupingStrings.length; i++) {
            priority_list.push(this.groupingStrings[i].value);
        }
        var class_roster = this.formPriorityGroups(this.availableStudents, this.studentsPerGroup, priority_list);
        for (let i = 0; i < class_roster.length; i++) {
            this.selectedStudents[i] = class_roster[i];
            this.calculate_average(i);
        }
        this.availableStudents = [];
    }
    formPriorityGroups(studentData, studentsPerGroup, priority_list) {
        var jsonData = studentData;
        // Segregate male and female participants in roster for grouping
        var male_priority = priority_list[0].filter(el => el.gender == "Male");
        var female_priority = priority_list[0].filter(el => el.gender == "Female");
        var priority_2 = priority_list[1];
        var priority_3 = priority_list[2];
        var priority_4 = priority_list[3];
        var priority_5 = priority_list[4];
        var size_groups = studentsPerGroup;
        // Sort groups, then form better groups
        // male_priority.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
        // female_priority.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
        // // console.log(male_leadership, female_leadership);
        // collaboration.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
        // communication.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
        // problem.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));
        // console.log(collaboration, communication, problem);
        var class_roster = [];
        var roster_size = jsonData.length;
        var no_of_groups = Math.floor(roster_size / size_groups);
        if (this.groupDesignValues.length > no_of_groups) {
            this.selectedStudents.splice(no_of_groups - 1, this.groupDesignValues.length - no_of_groups);
            this.groupDesignValues.splice(no_of_groups - 1, this.groupDesignValues.length - no_of_groups);
        }
        this.numberOfGroups = no_of_groups;
        for (let i = 0; i < no_of_groups; i++) {
            class_roster.push([]);
        }
        // **Grouping begins here**
        // Set leaders first based on equity
        let female_leaders = Math.floor(no_of_groups / 2);
        let male_leaders = no_of_groups - female_leaders;
        let remove_elements_array = [];
        // console.log(female_leaders);
        for (let i = 0; i < female_leaders; i++) {
            class_roster[i].push(female_priority.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        for (let i = female_leaders; i < female_leaders + male_leaders; i++) {
            class_roster[i].push(male_priority.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        // console.log(class_roster); 
        // console.log(remove_elements_array); 
        for (let i in remove_elements_array) {
            priority_2 = priority_2.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_3 = priority_3.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_4 = priority_4.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_5 = priority_5.filter(function (el) { return el.name != remove_elements_array[i]; });
        }
        // Grouping on other 4 components begins here
        let remainder_roster = [priority_2, priority_3, priority_4, priority_5];
        var round = 0;
        for (let i = 0; i < jsonData.length - female_leaders - male_leaders; i++) {
            if (round % 2 == 0) {
                var push_value = remainder_roster[i % 4].pop();
                class_roster[(i) % no_of_groups].push(push_value);
                // console.log((i)%no_of_groups);
            }
            else {
                var push_value = remainder_roster[i % 4].pop();
                class_roster[(no_of_groups - 1) - (i % no_of_groups)].push(push_value);
                // console.log((no_of_groups-1)-(i%no_of_groups));
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
        // console.log(class_roster);
        let undecided_class_roster = [];
        for (let i in class_roster) {
            if (class_roster[i].length > size_groups) {
                undecided_class_roster.push(class_roster[i].pop());
            }
            else {
            }
        }
        // console.log(undecided_class_roster);
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
        // console.log(eval_class_roster_sorted);
        // console.log(eval_class_roster);
        // console.log(eval_class_roster_sorted);
        for (let i = 0; i < undecided_class_roster.length; i++) {
            let find_this_index = eval_class_roster_sorted[i];
            class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
        }
        // console.log(class_roster);
        return class_roster;
    }
};
GroupingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grouping',
        template: __webpack_require__(/*! raw-loader!./grouping.component.html */ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html"),
        styles: [__webpack_require__(/*! ./grouping.component.css */ "./src/app/grouping/grouping.component.css")]
    })
], GroupingComponent);

// Archived work for forming gender balanced groups
/*

formEquitableGroups(studentData : Student[], studentsPerGroup : number)
{
    
      var jsonData = studentData;
      // Segregate male and female participants in roster for grouping
      var male_leadership  =  studentData.filter(el => el.gender == "Male");
      var female_leadership  = studentData.filter(el => el.gender == "Female");

      var collaboration =  studentData;
      var problem =  studentData;
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
      var no_of_groups = Math.floor(roster_size/size_groups);

      this.numberOfGroups = no_of_groups;




      for (let i = 0; i < no_of_groups;i++)
      {
          class_roster.push([]);
      }
      // console.log(class_roster);


      // **Grouping begins here**


      // Set leaders first based on equity

      let female_leaders = Math.floor(no_of_groups/2);

      let male_leaders = no_of_groups - female_leaders;

      let remove_elements_array = [];

      console.log(female_leaders);

      for(let i = 0; i< female_leaders;i++)
          {
              class_roster[i].push(female_leadership.pop());
              remove_elements_array.push(class_roster[i][0].name);
          }

      for(let i = female_leaders; i< female_leaders+male_leaders;i++)
          {
              class_roster[i].push(male_leadership.pop());
              remove_elements_array.push(class_roster[i][0].name);
          }

        console.log(class_roster);
        console.log(remove_elements_array);

      for (let i in remove_elements_array)
      {
          communication = communication.filter(function(el){ return el.name != remove_elements_array[i]; });
          collaboration = collaboration.filter(function(el){ return el.name != remove_elements_array[i]; });
          problem = problem.filter(function(el){ return el.name != remove_elements_array[i]; });
          groupDiscussion = groupDiscussion.filter(function(el){ return el.name != remove_elements_array[i]; });
      }

      // Grouping on other 4 components begins here

      let remainder_roster = [communication, collaboration, problem, groupDiscussion];

      var round = 0;

      for(let i = 0; i < jsonData.length - female_leaders - male_leaders; i++)
      {
          
          if(round %2 == 0)
          {
            var push_value = remainder_roster[i%4].pop()
            class_roster[(i)%no_of_groups].push(push_value);
            console.log((i)%no_of_groups);
          }

          else
          {
            var push_value = remainder_roster[i%4].pop()
            class_roster[(no_of_groups-1)-(i%no_of_groups)].push(push_value);
            console.log((no_of_groups-1)-(i%no_of_groups));
          }
          // Remember that the pool of users is shared, one of these is bound to be redundant
          // But I am too lazy to optimize for something with O(n) complexity to begin with

          remainder_roster[0] = remainder_roster[0].filter(function(el){ return el.name != push_value.name });
          remainder_roster[1] = remainder_roster[1].filter(function(el){ return el.name != push_value.name });
          remainder_roster[2] = remainder_roster[2].filter(function(el){ return el.name != push_value.name });
          remainder_roster[3] = remainder_roster[3].filter(function(el){ return el.name != push_value.name });

          if(i%no_of_groups ==0 && i!=0)
          {
              round += 1;
          }

      }

      // console.log(class_roster);

      let undecided_class_roster = [];

      for (let i in class_roster)
      {
          if(class_roster[i].length > size_groups)
          {
              undecided_class_roster.push(class_roster[i].pop());
          }
          else
          {
              console.log(class_roster[i].length, size_groups );
          }
      }

      console.log(undecided_class_roster);
      var eval_class_roster = [];

      for (let i = 0; i < class_roster.length; i++)
      {
          var roster_total = 0;
          let roster_average = 0;
          var counter = 0;
          for (let j = 0; j< class_roster[i].length; j++)
          {
              let collaboration_score = this.labelScore(class_roster[i][j].collaboration);
              let communication_score = this.labelScore(class_roster[i][j].communication);
              let problem_score = this.labelScore(class_roster[i][j].problem);
              let groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
              roster_total = roster_total + 0.25*parseFloat(collaboration_score) + 0.25*parseFloat(communication_score) + 0.25*parseFloat(problem_score)+ 0.25*parseFloat(groupDiscussion_score);
              counter += 1;
          }

          roster_average = roster_total/counter;

          eval_class_roster.push(roster_average);
      }

      // console.log(eval_class_roster);

      // Find lowest scoring groups and arrange accordingly

      let eval_class_roster_sorted = eval_class_roster.slice();

      eval_class_roster_sorted.sort();

      for( let i = 0 ; i < undecided_class_roster.length; i++)
      {
          let find_this_index = eval_class_roster_sorted[i];
          class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
      }

      console.log(class_roster);
      return class_roster;
  }
*/ 


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

module.exports = "table {\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-row:nth-child(even){\r\n    background-color:white;\r\n    }\r\n  \r\n  .mat-row:nth-child(odd){\r\n    background-color:rgba(247,247,247,1.0);\r\n    }\r\n  \r\n  img.student-pictures\r\n  {\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n  }\r\n  \r\n  td.Exemplary.ng-star-inserted\r\n  {\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    color : green;\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: rgba(0,0,0,.12);\r\n  }\r\n  \r\n  td.Accomplished.ng-star-inserted\r\n  {\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    color : orange;\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: rgba(0,0,0,.12);\r\n  }\r\n  \r\n  td.Developing.ng-star-inserted\r\n  {\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    color : red;\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: rgba(0,0,0,.12);\r\n  }\r\n  \r\n  img.header-button\r\n  {\r\n    -webkit-transform: scale(0.1);\r\n            transform: scale(0.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnRhYmxlL292ZXJ0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCOztFQUVKO0lBQ0ksc0NBQXNDO0lBQ3RDOztFQUdGOztJQUVFLGtCQUFrQjtJQUNsQiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0VBQ3RDOztFQUVBOztJQUVFLCtDQUErQztJQUMvQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0VBQ3RDOztFQUVBOztJQUVFLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0VBQ3RDOztFQUVBOztJQUVFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9vdmVydGFibGUvb3ZlcnRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDcsMjQ3LDI0NywxLjApO1xyXG4gICAgfVxyXG5cclxuICBcclxuICBpbWcuc3R1ZGVudC1waWN0dXJlc1xyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICB9XHJcblxyXG4gIHRkLkV4ZW1wbGFyeS5uZy1zdGFyLWluc2VydGVkXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yIDogZ3JlZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XHJcbiAgfVxyXG5cclxuICB0ZC5BY2NvbXBsaXNoZWQubmctc3Rhci1pbnNlcnRlZFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvciA6IG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgdGQuRGV2ZWxvcGluZy5uZy1zdGFyLWluc2VydGVkXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yIDogcmVkO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xyXG4gIH1cclxuXHJcbiAgaW1nLmhlYWRlci1idXR0b25cclxuICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgfSJdfQ== */"

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




// var ELEMENT_DATA: classTable[] = [
//   {serial_no: 1, name: 'Ariana Campbell',last_evaluation : false, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 2, name: 'Dan Smith',last_evaluation : true, last_check_in: 'Jun 15th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 3, name: 'Max Goldstein',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 4, name: 'Paige Voss',last_evaluation : true, last_check_in: 'Jun 2nd', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 5, name: 'Sawyer Strong',last_evaluation : false, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 6, name: 'Sam Smiley',last_evaluation : false, last_check_in: 'Jun 18th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 7, name: 'Eadric Granok',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Fair', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 8, name: 'Darby Gillett',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Needs work', group_discussion : '20% more'},
//   {serial_no: 9, name: 'Isabell Plotsker',last_evaluation : false, last_check_in: 'Jun 15th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 10, name: 'Chris Campbell',last_evaluation : true, last_check_in: 'Jun 8th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 11, name: 'Chris Xie',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
//   {serial_no: 12, name: 'Erika Welda',last_evaluation : true, last_check_in: 'Jun 18th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
// ];
var ELEMENT_DATA = [
    { image_source: '', name: 'Ariana Campbell', gender: "Female", collaboration: 'Exemplary', communication: 'Accomplished', problem_solving: 'Developing', group_discussion: 'Accomplished', project_management: 'Accomplished' },
    { image_source: '', name: 'Dan Sawyer', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
    { image_source: '', name: 'Max Goldberg', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Accomplished' },
    { image_source: '', name: 'Paige Braun', gender: "Female", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
    { image_source: '', name: 'Sawyer Sam', gender: "Male", collaboration: 'Accomplished', communication: 'Accomplished', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
    { image_source: '', name: 'Sam Leighburg', gender: "Female", collaboration: 'Developing', communication: 'Exemplary', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
    { image_source: '', name: 'Eadric Garrett', gender: "Male", collaboration: 'Accomplished', communication: 'Developing', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
    { image_source: '', name: 'Darby Pilsner', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Exemplary' },
    { image_source: '', name: 'Isabell Terry', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Exemplary' },
    { image_source: '', name: 'Chris Jones', gender: "Male", collaboration: 'Exemplary', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Exemplary', project_management: 'Accomplished' },
    { image_source: '', name: 'Chris Walker', gender: "Male", collaboration: 'Developing', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Exemplary', project_management: 'Developing' },
    { image_source: '', name: 'Erika Portman', gender: "Female", collaboration: 'Exemplary', communication: 'Accomplished', problem_solving: 'Accomplished', group_discussion: 'Developing', project_management: 'Exemplary' },
    { image_source: '', name: 'Audrey Farwell', gender: "Female", collaboration: 'Accomplished', communication: 'Exemplary', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Accomplished' },
    { image_source: '', name: 'Mark Cosinberg', gender: "Male", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Accomplished', group_discussion: 'Accomplished', project_management: 'Accomplished' },
    { image_source: '', name: 'Leana Banks', gender: "Female", collaboration: 'Developing', communication: 'Accomplished', problem_solving: 'Exemplary', group_discussion: 'Developing', project_management: 'Exemplary' },
    { image_source: '', name: 'Jon Whittaker', gender: "Female", collaboration: 'Exemplary', communication: 'Developing', problem_solving: 'Developing', group_discussion: 'Accomplished', project_management: 'Exemplary' },
];
for (let i = 0; i < ELEMENT_DATA.length; i++) {
    ELEMENT_DATA[i].image_source = '/assets/images/Student' + i.toString() + ".jpeg";
}
let OvertableComponent = class OvertableComponent {
    constructor() {
        this.displayedColumns = ['serial_no', 'name', 'collaboration', 'communication', 'problem_solving', 'group_discussion', 'project_management'];
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