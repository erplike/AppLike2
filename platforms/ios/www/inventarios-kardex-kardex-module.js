(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventarios-kardex-kardex-module"],{

/***/ "./src/app/paginas/inventarios/kardex/kardex.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/inventarios/kardex/kardex.module.ts ***!
  \*************************************************************/
/*! exports provided: KardexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KardexPageModule", function() { return KardexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kardex_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kardex.page */ "./src/app/paginas/inventarios/kardex/kardex.page.ts");








const routes = [
    {
        path: '',
        component: _kardex_page__WEBPACK_IMPORTED_MODULE_7__["KardexPage"]
    }
];
let KardexPageModule = class KardexPageModule {
};
KardexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_kardex_page__WEBPACK_IMPORTED_MODULE_7__["KardexPage"], _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]],
        entryComponents: [_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]]
    })
], KardexPageModule);



/***/ }),

/***/ "./src/app/paginas/inventarios/kardex/kardex.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/inventarios/kardex/kardex.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Kardex</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n    <form name=\"kardex\">\n        <!-- <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\"> -->\n            <div class=\"x_content\">\n                <div   class=\"row\" >\n                  <div class='col-md-3'>\n                    <div class=\"form-group\">\n                      <label for=\"idsucursal\">Sucursal:</label>\n                      <select name=\"idsucursal\" id='idsucursal' class=\"chosen-select form-control input-sm\" #idsucursal>\n                        <option *ngFor=\"let sucursal of sucursales\"  value='{{ sucursal[0] }}' >{{ sucursal[1] }} </option>\n                      </select>              \n                    </div>            \n                  </div>          \n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"periodo\">Periodo:</label>\n                        <input type='month' class=\"form-control\"  id='periodo'  #periodo name='periodo' value=\"junio-2019\" placeholder=\"aaaa-mm\" >               \n                    </div> \n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label for=\"periodo\">filtro:</label>\n                            <input type=text class=\"form-control\"  id='periodo'  #filtro name='periodo'   >               \n                      </div> \n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\"><br>\n                            <ion-button (click)=\"tableResults(idsucursal.value, periodo.value, filtro.value)\">Buscar</ion-button>\n                      </div>\n                      </div> \n                </div>\n            </div>  \n     </form>\n     \n     <br>\n     <ng-template></ng-template>\n     <div id=table>\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered\"  *ngIf=\"records\">\n                <thead style=\"background-color: red\">\n                    <tr>\n                        <th *ngFor='let iterador2 of tableTitle'> {{  iterador2 }} </th>\n                    </tr>\n                </thead>\n                <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                    <tr *ngIf=\"i > 0 && records\">\n                        <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n     </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/inventarios/kardex/kardex.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/inventarios/kardex/kardex.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaW52ZW50YXJpb3Mva2FyZGV4L2thcmRleC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/inventarios/kardex/kardex.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/inventarios/kardex/kardex.page.ts ***!
  \***********************************************************/
/*! exports provided: KardexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KardexPage", function() { return KardexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let KardexPage = class KardexPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
        this.getSucursales();
    }
    ngOnInit() { this.tableResults(null, null, null); }
    getSucursales() {
        this.jsonService.getJson('https://app.networkingsas.com/app/sucursal.php').subscribe((res) => {
            console.log(res);
            let data = [];
            let i = 0;
            // tslint:disable-next-line: only-arrow-functions
            Object.keys(res).forEach(function (key) {
                data[i] = (res[key]);
                i++;
            });
            console.log(data.length);
            // tslint:disable-next-line: no-string-literal
            this.sucursales = data;
        });
    }
    tableResults(idsucursal, periodo, filtro) {
        const formData = new FormData();
        formData.append('idsucursal', idsucursal);
        formData.append('periodo', '');
        formData.append('filtro', '');
        this.jsonService.postJson('https://app.networkingsas.com/app/inventario/kardex.php', formData).subscribe((res) => {
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
                /* console.log(res[key]); */
                data[i] = (res[key]);
                i++;
            });
            console.log(data.length);
            // tslint:disable-next-line: no-string-literal
            this.tableTitle = data[0];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
            /* this.tableTitle= of(this.tableTitle); */
            /* window.location.reload(); */
            /*  alert(data.length); */
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], KardexPage.prototype, "container", void 0);
KardexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kardex',
        template: __webpack_require__(/*! ./kardex.page.html */ "./src/app/paginas/inventarios/kardex/kardex.page.html"),
        styles: [__webpack_require__(/*! ./kardex.page.scss */ "./src/app/paginas/inventarios/kardex/kardex.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], KardexPage);



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n    <table class=\"table table-bordered\">\n        <thead style=\"background-color: red\">\n            <tr>\n                <th *ngFor='let iterador2 of tableTitle'> {{  iterador2 }} </th>\n            </tr>\n        </thead>\n        <tbody *ngFor='let iterador of table; let i=index'>\n            <tr *ngIf=\"i > 0\">\n                <td *ngFor='let iterador2 of tableTitle; let j=index'> {{ iterador[j] }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<!-- <p *ngIf='table!=null' >{{ contact }} </p> -->"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");



let TableComponent = class TableComponent {
    /* contact: any[]; */
    constructor(jsonService) {
        this.jsonService = jsonService;
        this.name = 'nombre';
    }
    ngOnInit() {
        /* alert(this.init); */
        this.jsonService.getJson('https://app.networkingsas.com/app/' + this.page).subscribe((res) => {
            console.log(res);
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
            this.tableTitle = data[0];
            this.table = data;
            /* window.location.reload(); */
            /*  alert(data.length); */
        });
        /* alert(this.contact.length); */
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TableComponent.prototype, "page", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], TableComponent.prototype, "init", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"]])
], TableComponent);



/***/ })

}]);
//# sourceMappingURL=inventarios-kardex-kardex-module.js.map