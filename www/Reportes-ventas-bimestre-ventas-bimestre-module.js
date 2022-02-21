(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reportes-ventas-bimestre-ventas-bimestre-module"],{

/***/ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.module.ts ***!
  \****************************************************************************/
/*! exports provided: VentasBimestrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasBimestrePageModule", function() { return VentasBimestrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ventas_bimestre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ventas-bimestre.page */ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.ts");







const routes = [
    {
        path: '',
        component: _ventas_bimestre_page__WEBPACK_IMPORTED_MODULE_6__["VentasBimestrePage"]
    }
];
let VentasBimestrePageModule = class VentasBimestrePageModule {
};
VentasBimestrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ventas_bimestre_page__WEBPACK_IMPORTED_MODULE_6__["VentasBimestrePage"]]
    })
], VentasBimestrePageModule);



/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Ventas por Bimestre</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <form name=\"gerenteGeneral\">\n      <!-- <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\"> -->\n          <div class=\"x_content\">\n              <div   class=\"row\" >\n                  <div class='col-md-3'>\n                      <div class=\"form-group\">\n                        <label for=\"idsucursal\">Sucursal:</label>\n                        <select name=\"idsucursal\" id='idsucursal' class=\"chosen-select form-control input-sm\" #idsucursal>\n                          <option value=''>Todas</option>\n                          <option *ngFor=\"let sucursal of sucursales\"  value='{{ sucursal[0] }}' >{{ sucursal[1] }} </option>\n                        </select>              \n                      </div>            \n                    </div>    \n                    <div class='col-md-3'>\n                        <div class=\"form-group\">\n                          <label for=\"semestre\">Bimestre</label>\n                          <select name=\"semestre\" id='semestre' class=\"chosen-select form-control input-sm\" #semestre>\n                              <option value=''>Todos</option>\n                            <option value='1'>Bimestre 1</option>\n                            <option value='2'>Bimestre 2</option>\n                            <option value='3'>Bimestre 3</option>\n                            <option value='4'>Bimestre 4</option>\n                            <option value='5'>Bimestre 5</option>\n                            <option value='6'>Bimestre 6</option>\n                          </select>              \n                        </div>            \n                      </div> \n                <div class='col-md-3'>\n                    <div class=\"form-group\">\n                      <label for=\"idcategoria\">Categorias:</label>\n                      <select name=\"idcategoria\" id='idcategoria' class=\"chosen-select form-control input-sm\" #idcategoria>\n                        <option value=''>Todas</option>\n                        <option *ngFor=\"let categoria of categorias\"  value='{{ categoria[0] }}' >{{ categoria[1] }} </option>\n                      </select>              \n                    </div>            \n                  </div>        \n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"periodo\">Año</label>\n                    <input type=\"number\" class=\"form-control input-sm\" name=\"anio\" #anio value=\"2019\" id=\"anio\">\n                  </div> \n                  </div>\n                  \n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\"><br>\n                          <ion-button type=\"submit\" (click)=\"tableResults(anio.value, idcategoria.value, idsucursal.value, semestre.value )\">Buscar</ion-button>\n                    </div>\n                    </div>  \n              </div>\n          </div>  \n   </form>\n  <div id=table>\n      <ion-spinner name=\"circles\" *ngIf=\"!records\" id=\"colorLoading\"></ion-spinner>\n      <div class=\"table-responsive\" *ngIf=\"records\">\n          <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n          <br>\n          <!-- <h3>Ventas por año </h3> -->\n          <table class=\"table table-bordered\"  >\n              <thead id=\"headerTable\">\n                  <tr>\n                      <th *ngFor='let iterador2 of tableTitle'> {{  iterador2 }} </th>\n                  </tr>\n              </thead>\n              <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                  <tr *ngIf=\"i > 1 && records &&  i < numberRecord-1 \">\n                    <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                  </tr>\n                    <tr *ngIf=\"i === numberRecord-1\" id=\"Headertable\" >\n                      <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                  </tr> \n              </tbody>\n          </table>\n      </div>\n   </div>\n   </ion-content>\n   "

/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvUmVwb3J0ZXMvdmVudGFzLWJpbWVzdHJlL3ZlbnRhcy1iaW1lc3RyZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.ts ***!
  \**************************************************************************/
/*! exports provided: VentasBimestrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasBimestrePage", function() { return VentasBimestrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let VentasBimestrePage = class VentasBimestrePage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
        this.getCategoria();
    }
    ngOnInit() { }
    getSucursales() {
        this.sucursales = this.jsonService.getSucursales();
    }
    getCategoria() {
        this.categorias = this.jsonService.getCategoria();
    }
    tableResults(anio, idcategoria, idsucursal, semestre) {
        const formData = new FormData();
        formData.append('anio', anio);
        formData.append('idcategoria', idcategoria);
        formData.append('idsucursal', idsucursal);
        formData.append('semestre', semestre);
        this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasBimestre.php', formData).subscribe((res) => {
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
    }
};
VentasBimestrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ventas-bimestre',
        template: __webpack_require__(/*! ./ventas-bimestre.page.html */ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.html"),
        styles: [__webpack_require__(/*! ./ventas-bimestre.page.scss */ "./src/app/paginas/Reportes/ventas-bimestre/ventas-bimestre.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], VentasBimestrePage);



/***/ })

}]);
//# sourceMappingURL=Reportes-ventas-bimestre-ventas-bimestre-module.js.map