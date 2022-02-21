(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reportes-utilidad-utilidad-module"],{

/***/ "./src/app/paginas/Reportes/utilidad/utilidad.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/paginas/Reportes/utilidad/utilidad.module.ts ***!
  \**************************************************************/
/*! exports provided: UtilidadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilidadPageModule", function() { return UtilidadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utilidad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilidad.page */ "./src/app/paginas/Reportes/utilidad/utilidad.page.ts");







const routes = [
    {
        path: '',
        component: _utilidad_page__WEBPACK_IMPORTED_MODULE_6__["UtilidadPage"]
    }
];
let UtilidadPageModule = class UtilidadPageModule {
};
UtilidadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_utilidad_page__WEBPACK_IMPORTED_MODULE_6__["UtilidadPage"]]
    })
], UtilidadPageModule);



/***/ }),

/***/ "./src/app/paginas/Reportes/utilidad/utilidad.page.html":
/*!**************************************************************!*\
  !*** ./src/app/paginas/Reportes/utilidad/utilidad.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Reporte de utilidad</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <form name=\"gerenteGeneral\">\n      <!-- <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\"> -->\n          <div class=\"x_content\">\n              <div   class=\"row\" >\n                <div class='col-md-3'>\n                  <div class=\"form-group\">\n                    <label for=\"idsucursal\">Sucursal:</label>\n                    <select name=\"idsucursal\" id='idsucursal' class=\"chosen-select form-control input-sm\" #idsucursal>\n                      <option value=''>Todas</option>\n                      <option *ngFor=\"let sucursal of sucursales\"  value='{{ sucursal[0] }}' >{{ sucursal[1] }} </option>\n                    </select>              \n                  </div>            \n                </div>          \n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"periodo\">Fecha desde:</label>\n                    <input type=\"date\" class=\"form-control input-sm\" name=\"fechaDesde\" #fechaDesde value=\"2019-09-01\" id=\"fechaDesde\">\n                  </div> \n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label for=\"periodo\">Fecha hasta:</label>\n                        <input type=\"date\" class=\"form-control input-sm\" name=\"fechaHasta\" #fechaHasta value=\"2019-09-30\" id=\"fechahasta\">\n                      </div> \n                      </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\"><br>\n                          <ion-button type=\"submit\" (click)=\"tableResults(idsucursal.value, fechaDesde.value, fechaHasta.value)\">Buscar</ion-button>\n                    </div>\n                    </div>  \n              </div>\n          </div>  \n   </form>\n  <div id=table>\n      <ion-spinner name=\"circles\" *ngIf=\"!records\" id=\"colorLoading\"></ion-spinner>\n      <div class=\"table-responsive\" *ngIf=\"records\">\n          <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n          <br>\n          <h3>Consolidado por sucursal </h3>\n          <table class=\"table table-bordered\"  >\n              <thead id=\"Headertable\">\n                  <tr>\n                      <th *ngFor='let iterador2 of tableTitle'> {{  iterador2 }} </th>\n                  </tr>\n              </thead>\n              <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 1 && records && i< numberRecord-1\">\n                      <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                  </tr>\n                  <tr *ngIf=\"i === numberRecord-1\" id=\"Headertable\" >\n                    <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                </tr> \n              </tbody>\n          </table>\n      </div>\n   </div>\n   </ion-content>\n   "

/***/ }),

/***/ "./src/app/paginas/Reportes/utilidad/utilidad.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/paginas/Reportes/utilidad/utilidad.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvUmVwb3J0ZXMvdXRpbGlkYWQvdXRpbGlkYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/Reportes/utilidad/utilidad.page.ts":
/*!************************************************************!*\
  !*** ./src/app/paginas/Reportes/utilidad/utilidad.page.ts ***!
  \************************************************************/
/*! exports provided: UtilidadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilidadPage", function() { return UtilidadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UtilidadPage = class UtilidadPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
        this.records = true;
    }
    ngOnInit() { this.tableResults('99999', '', ''); }
    getSucursales() {
        this.sucursales = this.jsonService.getSucursales();
    }
    tableResults(idsucursal, fechaDesde, fechaHasta) {
        this.records = false;
        const formData = new FormData();
        formData.append('idsucursal', idsucursal);
        formData.append('fechaDesde', fechaDesde);
        formData.append('fechaHasta', fechaHasta);
        this.jsonService.postJson('https://app.networkingsas.com/app/reportes/utilidad.php', formData).subscribe((res) => {
            console.log(res);
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
            this.numberRecord = data.length;
            this.status = data[0];
            if (this.status[0]) {
                alert(this.status[1]);
                return;
            }
            if (!res) {
                this.records = false;
                return;
            }
            this.records = true;
            this.tableTitle = data[1];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
    }
};
UtilidadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-utilidad',
        template: __webpack_require__(/*! ./utilidad.page.html */ "./src/app/paginas/Reportes/utilidad/utilidad.page.html"),
        styles: [__webpack_require__(/*! ./utilidad.page.scss */ "./src/app/paginas/Reportes/utilidad/utilidad.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], UtilidadPage);



/***/ })

}]);
//# sourceMappingURL=Reportes-utilidad-utilidad-module.js.map