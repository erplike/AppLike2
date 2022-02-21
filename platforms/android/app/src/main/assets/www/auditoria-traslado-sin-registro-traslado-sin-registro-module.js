(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auditoria-traslado-sin-registro-traslado-sin-registro-module"],{

/***/ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrasladoSinRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrasladoSinRegistroPageModule", function() { return TrasladoSinRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _traslado_sin_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./traslado-sin-registro.page */ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.ts");







const routes = [
    {
        path: '',
        component: _traslado_sin_registro_page__WEBPACK_IMPORTED_MODULE_6__["TrasladoSinRegistroPage"]
    }
];
let TrasladoSinRegistroPageModule = class TrasladoSinRegistroPageModule {
};
TrasladoSinRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_traslado_sin_registro_page__WEBPACK_IMPORTED_MODULE_6__["TrasladoSinRegistroPage"]]
    })
], TrasladoSinRegistroPageModule);



/***/ }),

/***/ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Traslados sin registro de entrada </ion-title>\n  </ion-toolbar>\n</ion-header>\n<br>\n<br>\n<ion-content padding>\n  <div id=table>\n    <ion-spinner name=\"circles\" *ngIf=\"!records\" id=\"colorLoading\"></ion-spinner>\n    <div class=\"table-responsive\" *ngIf=\"records\">\n        <!-- <hr style=\"color: #0056b2 ;\" noshade=\"noshade\" size=\"10\" width=\"100%\"  /> \n        <br> -->\n        <h3>Traslados sin descargar en destino\n        </h3>\n        <table class=\"table table-bordered\"  >\n            <thead>\n                    <th *ngFor='let iterador2 of tableTitle' id=\"Headertable\"> {{  iterador2 }} </th>\n            </thead>\n            <tbody *ngFor='let iterador of ( table  | async)  ; let i=index'>\n                <tr *ngIf=\"i > 1 && records\">\n                    <td *ngFor='let iterador2 of ( tableTitle ); let j=index'> {{ iterador[j] }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYXVkaXRvcmlhL3RyYXNsYWRvLXNpbi1yZWdpc3Ryby90cmFzbGFkby1zaW4tcmVnaXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.ts ***!
  \***************************************************************************************/
/*! exports provided: TrasladoSinRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrasladoSinRegistroPage", function() { return TrasladoSinRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let TrasladoSinRegistroPage = class TrasladoSinRegistroPage {
    constructor(jsonService, componentFactoryResolver, viewContainerRef) {
        this.jsonService = jsonService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.tableComponent = _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"];
    }
    ngOnInit() { this.tableResults(); }
    tableResults() {
        const formData = new FormData();
        this.jsonService.postJson('https://app.networkingsas.com/app/auditoria/trasladoSinRegistro.php', formData).subscribe((res) => {
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
            this.records = true;
            this.tableTitle = data[1];
            this.table = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        });
    }
};
TrasladoSinRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-traslado-sin-registro',
        template: __webpack_require__(/*! ./traslado-sin-registro.page.html */ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.html"),
        styles: [__webpack_require__(/*! ./traslado-sin-registro.page.scss */ "./src/app/paginas/auditoria/traslado-sin-registro/traslado-sin-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], TrasladoSinRegistroPage);



/***/ })

}]);
//# sourceMappingURL=auditoria-traslado-sin-registro-traslado-sin-registro-module.js.map