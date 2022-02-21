(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reportes-ventas-producto-ventas-producto-module"],{

/***/ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-producto/ventas-producto.module.ts ***!
  \****************************************************************************/
/*! exports provided: VentasProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasProductoPageModule", function() { return VentasProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ventas_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ventas-producto.page */ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.ts");







const routes = [
    {
        path: '',
        component: _ventas_producto_page__WEBPACK_IMPORTED_MODULE_6__["VentasProductoPage"]
    }
];
let VentasProductoPageModule = class VentasProductoPageModule {
};
VentasProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ventas_producto_page__WEBPACK_IMPORTED_MODULE_6__["VentasProductoPage"]]
    })
], VentasProductoPageModule);



/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Ventas por producto</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <form name=\"gerenteGeneral\">\n      <!-- <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\"> -->\n          <div class=\"x_content\">\n              <div   class=\"row\" >\n                <div class='col-md-3'>\n                  <div class=\"form-group\">\n                    <label for=\"idsucursal\">Sucursal:</label>\n                    <select name=\"idsucursal\" id='idsucursal' class=\"chosen-select form-control input-sm\" #idsucursal>\n                      <option value=''>Todas</option>\n                      <option *ngFor=\"let sucursal of sucursales\"  value='{{ sucursal[0] }}' >{{ sucursal[1] }} </option>\n                    </select>              \n                  </div>            \n                </div>    \n                <div class='col-md-3'>\n                    <div class=\"form-group\">\n                      <label for=\"idcategoria\">Categorias:</label>\n                      <select name=\"idcategoria\" id='idcategoria' class=\"chosen-select form-control input-sm\" #idcategoria>\n                        <option value=''>Todas</option>\n                        <option *ngFor=\"let categoria of categorias\"  value='{{ categoria[0] }}' >{{ categoria[1] }} </option>\n                      </select>              \n                    </div>            \n                  </div>        \n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"periodo\">Fecha desde:</label>\n                    <input type=\"date\" class=\"form-control input-sm\" name=\"fechaDesde\" #fechaDesde value=\"2019-09-01\" id=\"fechaDesde\">\n                  </div> \n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label for=\"periodo\">Fecha hasta:</label>\n                        <input type=\"date\" class=\"form-control input-sm\" name=\"fechaHasta\" #fechaHasta value=\"2019-09-30\" id=\"fechahasta\">\n                      </div> \n                      </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\"><br>\n                          <ion-button type=\"submit\" (click)=\"tableResults(idsucursal.value, fechaDesde.value, fechaHasta.value, idcategoria.value)\">Buscar</ion-button>\n                    </div>\n                    </div> \n              </div>\n          </div>  \n   </form>\n  <div id=table>\n      <ion-spinner name=\"circles\" *ngIf=\"!records\" id=\"colorLoading\"></ion-spinner>\n      <div class=\"table-responsive\" *ngIf=\"records\">\n          <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n          <br>\n          <h3>Ventas por producto</h3>\n          <table class=\"table table-bordered\"  >\n              <thead id=\"Headertable\">\n                  <tr>\n                      <th *ngFor='let iterador2 of tableTitle'> {{  iterador2 }} </th>\n                  </tr>\n              </thead>\n              <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 1 && records &&  i < numberRecord-1 \">\n                    <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                  </tr>\n                    <tr *ngIf=\"i === numberRecord-1\" id=\"Headertable\" >\n                      <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                  </tr> \n              </tbody>\n          </table>\n      </div>\n   </div>\n\n   \n  <!--  <div id=table>\n      <div class=\"table-responsive\" *ngIf=\"records\">\n          <h3>Por marca </h3>\n          <table class=\"table table-bordered\"  >\n              <thead style=\"background-color: #cd1818\">\n                  <tr>\n                      <th *ngFor='let iterador2 of tableTitle2'> {{  iterador2 }} </th>\n                  </tr>\n              </thead>\n              <tbody *ngFor='let iterador of ( table2  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 0 && records &&  i < numberRecord2 -1 \">\n                    <td *ngFor='let iterador2 of ( tableTitle2 ); let j=index'> {{ iterador[j] }}</td>\n                  </tr>\n                    <tr *ngIf=\"i === numberRecord2 -1\" id=\"Headertable\" >\n                      <td *ngFor='let iterador2 of ( tableTitle2 ); let j=index'> {{ iterador[j] }}</td>\n                  </tr> \n              </tbody>\n          </table>\n      </div>\n   </div> -->\n\n   <div id=table>\n      <div class=\"table-responsive\" *ngIf=\"records3\">\n          <h3> Ventas por Categoria </h3>\n          <table class=\"table table-bordered\"  >\n              <thead id=\"Headertable\">\n                  <tr>\n                      <th *ngFor='let iterador2 of tableTitle3'> {{  iterador2 }} </th>\n                  </tr>\n              </thead>\n              <tbody *ngFor='let iterador of ( table3  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 0 && records &&  i < numberRecord3 -1 \">\n                    <td *ngFor='let iterador2 of ( tableTitle3 ); let j=index'> {{ iterador[j] }}</td>\n                  </tr>\n                    <tr *ngIf=\"i === numberRecord3-1\" id=\"Headertable\" >\n                      <td *ngFor='let iterador2 of ( tableTitle3 ); let j=index'> {{ iterador[j] }}</td>\n                  </tr> \n              </tbody>\n          </table>\n      </div>\n   </div>\n   </ion-content>\n   "

/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvUmVwb3J0ZXMvdmVudGFzLXByb2R1Y3RvL3ZlbnRhcy1wcm9kdWN0by5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.ts ***!
  \**************************************************************************/
/*! exports provided: VentasProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasProductoPage", function() { return VentasProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let VentasProductoPage = class VentasProductoPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
        this.getCategoria();
        this.records = true;
    }
    ngOnInit() { }
    getSucursales() {
        this.sucursales = this.jsonService.getSucursales();
    }
    getCategoria() {
        this.categorias = this.jsonService.getCategoria();
    }
    tableResults(idsucursal, fechaDesde, fechaHasta, idcategoria) {
        this.records = false;
        const formData = new FormData();
        formData.append('idsucursal', idsucursal);
        formData.append('fechaDesde', fechaDesde);
        formData.append('fechaHasta', fechaHasta);
        formData.append('idcategoria', idcategoria);
        this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasProducto.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records = false;
                return;
            }
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
            this.records = true;
            this.tableTitle = data[1];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
        this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasProducto2.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records2 = false;
                return;
            }
            this.records2 = true;
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
            this.numberRecord2 = data.length;
            this.tableTitle2 = data[0];
            this.table2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
            // tslint:disable-next-line: no-unused-expression
        });
        this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasProducto3.php', formData).subscribe((res) => {
            console.log(res);
            if (!res) {
                this.records3 = false;
                return;
            }
            this.records3 = true;
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
            this.numberRecord3 = data.length;
            this.tableTitle3 = data[0];
            this.table3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
            // tslint:disable-next-line: no-unused-expression
        });
    }
};
VentasProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ventas-producto',
        template: __webpack_require__(/*! ./ventas-producto.page.html */ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.html"),
        styles: [__webpack_require__(/*! ./ventas-producto.page.scss */ "./src/app/paginas/Reportes/ventas-producto/ventas-producto.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], VentasProductoPage);



/***/ })

}]);
//# sourceMappingURL=Reportes-ventas-producto-ventas-producto-module.js.map