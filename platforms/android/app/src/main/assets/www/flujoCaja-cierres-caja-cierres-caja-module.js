(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flujoCaja-cierres-caja-cierres-caja-module"],{

/***/ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.module.ts ***!
  \***********************************************************************/
/*! exports provided: CierresCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierresCajaPageModule", function() { return CierresCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cierres_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cierres-caja.page */ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.ts");







const routes = [
    {
        path: '',
        component: _cierres_caja_page__WEBPACK_IMPORTED_MODULE_6__["CierresCajaPage"]
    }
];
let CierresCajaPageModule = class CierresCajaPageModule {
};
CierresCajaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cierres_caja_page__WEBPACK_IMPORTED_MODULE_6__["CierresCajaPage"]]
    })
], CierresCajaPageModule);



/***/ }),

/***/ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mi cierre de caja</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<br>\n<ion-content padding> \n<!--  {{tableTitle}}  style=\"text-decoration-color:black\" -->\n     <p *ngFor='let iterador2 of tableTitle;  let i=index' id=\"titulosTabla\" style=\"font-size: 120%\" >\n       <span *ngIf='i === 0' > <h3>Saldo Inicial:</h3> </span> \n       <span *ngIf='i > 0'><h3> Saldo final en caja:</h3> </span> {{  iterador2 }} </p>\n<div id=table>\n   \n   <div class=\"table-responsive\"  *ngIf=\"records\">\n        <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n    <br>\n  <h3>Ingresos</h3>\n       <table class=\"table table-bordered\" >\n           <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n               <tr *ngIf=\"i > 0 && records\">\n                   <td >{{ iterador[0] }} </td>\n                   <td >{{ iterador[1] }} </td>\n               </tr>\n           </tbody>\n       </table>\n   </div>\n</div>\n<div id=table>\n    \n     <div class=\"table-responsive\">\n         <table class=\"table table-bordered\"  *ngIf=\"records\">\n                <h3>Egresos</h3>\n             <tbody *ngFor='let iterador of ( table2  | async)  ; let i=index'>\n                 <tr *ngIf=\"i > 0 && records\">\n                     <td >{{ iterador[0] }} </td>\n                     <td >{{ iterador[1] }} </td>\n                 </tr>\n             </tbody>\n         </table>\n     </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZmx1am9DYWphL2NpZXJyZXMtY2FqYS9jaWVycmVzLWNhamEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.ts ***!
  \*********************************************************************/
/*! exports provided: CierresCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierresCajaPage", function() { return CierresCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let CierresCajaPage = class CierresCajaPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
    }
    ngOnInit() { this.tableResults('99999'); }
    getSucursales() {
        this.sucursales = this.jsonService.getSucursales();
    }
    tableResults(iduser) {
        const formData = new FormData();
        formData.append('iduser', iduser);
        this.jsonService.postJson('https://app.networkingsas.com/app/flujoCaja/miCierreCaja.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records = false;
                return;
            }
            this.records = true;
            // tslint:disable-next-line: prefer-const
            let data = [];
            let i = 0;
            // tslint:disable-next-line: only-arrow-functions
            Object.keys(res).forEach(function (key) {
                data[i] = (res[key]);
                i++;
            });
            console.log(data.length);
            // tslint:disable-next-line: no-string-literal
            this.tableTitle = data[0];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
        this.jsonService.postJson('https://app.networkingsas.com/app/flujoCaja/miCierreCaja2.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records = false;
                return;
            }
            this.records = true;
            // tslint:disable-next-line: prefer-const
            let data = [];
            let i = 0;
            // tslint:disable-next-line: only-arrow-functions
            Object.keys(res).forEach(function (key) {
                data[i] = (res[key]);
                i++;
            });
            console.log(data.length);
            // tslint:disable-next-line: no-string-literal
            this.tableTitle = data[0];
            this.table2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
    }
};
CierresCajaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cierres-caja',
        template: __webpack_require__(/*! ./cierres-caja.page.html */ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.html"),
        styles: [__webpack_require__(/*! ./cierres-caja.page.scss */ "./src/app/paginas/flujoCaja/cierres-caja/cierres-caja.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], CierresCajaPage);



/***/ })

}]);
//# sourceMappingURL=flujoCaja-cierres-caja-cierres-caja-module.js.map