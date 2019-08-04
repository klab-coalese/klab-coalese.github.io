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

module.exports = "\n<!-- <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n        <span>☰ </span>\n        <span>{{item.value.name}}</span>\n</ng-template>\n        -->\n\n<div class=\"hover_background_grouping\" *ngIf = \"toggleOverlayGrouping\">\n    <span class=\"conf-smart-grouping\"></span>\n    <div>\n        <div class=\"popupCloseButton\" (click) = toggleOverlay()>X</div>\n        <p>Drag and drop categories to be prioritized in making balanced student groups</p>\n            <div class=\"sortable-list-item\" [sortablejs] = \"groupingStrings\">\n                <div *ngFor = \"let item of groupingStrings\" class = \"priority-elements\">\n                    <span class= \"draggable-priority\">☰</span>\n                    <span>{{item.name}}</span>\n                </div>\n            </div>\n        <button class = \"save-priority\" (click) = \"toggleOverlay()\">Save</button>\n    </div>\n    \n</div>\n                    \n\n    <div class=\"dropdown\">\n        <button (click)=\"myFunction()\" class=\"dropbtn\">Sort by</button>\n        <div id=\"myDropdown\" class=\"dropdown-content\">\n            <a (click)=\"sortAttributes(1)\">Collaboration</a>\n            <a (click)=\"sortAttributes(2)\">Communication</a>\n            <a (click)=\"sortAttributes(3)\">Problem Solving</a>\n            <a (click)=\"sortAttributes(4)\">Project Management</a>\n            <a (click)=\"sortAttributes(5)\">Group Discussion</a>\n        </div>\n    </div>\n\n    <button class = \"configure-grouping\" (click)=\"toggleOverlay()\">Configure Grouping</button>\n\n    <button id = \"smart-grouping\" (click)=\"smart_grouping()\">Smart Grouping</button>\n    <button class = \"reset-groups\" (click)= \"reset_groups()\">Reset Groups</button>\n    <!-- <label class = \"label-white\">Smart Grouping</label> -->\n\n    <!-- <label class = \"label-white\">Configure Grouping</label>         -->\n\n    <div class = \"parent-container\">\n        <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\n                <!-- <mat-radio-group aria-label=\"Sort students by\"> \n                        <mat-radio-button value=\"1\" id = \"button1\" style=\"color: #A9B9FF\" (click)=\"sortAttributes(1)\">Collaboration</mat-radio-button>\n                        <mat-radio-button value=\"2\" id = \"button2\" style=\"color: #F47645\" (click)=\"sortAttributes(2)\">Communication</mat-radio-button>\n                        <mat-radio-button value=\"3\" id = \"button3\" style=\"color: #F7AA01\" (click)=\"sortAttributes(3)\">Problem Solving</mat-radio-button>\n                        <mat-radio-button value=\"4\" id = \"button4\" style=\"color: #7ACFDE\" (click)=\"sortAttributes(4)\">Project Management</mat-radio-button>\n                        <mat-radio-button value=\"5\" id = \"button5\" style=\"color: #FFA2DD\" (click)=\"sortAttributes(5)\">Group discussion</mat-radio-button>\n                </mat-radio-group>  -->\n\n            <!-- optionLabel=\"name\" (onChange)=\"sortAttributes($event)\" -->\n            <div *ngFor=\"let student of availableStudents; index as i\"  class=\"ui-helper-clearfix\" pDraggable=\"students\" (onDragStart)=\"dragStart($event,student)\" (onDragEnd)=\"dragEnd($event)\">\n                    \n                    <div class = \"student-profile-info\">\n                        <img class = \"student-image\" src = {{student.image_source}}>\n                        \n\n                        <div class = \"student-name\">\n                            <b>{{student.name}}</b>\n                        </div>\n                    </div>\n                    <div class = \"student-performance\">\n\n                        <p class = \"group-header-desc\" ><b>{{student.student_header[header_index]}}</b></p>\n    <!-- \n                        <p class = \"line-desc\">{{shortHand(student.collaboration)}}</p> -->\n                        <p class = \"line-desc\">Col</p>\n                        <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration) >\n                                        \n                        </div>\n                        \n                        <!-- <p class = \"line-desc\">{{shortHand(student.communication)}}</p> -->\n                        <p class = \"line-desc\">Com</p>\n                        <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)>\n\n                        </div>\n\n                        <!-- <p class = \"line-desc\">{{shortHand(student.problem)}}</p> -->\n                        <p class = \"line-desc\">P.S</p>\n                        <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)>\n\n                        </div>\n\n                        <!-- <p class = \"line-desc\">{{shortHand(student.project_management)}}</p> -->\n                        <p class = \"line-desc\">P.M</p>\n                        <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)>\n\n                        </div>\n\n                        <!-- <p class = \"line-desc\">{{shortHand(student.group_discussion)}}</p> -->\n                        <p class = \"line-desc\">G.D</p>\n                        <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)>\n\n                        </div>\n\n                    </div>\n            </div>\n            \n            \n    </div>\n\n    <div class = \"grouping-container\">\n        <!-- <button class = \"add-group-list\" (click)=\"increment_groups()\"> +</button> <p class = \"add-group-text\">Add group</p> -->\n        <button class = \"student-input-value\"(click) = toggleInput() ng-model = \"toggleInputValue\">✐</button>\n        <input class = \"student-input-box\" size = \"1\" maxlength =\"2\" *ngIf = \"toggleInputValue\" [(ngModel)] = \"studentsPerGroup\" (keydown.enter) = \"toggleInput()\"> \n        <label class = \"student-group-describer\" *ngIf = \"!toggleInputValue\">{{studentsPerGroup}} </label>\n        <label class = \"label-white\">students/group</label>\n        <button class = \"save-button\" (click) = \"saveFunction()\">Save</button>\n        <button class = \"confirm-button\" (click) = \"confirmFunction()\">Confirm</button>\n        <br>\n        \n\n        <div class=\"ui-g-12 ui-md-6 drop-column\" *ngFor =\"let group of selectedStudents; index as i\"  [attr.data-index]=\"i\" pDroppable=\"students\" (onDrop)=\"drop($event,i)\" [ngClass]=\"{'ui-highlight-student':draggedStudent}\">\n            <div class = \"student-group-name\">\n                <p-table [value]=\"selectedStudents[i]\" >\n                    <ng-template pTemplate=\"body\" let-student>\n                        <tr>\n                            <td>{{student.name}}</td>\n                            <td><button mat-button class = \"button red-button\" (click)=\"removeGroupValue(student, i)\"> - </button></td>\n            \n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n            <div class = \"group-avg-score\"> \n                    <div class=\"leaf leaf-1\" [ngClass] = \"groupDesignValues[i][0]\"></div>\n                    <div class=\"leaf leaf-2\" [ngClass] = \"groupDesignValues[i][1]\"></div>\n                    <div class=\"leaf leaf-3\" [ngClass] = \"groupDesignValues[i][2]\"></div>\n                    <div class=\"leaf leaf-4\" [ngClass] = \"groupDesignValues[i][3]\"></div>\n                    <div class=\"leaf leaf-5\" [ngClass] = \"groupDesignValues[i][4]\"></div>\n\n                    <!-- <div class = \"line line-1\" [style.width] =label_to_percentage(student.collaboration)> </div>\n                    <div class = \"line line-2\" [style.width] =label_to_percentage(student.communication)></div>\n                    <div class = \"line line-3\" [style.width] =label_to_percentage(student.problem)></div>\n                    <div class = \"line line-4\" [style.width] =label_to_percentage(student.project_management)></div>\n                    <div class = \"line line-5\" [style.width] =label_to_percentage(student.group_discussion)></div> -->\n            </div>    \n        </div>\n        <div class=\"ui-g-12 ui-md-6 drop-column-addGroup\"  (click) = \"increment_groups()\">  \n                <div class = \"plus-sign-add\">\n                    <label class = \"plus-sign-label\">+</label>\n                </div>\n        </div>\n    </div>\n\n<!-- <script>\n    var line1 = document.getElementById('line1'));\n    line1.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n\n    var line2 = document.getElementById('line2'));\n    line2.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line3 = document.getElementById('line3'));\n    line3.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line4 = document.getElementById('line4'));\n    line4.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n    var line5 = document.getElementById('line5'));\n    line5.setAttribute('style', this.setAtrributeStyle(this.label_to_percentage(student.collaboration)));\n    \n\n</script> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import {Router} from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _overtable_overtable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overtable/overtable.component */ "./src/app/overtable/overtable.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grouping/grouping.component */ "./src/app/grouping/grouping.component.ts");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dragdrop */ "./node_modules/primeng/dragdrop.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dragdrop__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _grouping_smart_group_smart_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./grouping/smart-group/smart-group.component */ "./src/app/grouping/smart-group/smart-group.component.ts");
/* harmony import */ var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-sortablejs */ "./node_modules/ngx-sortablejs/fesm5/ngx-sortablejs.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    // toggleShowme()
    // {
    //   this.showSomething = !this.showSomething;
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.studentlist = new Array<string>();
        // this.showSomething = false;
        // this.dataSource.sort = this.sort;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/grouping/grouping.component.css":
/*!*************************************************!*\
  !*** ./src/app/grouping/grouping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mat-radio-button\r\n{\r\n    display: block;\r\n} */\r\n\r\n\r\n.reset-groups\r\n{\r\n  display: inline-block;\r\n  margin-left: 1%;\r\n  min-height: 40px;\r\n  background-color:#eee;\r\n  color : #F7AA01;\r\n  border : 1px solid #F7AA01;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.reset-groups:hover\r\n{\r\n  \r\n  background-color:#fff;\r\n  color : #F7AA01;\r\n  border : 2px solid #F7AA01;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.priority-elements\r\n{\r\n    min-width: 30px;\r\n    margin-top : 2%;\r\n    margin-bottom: 2%;\r\n    border: 1px solid black;\r\n\r\n}\r\n\r\n\r\n.draggable-priority\r\n{\r\n    float: left;\r\n    margin-left : 10px;\r\n}\r\n\r\n\r\n.save-priority\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.label-white\r\n{\r\n    color : white;\r\n    margin-left: 0.5%;\r\n}\r\n\r\n\r\n.configure-grouping\r\n{\r\n    background: transparent;\r\n    border : 2px solid #F7AA01;\r\n    margin-left: 5%;\r\n    min-height: 40px;\r\n    color: #F7AA01;\r\n    margin-right: 1%;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.configure-grouping:hover\r\n{\r\n    background-color: #F7AA01;\r\n    color: white;\r\n}\r\n\r\n\r\n.hover_background_grouping{\r\n    background:rgba(0,0,0,.4);\r\n    cursor:pointer;\r\n    display:block;\r\n    height:100%;\r\n    position:fixed;\r\n    text-align:center;\r\n    top:0;\r\n    width:100%;\r\n    z-index:10000;\r\n}\r\n\r\n\r\n.hover_background_group .conf-smart-grouping{\r\n    display:inline-block;\r\n    height:100%;\r\n    vertical-align:middle;\r\n}\r\n\r\n\r\n.hover_background_grouping > div {\r\n    background-color: #fff;\r\n    box-shadow: 10px 10px 60px #555;\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 551px;\r\n    min-height: 100px;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n    position: absolute;\r\n    top : 40%;\r\n    right : 40%;\r\n    border-radius: 8px;\r\n    padding: 15px 5%;\r\n}\r\n\r\n\r\n.popupCloseButton {\r\n    background-color: #fff;\r\n    border: 3px solid #999;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: arial;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -20px;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.popupCloseButton:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n.student-group-describer\r\n{\r\n    color : white;\r\n}\r\n\r\n\r\n.add-group-list\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.add-group-list:hover\r\n{\r\n    color :orange;\r\n    border: 2px solid orange;\r\n}\r\n\r\n\r\n.student-input-value\r\n{\r\n    background: transparent;\r\n    border: 2px solid white;\r\n    margin-left: 3%;\r\n    color: white;\r\n    margin-right: 3%;\r\n    margin-top: 4%;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.student-input-value:hover\r\n{\r\n    color : #F7AA01;\r\n    border: 2px solid #F7AA01;\r\n}\r\n\r\n\r\nbutton#smart-grouping\r\n{\r\n    display: inline-block;\r\n    /* margin-left: 8%; */\r\n    min-height: 40px;\r\n    background-color:#F7AA01;\r\n    color : white;\r\n    border : 2px solid white;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n\r\nbutton#smart-grouping:hover\r\n{\r\n    border : 2px solid gray;   \r\n}\r\n\r\n\r\n.save-button\r\n{\r\n  display: inline-block;\r\n    \r\n    min-height: 24px;\r\n    background: transparent;\r\n    color : white;\r\n    border : 2px solid white;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n.save-button:hover\r\n{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n\r\n.confirm-button\r\n{\r\n  display: inline-block;\r\n  margin-left: 2%;\r\n  min-height: 24px;\r\n  background-color: white ;\r\n  color :black;\r\n  border : 2px solid white;\r\n  font-size: 14px;\r\n  border-radius: 10px;\r\n\r\n}\r\n\r\n\r\n.confirm-button:hover\r\n{\r\n  background-color: #F7AA01;\r\n  border : 2px solid #F7AA01;\r\n  color: white;\r\n}\r\n\r\n\r\n/* find me */\r\n\r\n\r\n.ui-g-12.ui-md-6.ui-g-nopad.drag-column\r\n{\r\n    width: 70%;\r\n    min-width: 70%;\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 0.5fr 0.5fr 0.5fr;\r\n    grid-row-gap : 10px;\r\n    /* grid-column-gap : 5px; */\r\n    /* grid-template-rows: ; */\r\n    grid-auto-rows: -webkit-min-content;\r\n    grid-auto-rows: min-content;\r\n    position: relative;    \r\n\r\n}\r\n\r\n\r\n.plus-sign-add\r\n{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.plus-sign-label\r\n{\r\n  color:white;\r\n  font-size: 48px;\r\n}\r\n\r\n\r\n.ui-helper-clearfix.ng-star-inserted\r\n{\r\n    border: 1px solid gray;\r\n    width: 90%;\r\n    min-height : 200;\r\n    display: inline-block;\r\n    \r\n    margin : 5px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 1px 1px 1px gray;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column-addGroup\r\n{\r\n    border: 1px dashed white;\r\n    width: 85%;\r\n    min-height : 200px;\r\n    height : 30%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: transparent;\r\n    /* box-shadow: 1px 1px 1px 1px black; */\r\n    text-align: center;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column-addGroup:hover\r\n{\r\n  border : 4px dashed white;\r\n}\r\n\r\n\r\n/* find me */\r\n\r\n\r\n.parent-container\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-width: 100%;\r\n    padding-top: 2%;\r\n    \r\n    \r\n}\r\n\r\n\r\n/*find me*/\r\n\r\n\r\n.grouping-container\r\n{\r\n    width: 30%;\r\n    min-width: 30%;\r\n    display: inline-block;\r\n    background: gray;\r\n    height : 100%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.ui-g-12.ui-md-6.drop-column.ng-star-inserted\r\n{\r\n    border: 1px solid black;\r\n    width: 85%;\r\n    min-height : 200px;\r\n    height : 30%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin : 5%;\r\n    border-radius: 10px;\r\n    background: white;\r\n    /* box-shadow: 1px 1px 1px 1px black; */\r\n    text-align: center;\r\n}\r\n\r\n\r\n.student-image \r\n{\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n}\r\n\r\n\r\n.student-name\r\n{\r\n    margin-left: 20px;\r\n    margin-top : 2px;\r\n    width : 20%;\r\n}\r\n\r\n\r\nmat-radio-group.mat-radio-group\r\n{\r\n    display: inline-block;\r\n    position : relative;\r\n    grid-column: 1 / span 1;\r\n    width: 100%;\r\n    \r\n    /*\r\n    margin-left: 3%; \r\n    margin-right: 9.7%;\r\n    margin-top: 7%; */\r\n}\r\n\r\n\r\nmat-radio-button\r\n{\r\n    margin-bottom: 2%;\r\n}\r\n\r\n\r\n.student-profile-info\r\n{\r\n    width : 40%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.student-performance\r\n{\r\n    display: inline-block;\r\n    width : 50%;\r\n    margin-left : 5%;\r\n}\r\n\r\n\r\np#sort-title\r\n{\r\n    margin-left : 3%;\r\n}\r\n\r\n\r\np.line-desc\r\n{\r\n    display: inline-block;\r\n    font-size : 11px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.line\r\n{\r\n    \r\n    height: 15px;\r\n    \r\n    margin-left: 20%;\r\n    box-sizing: border-box;\r\n    background: #000;\r\n    margin-top : -20%;\r\n    \r\n}\r\n\r\n\r\n.line-1\r\n{\r\n    \r\n    background: #A9B9FF;\r\n}\r\n\r\n\r\n.line-2 \r\n{\r\n    background: #F47645;\r\n}\r\n\r\n\r\n.line-3\r\n{\r\n    background: #F7AA01;\r\n}\r\n\r\n\r\n.line-4\r\n{\r\n    background: #7ACFDE;\r\n}\r\n\r\n\r\n.line-5\r\n{\r\n    background: #FFA2DD;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.button {\r\n    width: 25px;\r\n    height: 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n\r\n.red-button {\r\n    background-color: #d3cfcf;\r\n    \r\n  }\r\n\r\n\r\n.group-header-desc\r\n{\r\n    color :#A9B9FF;\r\n}\r\n\r\n\r\n.add-group-text\r\n{\r\n    display: inline-block;\r\n    color: white;\r\n}\r\n\r\n\r\n.group-avg-score \r\n{\r\n    display: inline-block;\r\n    /* flex-direction: row; */\r\n    width: 40%;\r\n    height : 200px;\r\n    margin-top: 30%;\r\n    /* justify-content: center; */\r\n    \r\n    /* padding-left: 5%; */\r\n    \r\n    \r\n}\r\n\r\n\r\n.leaf {\r\n    position: absolute;\r\n    margin-left : 18%;\r\n    width: 40px;\r\n    height: 40px;\r\n    background:white;\r\n    border-radius: 40px 0;\r\n    -webkit-transform-origin: left bottom;\r\n            transform-origin: left bottom;\r\n  }\r\n\r\n\r\n.leaf-1 {\r\n    -webkit-transform: rotate(-45deg) translate(4px, -4px);\r\n            transform: rotate(-45deg) translate(4px, -4px);\r\n    /* background: #A9B9FF; */\r\n    border : 2px solid #A9B9FF;\r\n  }\r\n\r\n\r\n.leaf-2 {\r\n    -webkit-transform: rotate(27deg) translate(4px, -4px);\r\n            transform: rotate(27deg) translate(4px, -4px);\r\n    /* background: #F47645; */\r\n    border : 2px solid #F47645;\r\n  }\r\n\r\n\r\n.leaf-3 {\r\n    -webkit-transform: rotate(99deg) translate(4px, -4px);\r\n            transform: rotate(99deg) translate(4px, -4px);\r\n    /* background:  #F7AA01; */\r\n    border : 2px solid #F7AA01;\r\n  }\r\n\r\n\r\n.leaf-4 {\r\n    -webkit-transform: rotate(171deg) translate(4px, -4px);\r\n            transform: rotate(171deg) translate(4px, -4px);\r\n    /* background:  #7ACFDE; */\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5 {\r\n    -webkit-transform: rotate(243deg) translate(4px, -4px);\r\n            transform: rotate(243deg) translate(4px, -4px);\r\n    /* background: #FFA2DD; */\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n/*Unfortunately CSS doesn't allow for appending to properties, so these need to be redeclared\r\n  for each class of petals for all 5 petals*/\r\n\r\n\r\n.leaf-1.exemplary\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(1.0) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(1.0) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.exemplary {\r\n    -webkit-transform: rotate(27deg) scale(1.0) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(1.0) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.exemplary{\r\n    -webkit-transform: rotate(99deg) translate(4px, -4px);\r\n            transform: rotate(99deg) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.exemplary {\r\n    -webkit-transform: rotate(171deg) translate(4px, -4px);\r\n            transform: rotate(171deg) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.exemplary{\r\n    -webkit-transform: rotate(243deg) translate(4px, -4px);\r\n            transform: rotate(243deg) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n.leaf-1.accomplished\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(0.75) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.accomplished {\r\n    -webkit-transform: rotate(27deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(0.75) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.accomplished{\r\n    -webkit-transform: rotate(99deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(99deg) scale(0.75) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.accomplished {\r\n    -webkit-transform: rotate(171deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(171deg) scale(0.75) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.accomplished{\r\n    -webkit-transform: rotate(243deg) scale(0.75) translate(4px, -4px);\r\n            transform: rotate(243deg) scale(0.75) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n.leaf-1.developing\r\n  {\r\n    background: #A9B9FF;\r\n    -webkit-transform: rotate(-45deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(-45deg) scale(0.5) translate(4px, -4px);\r\n  }\r\n\r\n\r\n.leaf-2.developing {\r\n    -webkit-transform: rotate(27deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(27deg) scale(0.5) translate(4px, -4px);\r\n    background: #F47645;\r\n    \r\n  }\r\n\r\n\r\n.leaf-3.developing{\r\n    -webkit-transform: rotate(99deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(99deg) scale(0.5) translate(4px, -4px);\r\n    background:  #F7AA01;\r\n    \r\n  }\r\n\r\n\r\n.leaf-4.developing {\r\n    -webkit-transform: rotate(171deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(171deg) scale(0.5) translate(4px, -4px);\r\n    background:  #7ACFDE;\r\n    border: 2px solid #7ACFDE;\r\n  }\r\n\r\n\r\n.leaf-5.developing{\r\n    -webkit-transform: rotate(243deg) scale(0.5) translate(4px, -4px);\r\n            transform: rotate(243deg) scale(0.5) translate(4px, -4px);\r\n    background: #FFA2DD;\r\n    border: 2px solid #FFA2DD;\r\n  }\r\n\r\n\r\n/*Sorting button container*/\r\n\r\n\r\n.dropbtn {\r\n    background-color : #f1f1f1;\r\n    color: black;\r\n    font-size: 16px;\r\n    border: none;\r\n    border : 1px solid black;\r\n    border-radius: 5px;\r\n    margin-top : 10px;\r\n    height : 40px;\r\n    \r\n  }\r\n\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    /* float: right; */\r\n    width : 5%;\r\n    margin-left : 60%;\r\n  }\r\n\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n/* Links inside the dropdown */\r\n\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n\r\n\r\n.student-group-name\r\n  {\r\n      width : 50%;\r\n      height : 100%;\r\n      display: inline-block;\r\n      margin-top: 10%;\r\n      margin-left: 10px;;\r\n      \r\n  }\r\n\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41; color: white; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7OztBQUdIOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7O0FBRTNCOzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7OztBQUNBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7OztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsS0FBSztJQUNMLFVBQVU7SUFDVixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNw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RCwwRkFBMEY7OztBQUMxRiwwQkFBMEIseUJBQXlCLEVBQUUsWUFBWSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBpbmcvZ3JvdXBpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtcmFkaW8tYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG5cclxuLnJlc2V0LWdyb3Vwc1xyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2VlZTtcclxuICBjb2xvciA6ICNGN0FBMDE7XHJcbiAgYm9yZGVyIDogMXB4IHNvbGlkICNGN0FBMDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXNldC1ncm91cHM6aG92ZXJcclxue1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICBjb2xvciA6ICNGN0FBMDE7XHJcbiAgYm9yZGVyIDogMnB4IHNvbGlkICNGN0FBMDE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1lbGVtZW50c1xyXG57XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wIDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxufVxyXG4uZHJhZ2dhYmxlLXByaW9yaXR5XHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG59XHJcbi5zYXZlLXByaW9yaXR5XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmxhYmVsLXdoaXRlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcclxufVxyXG5cclxuLmNvbmZpZ3VyZS1ncm91cGluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCAjRjdBQTAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjRjdBQTAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb25maWd1cmUtZ3JvdXBpbmc6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3QUEwMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvdmVyX2JhY2tncm91bmRfZ3JvdXBpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgei1pbmRleDoxMDAwMDtcclxufVxyXG5cclxuLmhvdmVyX2JhY2tncm91bmRfZ3JvdXAgLmNvbmYtc21hcnQtZ3JvdXBpbmd7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcbi5ob3Zlcl9iYWNrZ3JvdW5kX2dyb3VwaW5nID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNjBweCAjNTU1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1NTFweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3AgOiA0MCU7XHJcbiAgICByaWdodCA6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNSU7XHJcbn1cclxuLnBvcHVwQ2xvc2VCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9wdXBDbG9zZUJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdHVkZW50LWdyb3VwLWRlc2NyaWJlclxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLWdyb3VwLWxpc3Rcclxue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hZGQtZ3JvdXAtbGlzdDpob3ZlclxyXG57XHJcbiAgICBjb2xvciA6b3JhbmdlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xyXG59XHJcblxyXG4uc3R1ZGVudC1pbnB1dC12YWx1ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zdHVkZW50LWlucHV0LXZhbHVlOmhvdmVyXHJcbntcclxuICAgIGNvbG9yIDogI0Y3QUEwMTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGN0FBMDE7XHJcbn1cclxuXHJcbmJ1dHRvbiNzbWFydC1ncm91cGluZ1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogOCU7ICovXHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjdBQTAxO1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG5idXR0b24jc21hcnQtZ3JvdXBpbmc6aG92ZXJcclxue1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIGdyYXk7ICAgXHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29uZmlybS1idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWluLWhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7XHJcbiAgY29sb3IgOmJsYWNrO1xyXG4gIGJvcmRlciA6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb25maXJtLWJ1dHRvbjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3QUEwMTtcclxuICBib3JkZXIgOiAycHggc29saWQgI0Y3QUEwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBmaW5kIG1lICovXHJcbi51aS1nLTEyLnVpLW1kLTYudWktZy1ub3BhZC5kcmFnLWNvbHVtblxyXG57XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAwLjVmciAwLjVmcjtcclxuICAgIGdyaWQtcm93LWdhcCA6IDEwcHg7XHJcbiAgICAvKiBncmlkLWNvbHVtbi1nYXAgOiA1cHg7ICovXHJcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDsgKi9cclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXHJcblxyXG59XHJcblxyXG4ucGx1cy1zaWduLWFkZFxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucGx1cy1zaWduLWxhYmVsXHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbi51aS1oZWxwZXItY2xlYXJmaXgubmctc3Rhci1pbnNlcnRlZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQgOiAyMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICAgIG1hcmdpbiA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JheTtcclxufVxyXG5cclxuLnVpLWctMTIudWktbWQtNi5kcm9wLWNvbHVtbi1hZGRHcm91cFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgd2hpdGU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWluLWhlaWdodCA6IDIwMHB4O1xyXG4gICAgaGVpZ2h0IDogMzAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4gOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBibGFjazsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVpLWctMTIudWktbWQtNi5kcm9wLWNvbHVtbi1hZGRHcm91cDpob3ZlclxyXG57XHJcbiAgYm9yZGVyIDogNHB4IGRhc2hlZCB3aGl0ZTtcclxufVxyXG5cclxuLyogZmluZCBtZSAqL1xyXG4ucGFyZW50LWNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4vKmZpbmQgbWUqL1xyXG4uZ3JvdXBpbmctY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICBoZWlnaHQgOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udWktZy0xMi51aS1tZC02LmRyb3AtY29sdW1uLm5nLXN0YXItaW5zZXJ0ZWRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWluLWhlaWdodCA6IDIwMHB4O1xyXG4gICAgaGVpZ2h0IDogMzAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4gOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBibGFjazsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0dWRlbnQtaW1hZ2UgXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5cclxuLnN0dWRlbnQtbmFtZVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3AgOiAycHg7XHJcbiAgICB3aWR0aCA6IDIwJTtcclxufVxyXG5cclxubWF0LXJhZGlvLWdyb3VwLm1hdC1yYWRpby1ncm91cFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLypcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkuNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTsgKi9cclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uc3R1ZGVudC1wcm9maWxlLWluZm9cclxue1xyXG4gICAgd2lkdGggOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnN0dWRlbnQtcGVyZm9ybWFuY2Vcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGggOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDUlO1xyXG59XHJcblxyXG5wI3NvcnQtdGl0bGVcclxue1xyXG4gICAgbWFyZ2luLWxlZnQgOiAzJTtcclxufVxyXG5cclxucC5saW5lLWRlc2Ncclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplIDogMTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi5saW5lXHJcbntcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wIDogLTIwJTtcclxuICAgIFxyXG59XHJcblxyXG4ubGluZS0xXHJcbntcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI0E5QjlGRjtcclxufVxyXG5cclxuXHJcbi5saW5lLTIgXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNGNDc2NDU7XHJcbn1cclxuXHJcbi5saW5lLTNcclxue1xyXG4gICAgYmFja2dyb3VuZDogI0Y3QUEwMTtcclxufVxyXG5cclxuLmxpbmUtNFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0FDRkRFO1xyXG59XHJcblxyXG4ubGluZS01XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNGRkEyREQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2NmY2Y7XHJcbiAgICBcclxuICB9XHJcblxyXG4uZ3JvdXAtaGVhZGVyLWRlc2Ncclxue1xyXG4gICAgY29sb3IgOiNBOUI5RkY7XHJcbn1cclxuXHJcbi5hZGQtZ3JvdXAtdGV4dFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uZ3JvdXAtYXZnLXNjb3JlIFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodCA6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBcclxuICAgIC8qIHBhZGRpbmctbGVmdDogNSU7ICovXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ubGVhZiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDE4JTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gIH1cclxuICBcclxuICAubGVhZi0xIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjQTlCOUZGOyAqL1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkICNBOUI5RkY7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFmLTIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjdkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgLyogYmFja2dyb3VuZDogI0Y0NzY0NTsgKi9cclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCAjRjQ3NjQ1O1xyXG4gIH1cclxuICBcclxuICAubGVhZi0zIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDk5ZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICAjRjdBQTAxOyAqL1xyXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkICNGN0FBMDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFmLTQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTcxZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICAjN0FDRkRFOyAqL1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBQ0ZERTtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtNSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDNkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgLyogYmFja2dyb3VuZDogI0ZGQTJERDsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkEyREQ7XHJcbiAgfVxyXG5cclxuICAvKlVuZm9ydHVuYXRlbHkgQ1NTIGRvZXNuJ3QgYWxsb3cgZm9yIGFwcGVuZGluZyB0byBwcm9wZXJ0aWVzLCBzbyB0aGVzZSBuZWVkIHRvIGJlIHJlZGVjbGFyZWRcclxuICBmb3IgZWFjaCBjbGFzcyBvZiBwZXRhbHMgZm9yIGFsbCA1IHBldGFscyovXHJcblxyXG4gIC5sZWFmLTEuZXhlbXBsYXJ5XHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogI0E5QjlGRjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMS4wKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICB9XHJcblxyXG4gIC5sZWFmLTIuZXhlbXBsYXJ5IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3ZGVnKSBzY2FsZSgxLjApIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NzY0NTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtMy5leGVtcGxhcnl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5OWRlZykgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAgI0Y3QUEwMTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtNC5leGVtcGxhcnkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTcxZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjN0FDRkRFO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBQ0ZERTtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtNS5leGVtcGxhcnl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDNkZWcpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQTJERDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkEyREQ7XHJcbiAgfVxyXG5cclxuICAubGVhZi0xLmFjY29tcGxpc2hlZFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6ICNBOUI5RkY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNzUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gIH1cclxuXHJcbiAgLmxlYWYtMi5hY2NvbXBsaXNoZWQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjdkZWcpIHNjYWxlKDAuNzUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NzY0NTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtMy5hY2NvbXBsaXNoZWR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5OWRlZykgc2NhbGUoMC43NSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAgI0Y3QUEwMTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtNC5hY2NvbXBsaXNoZWQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTcxZGVnKSBzY2FsZSgwLjc1KSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjN0FDRkRFO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBQ0ZERTtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtNS5hY2NvbXBsaXNoZWR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDNkZWcpIHNjYWxlKDAuNzUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQTJERDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkEyREQ7XHJcbiAgfVxyXG5cclxuICAubGVhZi0xLmRldmVsb3BpbmdcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTlCOUZGO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gIH1cclxuXHJcbiAgLmxlYWYtMi5kZXZlbG9waW5nIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3ZGVnKSBzY2FsZSgwLjUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NzY0NTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtMy5kZXZlbG9waW5ne1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTlkZWcpIHNjYWxlKDAuNSkgdHJhbnNsYXRlKDRweCwgLTRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAgI0Y3QUEwMTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmxlYWYtNC5kZXZlbG9waW5nIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE3MWRlZykgc2NhbGUoMC41KSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICAjN0FDRkRFO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBQ0ZERTtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWYtNS5kZXZlbG9waW5ne1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQzZGVnKSBzY2FsZSgwLjUpIHRyYW5zbGF0ZSg0cHgsIC00cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQTJERDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkEyREQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbi8qU29ydGluZyBidXR0b24gY29udGFpbmVyKi9cclxuLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcclxuICAgIGhlaWdodCA6IDQwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIHdpZHRoIDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zdHVkZW50LWdyb3VwLW5hbWVcclxuICB7XHJcbiAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICBoZWlnaHQgOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7O1xyXG4gICAgICBcclxuICB9IFxyXG5cclxuICBcclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTsgY29sb3I6IHdoaXRlOyB9XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student */ "./src/app/grouping/student.ts");



// import {SelectItem} from 'primeng/api';
var GroupingComponent = /** @class */ (function () {
    // selectedCategory : string;
    // categories : SelectItem[] = new Array();
    function GroupingComponent() {
        this.availableStudents = new Array();
        this.selectedStudents = new Array();
        this.group_Placeholder_Container = new Array();
        this.groupDesignValues = new Array();
        this.groupingStrings = new Array();
    }
    GroupingComponent.prototype.ngOnInit = function () {
        this.numberOfGroups = 4;
        this.studentsPerGroup = 4;
        // Header index references the header on student card
        this.header_index = 0;
        this.toggleInputValue = false;
        this.toggleOverlayGrouping = false;
        var dataSource = [
            { image_source: '', name: 'Ariana Camper', gender: "Female", collaboration: 'Exemplary', communication: 'Accomplished', problem_solving: 'Developing', group_discussion: 'Accomplished', project_management: 'Accomplished' },
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
        for (var i = 0; i < dataSource.length; i++) {
            dataSource[i].image_source = '/assets/images/Student' + i.toString() + ".jpeg";
            this.availableStudents[i] = new _student__WEBPACK_IMPORTED_MODULE_2__["Student"](dataSource[i].image_source, dataSource[i].name, dataSource[i].gender, dataSource[i].collaboration, dataSource[i].problem_solving, dataSource[i].communication, dataSource[i].group_discussion, dataSource[i].project_management);
        }
        for (var i = 0; i < this.numberOfGroups; i++) {
            this.group_Placeholder_Container.push(this.group_Placeholder_Container.length);
            this.selectedStudents[i] = new Array();
            this.groupDesignValues[i] = new Array();
        }
        var collaboration_sorted = this.availableStudents.sort(function (a, b) { return a.collaboration.localeCompare(b.collaboration); }).reverse();
        var communication_sorted = this.availableStudents.sort(function (a, b) { return a.communication.localeCompare(b.communication); }).reverse();
        var problem_sorted = this.availableStudents.sort(function (a, b) { return a.problem.localeCompare(b.problem); }).reverse();
        var project_management_sorted = this.availableStudents.sort(function (a, b) { return a.collaboration.localeCompare(b.project_management); }).reverse();
        var group_discussion_sorted = this.availableStudents.sort(function (a, b) { return a.group_discussion.localeCompare(b.group_discussion); }).reverse();
        this.availableStudents = collaboration_sorted;
        this.groupingStrings =
            [
                { name: "Collaboration", value: collaboration_sorted },
                { name: "Communication", value: communication_sorted },
                { name: "Problem Solving", value: problem_sorted },
                { name: "Project Management", value: project_management_sorted },
                { name: "Group Discussion", value: group_discussion_sorted },
            ];
    };
    // moveStudent(index : number)
    // {
    //   var pusnhToList = this.availableStudents.splice(index,1)[0];
    //   this.selectedStudents.push(pushToList);
    // }
    GroupingComponent.prototype.saveFunction = function () {
        alert("Saved grouping!");
    };
    GroupingComponent.prototype.confirmFunction = function () {
        alert("Confirmed grouping!");
    };
    GroupingComponent.prototype.toggleInput = function () {
        this.toggleInputValue = !this.toggleInputValue;
    };
    GroupingComponent.prototype.toggleOverlay = function (value) {
        if (value == true) {
            // Do the sortableJS component here
        }
        this.toggleOverlayGrouping = !this.toggleOverlayGrouping;
        console.log(this.groupingStrings);
    };
    GroupingComponent.prototype.calculate_average = function (index) {
        var collaboration_total = 0;
        var communication_total = 0;
        var problem_total = 0;
        var project_management_total = 0;
        var group_discussion_total = 0;
        var group_length = this.selectedStudents[index].length;
        for (var i = 0; i < this.selectedStudents[index].length; i++) {
            collaboration_total += this.label_to_value(this.selectedStudents[index][i].collaboration);
            communication_total += this.label_to_value(this.selectedStudents[index][i].communication);
            problem_total += this.label_to_value(this.selectedStudents[index][i].problem);
            project_management_total += this.label_to_value(this.selectedStudents[index][i].project_management);
            group_discussion_total += this.label_to_value(this.selectedStudents[index][i].group_discussion);
        }
        var collaboration_average = collaboration_total / group_length;
        var communication_average = communication_total / group_length;
        var problem_average = problem_total / group_length;
        var project_management_average = project_management_total / group_length;
        var group_discussion_average = group_discussion_total / group_length;
        this.groupDesignValues[index] = [this.labelDesignValues(collaboration_average), this.labelDesignValues(communication_average), this.labelDesignValues(problem_average), this.labelDesignValues(project_management_average), this.labelDesignValues(group_discussion_average)];
    };
    GroupingComponent.prototype.labelDesignValues = function (value) {
        if (value >= 75) {
            return "exemplary";
        }
        if (value >= 50 && value < 75) {
            return "accomplished";
        }
        else {
            return "developing";
        }
    };
    GroupingComponent.prototype.dragStart = function (event, student) {
        this.draggedStudent = student;
    };
    GroupingComponent.prototype.drop = function (event, index) {
        if (this.draggedStudent) {
            var draggedStudentIndex_1 = this.findIndex(this.draggedStudent);
            this.selectedStudents[index] = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedStudents[index], [this.draggedStudent]);
            this.availableStudents = this.availableStudents.filter(function (val, i) { return i != draggedStudentIndex_1; });
            this.draggedStudent = null;
            this.calculate_average(index);
            console.log(this.groupDesignValues[index]);
        }
    };
    GroupingComponent.prototype.dragEnd = function (event) {
        this.draggedStudent = null;
    };
    GroupingComponent.prototype.findIndex = function (student) {
        var index = -1;
        for (var i = 0; i < this.availableStudents.length; i++) {
            if (student.name === this.availableStudents[i].name) {
                index = i;
                break;
            }
        }
        return index;
    };
    GroupingComponent.prototype.findGroupIndex = function (student, ind) {
        var index = -1;
        for (var i = 0; i < this.selectedStudents[ind].length; i++) {
            if (student.name === this.selectedStudents[ind][i].name) {
                index = i;
                break;
            }
        }
        return index;
    };
    GroupingComponent.prototype.removeGroupValue = function (student, index) {
        console.log(index);
        var StudentIndex = this.findGroupIndex(student, index);
        console.log(StudentIndex);
        this.availableStudents = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([student], this.availableStudents);
        this.selectedStudents[index] = this.selectedStudents[index].filter(function (val, i) { return i != StudentIndex; });
        if (this.selectedStudents[index].length == 0) {
            this.groupDesignValues[index] = ["", "", "", "", ""];
        }
        else {
            this.calculate_average(index);
        }
    };
    GroupingComponent.prototype.reset_groups = function () {
        for (var i = 0; i < this.selectedStudents.length; i++) {
            for (var j = 0; j < this.selectedStudents[i].length; j++) {
                this.availableStudents = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.availableStudents, [this.selectedStudents[i][j]]);
            }
            this.selectedStudents[i] = [];
            this.groupDesignValues[i] = [];
        }
    };
    GroupingComponent.prototype.increment_groups = function () {
        this.numberOfGroups += 1;
        this.selectedStudents[this.numberOfGroups - 1] = new Array();
        this.groupDesignValues[this.numberOfGroups - 1] = ["", "", "", "", ""];
    };
    GroupingComponent.prototype.label_to_percentage = function (value) {
        var return_value = "";
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
    };
    GroupingComponent.prototype.label_to_value = function (value) {
        var return_value = 0;
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
    };
    GroupingComponent.prototype.shortHand = function (value) {
        var return_value = "";
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
    };
    GroupingComponent.prototype.setAtrributeStyle = function (value) {
        return "max width : " + value + ";";
    };
    GroupingComponent.prototype.sortAttributes = function (value) {
        var _this = this;
        var header_style_element = document.getElementsByClassName('group-header-desc');
        // console.log(value);
        if (value == 1) {
            this.availableStudents.sort(function (a, b) { return parseFloat(_this.labelScore(b.collaboration)) - parseFloat(_this.labelScore(a.collaboration)); });
            // this.availableStudents.sort((a,b) => this.labelScore(a.collaboration).localeCompare(this.labelScore(b.collaboration)));
            this.header_index = 0;
            // console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#A9B9FF";
            }
        }
        if (value == 2) {
            this.availableStudents.sort(function (a, b) { return parseFloat(_this.labelScore(b.communication)) - parseFloat(_this.labelScore(a.communication)); });
            this.header_index = 1;
            // console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F47645";
            }
        }
        if (value == 3) {
            this.availableStudents.sort(function (a, b) { return parseFloat(_this.labelScore(b.problem)) - parseFloat(_this.labelScore(a.problem)); });
            this.header_index = 2;
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#F7AA01";
            }
        }
        if (value == 4) {
            this.availableStudents.sort(function (a, b) { return parseFloat(_this.labelScore(b.project_management)) - parseFloat(_this.labelScore(a.project_management)); });
            this.header_index = 3;
            // console.log(this.header_index);
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#7ACFDE";
            }
        }
        if (value == 5) {
            this.availableStudents.sort(function (a, b) { return parseFloat(_this.labelScore(b.group_discussion)) - parseFloat(_this.labelScore(a.group_discussion)); });
            this.header_index = 4;
            for (var i = 0; i < header_style_element.length; i++) {
                header_style_element[i].style.color = "#FFA2DD";
                // header_style_element[i].style.animation = "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s;  -o-animation: fadein 1s; animation: fadein 1s;"
            }
            // console.log(this.header_index);
        }
    };
    GroupingComponent.prototype.labelScore = function (value) {
        if (value == "Exemplary")
            return "10";
        if (value == "Accomplished")
            return "7.5";
        if (value == "Developing")
            return "5";
    };
    GroupingComponent.prototype.smart_grouping = function () {
        for (var i = 0; i < this.selectedStudents.length; i++) {
            this.availableStudents = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.selectedStudents[i], this.availableStudents);
            // console.log(this.availableStudents);
            this.selectedStudents[i] = [];
        }
        // console.log(this.availableStudents);
        var priority_list = [];
        for (var i = 0; i < this.groupingStrings.length; i++) {
            priority_list.push(this.groupingStrings[i].value);
        }
        var class_roster = this.formPriorityGroups(this.availableStudents, this.studentsPerGroup, priority_list);
        for (var i = 0; i < class_roster.length; i++) {
            this.selectedStudents[i] = class_roster[i];
            this.calculate_average(i);
        }
        this.availableStudents = [];
    };
    GroupingComponent.prototype.formPriorityGroups = function (studentData, studentsPerGroup, priority_list) {
        var jsonData = studentData;
        // Segregate male and female participants in roster for grouping
        var male_priority = priority_list[0].filter(function (el) { return el.gender == "Male"; });
        var female_priority = priority_list[0].filter(function (el) { return el.gender == "Female"; });
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
        for (var i = 0; i < no_of_groups; i++) {
            class_roster.push([]);
        }
        // **Grouping begins here**
        // Set leaders first based on equity
        var female_leaders = Math.floor(no_of_groups / 2);
        var male_leaders = no_of_groups - female_leaders;
        var remove_elements_array = [];
        console.log(female_leaders);
        for (var i = 0; i < female_leaders; i++) {
            class_roster[i].push(female_priority.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        for (var i = female_leaders; i < female_leaders + male_leaders; i++) {
            class_roster[i].push(male_priority.pop());
            remove_elements_array.push(class_roster[i][0].name);
        }
        console.log(class_roster);
        console.log(remove_elements_array);
        var _loop_1 = function (i) {
            priority_2 = priority_2.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_3 = priority_3.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_4 = priority_4.filter(function (el) { return el.name != remove_elements_array[i]; });
            priority_5 = priority_5.filter(function (el) { return el.name != remove_elements_array[i]; });
        };
        for (var i in remove_elements_array) {
            _loop_1(i);
        }
        // Grouping on other 4 components begins here
        var remainder_roster = [priority_2, priority_3, priority_4, priority_5];
        var round = 0;
        for (var i = 0; i < jsonData.length - female_leaders - male_leaders; i++) {
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
        // console.log(class_roster);
        var undecided_class_roster = [];
        for (var i in class_roster) {
            if (class_roster[i].length > size_groups) {
                undecided_class_roster.push(class_roster[i].pop());
            }
            else {
                console.log(class_roster[i].length, size_groups);
            }
        }
        console.log(undecided_class_roster);
        var eval_class_roster = [];
        for (var i = 0; i < class_roster.length; i++) {
            var roster_total = 0;
            var roster_average = 0;
            var counter = 0;
            for (var j = 0; j < class_roster[i].length; j++) {
                var collaboration_score = this.labelScore(class_roster[i][j].collaboration);
                var communication_score = this.labelScore(class_roster[i][j].communication);
                var problem_score = this.labelScore(class_roster[i][j].problem);
                var groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
                roster_total = roster_total + 0.25 * parseFloat(collaboration_score) + 0.25 * parseFloat(communication_score) + 0.25 * parseFloat(problem_score) + 0.25 * parseFloat(groupDiscussion_score);
                counter += 1;
            }
            roster_average = roster_total / counter;
            eval_class_roster.push(roster_average);
        }
        // console.log(eval_class_roster);
        // Find lowest scoring groups and arrange accordingly
        var eval_class_roster_sorted = eval_class_roster.slice();
        eval_class_roster_sorted.sort();
        console.log(eval_class_roster_sorted);
        // console.log(eval_class_roster);
        // console.log(eval_class_roster_sorted);
        for (var i = 0; i < undecided_class_roster.length; i++) {
            var find_this_index = eval_class_roster_sorted[i];
            class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
        }
        console.log(class_roster);
        return class_roster;
    };
    GroupingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grouping',
            template: __webpack_require__(/*! raw-loader!./grouping.component.html */ "./node_modules/raw-loader/index.js!./src/app/grouping/grouping.component.html"),
            styles: [__webpack_require__(/*! ./grouping.component.css */ "./src/app/grouping/grouping.component.css")]
        })
    ], GroupingComponent);
    return GroupingComponent;
}());

// formEquitableGroups(studentData : Student[], studentsPerGroup : number)
// {
//       var jsonData = studentData;
//       // Segregate male and female participants in roster for grouping
//       var male_leadership  =  studentData.filter(el => el.gender == "Male");
//       var female_leadership  = studentData.filter(el => el.gender == "Female");
//       var collaboration =  studentData;
//       var problem =  studentData;
//       var communication = studentData;
//       var groupDiscussion = studentData;
//       var size_groups = studentsPerGroup;
//       // Sort groups, then form better groups
//       male_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
//       female_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
//       // console.log(male_leadership, female_leadership);
//       collaboration.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
//       communication.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
//       problem.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));
//       // console.log(collaboration, communication, problem);
//       var class_roster = [];
//       var roster_size = jsonData.length;
//       var no_of_groups = Math.floor(roster_size/size_groups);
//       this.numberOfGroups = no_of_groups;
//       for (let i = 0; i < no_of_groups;i++)
//       {
//           class_roster.push([]);
//       }
//       // console.log(class_roster);
//       // **Grouping begins here**
//       // Set leaders first based on equity
//       let female_leaders = Math.floor(no_of_groups/2);
//       let male_leaders = no_of_groups - female_leaders;
//       let remove_elements_array = [];
//       console.log(female_leaders);
//       for(let i = 0; i< female_leaders;i++)
//           {
//               class_roster[i].push(female_leadership.pop());
//               remove_elements_array.push(class_roster[i][0].name);
//           }
//       for(let i = female_leaders; i< female_leaders+male_leaders;i++)
//           {
//               class_roster[i].push(male_leadership.pop());
//               remove_elements_array.push(class_roster[i][0].name);
//           }
//         console.log(class_roster); 
//         console.log(remove_elements_array); 
//       for (let i in remove_elements_array)
//       {
//           communication = communication.filter(function(el){ return el.name != remove_elements_array[i]; });
//           collaboration = collaboration.filter(function(el){ return el.name != remove_elements_array[i]; });
//           problem = problem.filter(function(el){ return el.name != remove_elements_array[i]; });
//           groupDiscussion = groupDiscussion.filter(function(el){ return el.name != remove_elements_array[i]; });
//       }
//       // Grouping on other 4 components begins here
//       let remainder_roster = [communication, collaboration, problem, groupDiscussion];
//       var round = 0;
//       for(let i = 0; i < jsonData.length - female_leaders - male_leaders; i++)
//       {
//           if(round %2 == 0)
//           {
//             var push_value = remainder_roster[i%4].pop()
//             class_roster[(i)%no_of_groups].push(push_value);
//             console.log((i)%no_of_groups);
//           }
//           else
//           {
//             var push_value = remainder_roster[i%4].pop()
//             class_roster[(no_of_groups-1)-(i%no_of_groups)].push(push_value);
//             console.log((no_of_groups-1)-(i%no_of_groups));
//           }
//           // Remember that the pool of users is shared, one of these is bound to be redundant
//           // But I am too lazy to optimize for something with O(n) complexity to begin with
//           remainder_roster[0] = remainder_roster[0].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[1] = remainder_roster[1].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[2] = remainder_roster[2].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[3] = remainder_roster[3].filter(function(el){ return el.name != push_value.name });
//           if(i%no_of_groups ==0 && i!=0)
//           {
//               round += 1;
//           }
//       }
//       // console.log(class_roster);
//       let undecided_class_roster = [];
//       for (let i in class_roster)
//       {   
//           if(class_roster[i].length > size_groups)
//           {
//               undecided_class_roster.push(class_roster[i].pop());
//           }
//           else
//           {
//               console.log(class_roster[i].length, size_groups );
//           }
//       }
//       console.log(undecided_class_roster);
//       var eval_class_roster = [];
//       for (let i = 0; i < class_roster.length; i++)
//       {   
//           var roster_total = 0;
//           let roster_average = 0;
//           var counter = 0;
//           for (let j = 0; j< class_roster[i].length; j++)
//           {
//               let collaboration_score = this.labelScore(class_roster[i][j].collaboration);
//               let communication_score = this.labelScore(class_roster[i][j].communication);
//               let problem_score = this.labelScore(class_roster[i][j].problem);
//               let groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
//               roster_total = roster_total + 0.25*parseFloat(collaboration_score) + 0.25*parseFloat(communication_score) + 0.25*parseFloat(problem_score)+ 0.25*parseFloat(groupDiscussion_score);
//               counter += 1;
//           }
//           roster_average = roster_total/counter;
//           eval_class_roster.push(roster_average);
//       }
//       // console.log(eval_class_roster);
//       // Find lowest scoring groups and arrange accordingly
//       let eval_class_roster_sorted = eval_class_roster.slice();
//       eval_class_roster_sorted.sort();
//       for( let i = 0 ; i < undecided_class_roster.length; i++)
//       {
//           let find_this_index = eval_class_roster_sorted[i];
//           class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
//       }
//       console.log(class_roster);
//       return class_roster;
//   }


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SmartGroupComponent = /** @class */ (function () {
    function SmartGroupComponent() {
        this.selectedStudents = new Array();
    }
    SmartGroupComponent.prototype.ngOnInit = function () {
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
    return SmartGroupComponent;
}());



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
var Student = /** @class */ (function () {
    function Student(image_source, name, gender, collaboration, problem, communication, group_discussion, project_management) {
        if (image_source === void 0) { image_source = "blank"; }
        if (name === void 0) { name = "blank"; }
        if (gender === void 0) { gender = "blank"; }
        if (collaboration === void 0) { collaboration = "blank"; }
        if (problem === void 0) { problem = "blank"; }
        if (communication === void 0) { communication = "blank"; }
        if (group_discussion === void 0) { group_discussion = "blank"; }
        if (project_management === void 0) { project_management = "blank"; }
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
    Student.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return Student;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");




var ELEMENT_DATA = [
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
var OvertableComponent = /** @class */ (function () {
    function OvertableComponent() {
        this.displayedColumns = ['serial_no', 'name', 'last_evaluation', 'last_check_in', 'collaboration', 'communication', 'problem_solving', 'group_discussion'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    OvertableComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
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
    return OvertableComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map