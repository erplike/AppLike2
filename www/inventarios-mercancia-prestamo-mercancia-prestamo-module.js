(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventarios-mercancia-prestamo-mercancia-prestamo-module"],{

/***/ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MercanciaPrestamoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercanciaPrestamoPageModule", function() { return MercanciaPrestamoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mercancia_prestamo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mercancia-prestamo.page */ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.ts");







const routes = [
    {
        path: '',
        component: _mercancia_prestamo_page__WEBPACK_IMPORTED_MODULE_6__["MercanciaPrestamoPage"]
    }
];
let MercanciaPrestamoPageModule = class MercanciaPrestamoPageModule {
};
MercanciaPrestamoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mercancia_prestamo_page__WEBPACK_IMPORTED_MODULE_6__["MercanciaPrestamoPage"]]
    })
], MercanciaPrestamoPageModule);



/***/ }),

/***/ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mercancia en prestamo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form name=\"kardex\">\n        <!-- <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\"> -->\n            <div class=\"x_content\">\n                <div   class=\"row\" >\n                  <div class='col-md-3'>\n                    <div class=\"form-group\">\n                      <label for=\"idsucursal\">Sucursal:</label>\n                      <select name=\"idsucursal\" id='idsucursal' class=\"chosen-select form-control input-sm\" #idsucursal>\n                        <option value='' >TODAS </option>\n                        <option *ngFor=\"let sucursal of sucursales\"  value='{{ sucursal[0] }}' >{{ sucursal[1] }} </option>\n                      </select>              \n                    </div>            \n                  </div>          \n                  \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label for=\"periodo\">Filtro:</label>\n                            <input type=text class=\"form-control\"  id='periodo'  #responsable name='periodo'   >               \n                      </div> \n                    </div>\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label for=\"periodo\">Numero de dias:</label>\n                          <input type='number' class=\"form-control\"  id='periodo'  #dias name='periodo' placeholder=\"nn\" value=30 >               \n                      </div> \n                      </div>\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\"><br>\n                          <ion-button (click)=\"tableResults(idsucursal.value, dias.value, responsable.value)\">Buscar</ion-button>\n                    </div>\n                  </div> \n                </div>\n            </div>  \n     </form>\n     <div id=table>\n      <ion-spinner name=\"circles\" *ngIf=\"!records\" id=\"colorLoading\"></ion-spinner>\n      <div class=\"table-responsive\"  *ngIf=\"records\">\n          <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n          <br>\n          <table class=\"table table-bordered\" >\n                      <th *ngFor='let iterador2 of tableTitle' id=\"Headertable\"> {{  iterador2 }} </th>\n              <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 1 && records && i< numberRecord-1\" >\n                      <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> \n                        <!-- <div *ngIf=\"j==4 && i< numberRecord-1\" id=\"numericSet\">\n                          {{ iterador[j] }}\n                        </div> -->\n                        <div *ngIf=\"j!=4 && i < numberRecord-1\">\n                            {{ iterador[j] }}\n                        </div> \n                      </td>\n                  </tr>\n                  <tr *ngIf=\"i === numberRecord-1\" id=\"Headertable\" >\n                    <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                </tr> \n              </tbody>\n          </table>\n      </div>\n   </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaW52ZW50YXJpb3MvbWVyY2FuY2lhLXByZXN0YW1vL21lcmNhbmNpYS1wcmVzdGFtby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.ts ***!
  \***********************************************************************************/
/*! exports provided: MercanciaPrestamoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercanciaPrestamoPage", function() { return MercanciaPrestamoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MercanciaPrestamoPage = class MercanciaPrestamoPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
        this.records = true;
    }
    ngOnInit() { }
    getSucursales() {
        this.sucursales = this.jsonService.getSucursales();
    }
    tableResults(idsucursal, dias, responsable) {
        this.records = false;
        const formData = new FormData();
        if (dias === '') {
            alert('Ingrese el numero de dias');
            return;
        }
        formData.append('idsucursal', idsucursal);
        formData.append('dias', dias);
        formData.append('filtro', responsable);
        this.jsonService.postJson('https://app.networkingsas.com/app/inventario/mercanciaPrestamo.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records = false;
                alert('No hay registros');
                return;
            }
            this.records = true;
            // tslint:disable-next-line: prefer-const
            let data = [];
            let i = 0;
            // tslint:disable-next-line: only-arrow-functions
            Object.keys(res).forEach(function (key) {
                /* console.log(res[key]); */
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
            this.tableTitle = data[1];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
    }
};
MercanciaPrestamoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mercancia-prestamo',
        template: __webpack_require__(/*! ./mercancia-prestamo.page.html */ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.html"),
        styles: [__webpack_require__(/*! ./mercancia-prestamo.page.scss */ "./src/app/paginas/inventarios/mercancia-prestamo/mercancia-prestamo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], MercanciaPrestamoPage);



/***/ })

}]);
//# sourceMappingURL=inventarios-mercancia-prestamo-mercancia-prestamo-module.js.map