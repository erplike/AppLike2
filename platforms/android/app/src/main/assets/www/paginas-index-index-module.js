(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-index-index-module"],{

/***/ "./src/app/paginas/index/index.module.ts":
/*!***********************************************!*\
  !*** ./src/app/paginas/index/index.module.ts ***!
  \***********************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/paginas/index/index.page.ts");







const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]
    }
];
let IndexPageModule = class IndexPageModule {
};
IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/paginas/index/index.page.html":
/*!***********************************************!*\
  !*** ./src/app/paginas/index/index.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Archivo+Black|Great+Vibes&display=swap\" rel=\"stylesheet\"> \n<link href=\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\" rel=\"stylesheet\">\n<meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<ion-header>\n    <ion-toolbar color=\"secondary\" >\n      <ion-title style=\"font-size: 100%; font-family:'Kaushan Script', cursive;text-align: center;\n   align-content: center; \"> <!--  IdNetworking <p> --> !Dejate asesorar por un experto!  <!-- </p> --></ion-title> \n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <br> <br>\n  <p style=\" -webkit-text-stroke: 1px black ; font-size: 150%; font-family: 'Archivo Black', sans-serif;\" >BIENVENIDO A IDNETWORKING!</p>\n  <br>\n  <ion-button style=\"width:60%\" routerLink=\"/login/\" > Acceder a Like </ion-button>\n  <br>\n  <br>\n  <i class=\"fa fa-cloud\"></i>\n<!--   <img src=\"/assets/icon/like.png\">\n  <div class=\"b\" > </div> -->\n  <div style=\"max-width:100%; background-color: black; opacity: 0.6; margin: 0 auto;\"><h3> ¿Qué es Like? </h3>\n    Software para distribuidores claro, con manejo de   inventario: por serial, DTH, facturación prepago, postpago,\n     reposiciones, Claro hogar, comisiones Claro/vendedores, reportes de gerencia y auditoría.\n     <br>\n     <p> </p>\n       <table class=\"table-responsive\" >\n        <tr>\n          <td>\n              <img src=\"/assets/icon/inventario.png\" width='60%'>\n          </td>\n          <td>\n              <img src=\"/assets/icon/facturacion.png\" width='60%'>\n          </td>\n          <td>\n             <img src=\"/assets/icon/cuentas.png\" width='60%'></td>\n        </tr>\n        <tr>\n              <td>Inventario</td>\n              <td>Facturación</td>\n              <td>Ctas. x cobrar y x pagar</td>\n        </tr>\n        <tr>\n          <td>\n            <img src=\"/assets/icon/contabilidad.png\" width='60%'>\n          </td>\n          <td>\n            <img src=\"/assets/icon/reportes.png\" width=60%>\n          </td>\n          <td>\n             <img src=\"/assets/icon/auditoria.png\" width=60%>\n          </td>\n        </tr>\n        <tr>\n            <td>Contabilidad</td>\n            <td>Reportes</td>\n            <td>Auditoria</td>\n        </tr>\n        <tr >\n          <td><img src=\"/assets/icon/comisiones.png\" width=60%></td>\n        </tr>\n        <tr>\n          <td>Comisiones</td>\n        </tr>\n       </table> \n    </div>\n   \n     <br>\n     <div style=\"max-width:100%; background-color: red ; opacity: 0.6; margin: 0 auto;\">\n     <h4>Ventas: 310 223 9220</h4>\n     <h4>Soporte:  322 5308285, 311 8194609 </h4>\n    </div>\n     <!-- <div class=\"cc\"><p><strong> Inventario</strong></p> Administración de inventario prepago, postpago, DTH,\n      por serial y por cantidad, traslados entre sucursales, préstamos a vendedores, informes de valoración </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/index/index.page.scss":
/*!***********************************************!*\
  !*** ./src/app/paginas/index/index.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none;\n  background-image: url(b.jpg);\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  -webkit-text-decoration-color: white;\n          text-decoration-color: white;\n  --ion-text-color: white  ;\n  /*  -webkit-text-fill-color: yellowgreen; */ }\n\n.b {\n  --background: none;\n  background-image: url(like.JPG);\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  -webkit-text-decoration-color: white;\n          text-decoration-color: white;\n  --ion-text-color: white  ;\n  /*  -webkit-text-fill-color: yellowgreen; */ }\n\n.a {\n  font-family: 'Pattaya', sans-serif;\n  font-size: 150%;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n\n.cc {\n  max-width: 90%;\n  background-color: blue;\n  opacity: 0.4;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  float: center;\n  margin: 0 auto;\n  /*  --ion-text-color: blue; \r\n     text-decoration-color: blue ; */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9pbmRleC9FOlxcTUVHQXN5bmNcXExpa2Uvc3JjXFxhcHBcXHBhZ2luYXNcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2luYXMvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7RUFDYiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9DQUE2QjtVQUE3Qiw0QkFBNkI7RUFDN0IseUJBQWlCO0VBQ2xCLDJDQUFBLEVBQTRDOztBQUcvQztFQUNJLGtCQUFhO0VBQ2IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBNkI7VUFBN0IsNEJBQTZCO0VBQzdCLHlCQUFpQjtFQUNsQiwyQ0FBQSxFQUE0Qzs7QUFHL0M7RUFDSSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGNBQWE7RUFDWixzQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNmO29DQ0RnQyxFREVDIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGUgOyBcclxuICAgIC0taW9uLXRleHQtY29sb3I6IHdoaXRlICA7IFxyXG4gICAvKiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHllbGxvd2dyZWVuOyAqL1xyXG4gICAgXHJcbn1cclxuLmIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGxpa2UuSlBHKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlIDsgXHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB3aGl0ZSAgOyBcclxuICAgLyogIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB5ZWxsb3dncmVlbjsgKi9cclxuICAgIFxyXG59XHJcbi5he1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXR0YXlhJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmNje1xyXG4gICAgbWF4LXdpZHRoOjkwJTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XHJcbiAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qICAtLWlvbi10ZXh0LWNvbG9yOiBibHVlOyBcclxuICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsdWUgOyAqL1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChiLmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGU7XG4gIC0taW9uLXRleHQtY29sb3I6IHdoaXRlICA7XG4gIC8qICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogeWVsbG93Z3JlZW47ICovIH1cblxuLmIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChsaWtlLkpQRyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGU7XG4gIC0taW9uLXRleHQtY29sb3I6IHdoaXRlICA7XG4gIC8qICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogeWVsbG93Z3JlZW47ICovIH1cblxuLmEge1xuICBmb250LWZhbWlseTogJ1BhdHRheWEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cblxuLmNjIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8qICAtLWlvbi10ZXh0LWNvbG9yOiBibHVlOyBcclxuICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGJsdWUgOyAqLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/index/index.page.ts":
/*!*********************************************!*\
  !*** ./src/app/paginas/index/index.page.ts ***!
  \*********************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() {
    }
};
IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! ./index.page.html */ "./src/app/paginas/index/index.page.html"),
        styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/paginas/index/index.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=paginas-index-index-module.js.map