(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-menu-menu-module"],{

/***/ "./src/app/paginas/menu/menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/paginas/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/paginas/menu/menu.page.ts");







const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: '',
                redirectTo: '/menu/inicio',
                pathMatch: 'full'
            },
            {
                path: 'inicio',
                loadChildren: '../inicio/inicio.module#InicioPageModule',
                pathMatch: 'full'
            },
            {
                path: 'kardex',
                loadChildren: '../inventarios/kardex/kardex.module#KardexPageModule',
                pathMatch: 'full'
            },
            {
                path: 'mercancia-prestamo',
                loadChildren: '../inventarios/mercancia-prestamo/mercancia-prestamo.module#MercanciaPrestamoPageModule',
                pathMatch: 'full'
            },
            {
                path: 'gerente-general',
                loadChildren: '../Reportes/gerente-general/gerente-general.module#GerenteGeneralPageModule',
                pathMatch: 'full'
            },
            {
                path: 'utilidad',
                loadChildren: '../Reportes/utilidad/utilidad.module#UtilidadPageModule',
                pathMatch: 'full'
            },
            {
                path: 'ventas-sucursal',
                loadChildren: '../Reportes/ventas-sucursal/ventas-sucursal.module#VentasSucursalPageModule',
                pathMatch: 'full'
            },
            {
                path: 'ventas-vendedor',
                loadChildren: '../Reportes/ventas-vendedor/ventas-vendedor.module#VentasVendedorPageModule',
                pathMatch: 'full'
            },
            {
                path: 'cierre-caja',
                loadChildren: '../flujoCaja/cierres-caja/cierres-caja.module#CierresCajaPageModule',
                pathMatch: 'full'
            },
            {
                path: 'proximos-vencer',
                loadChildren: '../auditoria/proximos-vencer/proximos-vencer.module#ProximosVencerPageModule',
                pathMatch: 'full'
            },
            {
                path: 'reporte-salida',
                loadChildren: '../auditoria/reporte-salida/reporte-salida.module#ReporteSalidaPageModule',
                pathMatch: 'full'
            },
            {
                path: 'resoluciones-vencer',
                loadChildren: '../auditoria/resoluciones-vencer/resoluciones-vencer.module#ResolucionesVencerPageModule',
                pathMatch: 'full'
            },
            {
                path: 'devoluciones-venta',
                loadChildren: '../auditoria/devoluciones-venta/devoluciones-venta.module#DevolucionesVentaPageModule',
                pathMatch: 'full'
            },
            {
                path: 'traslado-sin-registro',
                loadChildren: '../auditoria/traslado-sin-registro/traslado-sin-registro.module#TrasladoSinRegistroPageModule',
                pathMatch: 'full'
            },
            {
                path: 'egresos',
                loadChildren: '../flujoCaja/egresos/egresos.module#EgresosPageModule',
                pathMatch: 'full'
            },
            {
                path: 'reporte-edades',
                loadChildren: '../cxc/reportes-edades/reportes-edades.module#ReportesEdadesPageModule',
                pathMatch: 'full'
            },
            {
                path: 'reporte-edades2',
                loadChildren: '../cxp/reportes-edades/reportes-edades.module#ReportesEdadesPageModule',
                pathMatch: 'full'
            },
            { path: 'facturacion',
                loadChildren: '../Reportes/facturacion/facturacion.module#FacturacionPageModule',
                pathMatch: 'full' },
            { path: 'pospago-segmento',
                loadChildren: '../Reportes/pospago-segmento/pospago-segmento.module#PospagoSegmentoPageModule',
                pathMatch: 'full' },
            { path: 'ventas-producto',
                loadChildren: '../Reportes/ventas-producto/ventas-producto.module#VentasProductoPageModule',
                pathMatch: 'full' },
            { path: 'ventas-recarga',
                loadChildren: '../Reportes/ventas-recarga/ventas-recarga.module#VentasRecargaPageModule',
                pathMatch: 'full' },
            { path: 'ventas-claro-hogar',
                loadChildren: '../Reportes/ventas-claro-hogar/ventas-claro-hogar.module#VentasClaroHogarPageModule',
                pathMatch: 'full' },
            { path: 'ventas-marca',
                loadChildren: '../Reportes/ventas-por-marca/ventas-por-marca.module#VentasPorMarcaPageModule',
                pathMatch: 'full' },
            { path: 'compras-marca',
                loadChildren: '../Reportes/compras-marca/compras-marca.module#ComprasMarcaPageModule',
                pathMatch: 'full' },
            { path: 'ventas-horas',
                loadChildren: '../Reportes/ventas-horas/ventas-horas.module#VentasHorasPageModule',
                pathMatch: 'full' },
            { path: 'ventas-dias',
                loadChildren: '../Reportes/ventas-dias/ventas-dias.module#VentasDiasPageModule',
                pathMatch: 'full' },
            { path: 'ventas-mes',
                loadChildren: '../Reportes/ventas-mes/ventas-mes.module#VentasMesPageModule',
                pathMatch: 'full' },
            { path: 'ventas-bimestre',
                loadChildren: '../Reportes/ventas-bimestre/ventas-bimestre.module#VentasBimestrePageModule',
                pathMatch: 'full' },
            { path: 'ventas-semestre',
                loadChildren: '../Reportes/ventas-semestre/ventas-semestre.module#VentasSemestrePageModule',
                pathMatch: 'full' },
            { path: 'ventas-anio',
                loadChildren: '../Reportes/ventas-anio/ventas-anio.module#VentasAnioPageModule',
                pathMatch: 'full' },
            { path: 'recaudos',
                loadChildren: '../Reportes/recaudos/recaudos.module#RecaudosPageModule',
                pathMatch: 'full' },
            { path: 'gastos',
                loadChildren: '../Reportes/gastos/gastos.module#GastosPageModule',
                pathMatch: 'full' },
            { path: 'evidentes',
                loadChildren: '../Reportes/evidentes/evidentes.module#EvidentesPageModule',
                pathMatch: 'full' },
            { path: 'separados',
                loadChildren: '../Reportes/separados/separados.module#SeparadosPageModule',
                pathMatch: 'full' },
            { path: 'datacredito',
                loadChildren: '../Reportes/datacredito/datacredito.module#DatacreditoPageModule',
                pathMatch: 'full' },
            { path: 'inconsistencias',
                loadChildren: '../Reportes/inconsistencias/inconsistencias.module#InconsistenciasPageModule',
                pathMatch: 'full' },
            { path: 'descuentos',
                loadChildren: '../Reportes/descuentos/descuentos.module#DescuentosPageModule',
                pathMatch: 'full' },
            { path: 'ventas-cliente',
                loadChildren: '../Reportes/ventas-cliente/ventas-cliente.module#VentasClientePageModule',
                pathMatch: 'full' },
        ]
    }
];
/* window.addEventListener('offline', function(e) { alert('offline'); }); */
/* window.addEventListener('online', function(e) { alert('online'); }); */
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/paginas/menu/menu.page.html":
/*!*********************************************!*\
  !*** ./src/app/paginas/menu/menu.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-menu contentId=\"content\">\n\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <div *ngFor=\"let p of pages\"> -->\n\n      <!-- Standard Menu Item -->\n      <!-- <ion-menu-toggle *ngIf=\"p.url\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n          <ion-label>\n            {{ p.title }}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n      <!-- Item with Children -->\n\n      <!-- <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\" detail=\"false\">\n        <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n        <ion-label>{{ p.title }}</ion-label>\n      </ion-item> -->\n\n      <!-- Children List for clicked Item -->\n      <!-- <ion-list *ngIf=\"p.open\">\n        <ion-menu-toggle>\n          <ion-item *ngFor=\"let sub of p.children\" class=\"sub-item\" [routerLink]=\"sub.url\" routerDirection=\"root\"\n            routerLinkActive=\"active\">\n            <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n            <ion-label>\n              {{ sub.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet> -->\n<ion-split-pane>\n  <ion-menu contentId=\"content\">\n\n    <ion-header>\n      <ion-toolbar color=\"secundary\"  >\n            <img src=\"/assets/icon/favicon.png\" alt=\"\"  width=\"40%\" class=\"images\"/>\n            <p> <ion-icon name=\"person\" style=\"color: black; \" ></ion-icon>{{ user }} </p>\n          \n      </ion-toolbar>\n    </ion-header>\n  \n\n      <ion-content>\n\n          <div auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <!--   {{ menu }} -->\n            <!-- Standard Menu Item -->\n            <ion-menu-toggle *ngIf=\"p.url\">\n              <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" color=\"primary\">\n                <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n                <ion-label>\n                  {{ p.title }}\n                </ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            <!-- Item with Children -->\n      \n            <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\" detail=\"false\" color=\"primary\">\n              <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n              <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n      \n            <!-- Children List for clicked Item -->\n            <ion-list *ngIf=\"p.open\">\n              <ion-menu-toggle>\n                <ion-item *ngFor=\"let sub of p.children\" class=\"sub-item\" [routerLink]=\"sub.url\" routerDirection=\"root\"\n                  routerLinkActive=\"active\" color=\"primary\">\n                  <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n                  <ion-label>\n                    {{ sub.title }}\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n            \n          </div>\n          <ion-item tappable (click)=\"backLogin($event)\" routerDirection=\"root\" color=\"primary\"  routerLink=\"/login\" >\n            <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n            Cerrar sesión\n          </ion-item>\n        </ion-content>\n\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/paginas/menu/menu.page.scss":
/*!*********************************************!*\
  !*** ./src/app/paginas/menu/menu.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  --ion-text-color: var(--ion-color-primary); }\n  .active ion-icon {\n    --ion-text-color-rgb: var(--ion-color-primary); }\n  .parent-active {\n  font-weight: 500; }\n  .sub-item {\n  padding-left: 20px;\n  font-size: small; }\n  .list-md {\n  background: var(--ion-item-background, var(--ion-background-color, #cd1818)); }\n  ion-content {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n  ion-header {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n  ion-content {\n  --ion-background-color:#cd1818; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZW51L0U6XFxNRUdBc3luY1xcTGlrZS9zcmNcXGFwcFxccGFnaW5hc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBaUIsRUFBQTtFQURyQjtJQUlRLDhDQUFxQixFQUFBO0VBSTdCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSw0RUFBMEUsRUFBQTtFQUU5RTtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0VBRXBCO0VBRUUsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7RUFHdEI7RUFFSSw4QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFyZW50LWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuICAubGlzdC1tZHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2NkMTgxOCkpO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcclxuICB9XHJcblxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNjZDE4MTg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/menu/menu.page.ts":
/*!*******************************************!*\
  !*** ./src/app/paginas/menu/menu.page.ts ***!
  \*******************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../session.service */ "./src/app/session.service.ts");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../json.service */ "./src/app/json.service.ts");





let MenuPage = class MenuPage {
    constructor(router, sessionService, jsonService) {
        this.router = router;
        this.sessionService = sessionService;
        this.jsonService = jsonService;
        this.menu = this.jsonService.menu();
        this.user = this.sessionService.getSessionLogged().user;
        this.pages = [
            {
                title: this.sessionService.getSessionLogged().company,
                url: '/menu/inicio',
                icon: 'home'
            },
            {
                title: 'Inventarios',
                children: [
                    {
                        title: 'Kardex',
                        url: '/menu/kardex',
                        icon: 'albums'
                    },
                    {
                        title: 'Mercancia en prestamo',
                        url: '/menu/mercancia-prestamo',
                        icon: 'md-clipboard'
                    }
                ]
            },
            {
                title: 'Flujo de caja',
                children: [
                    {
                        title: 'Mi cierre de caja',
                        url: '/menu/cierre-caja',
                        icon: 'checkbox-outline'
                    },
                    {
                        title: 'Egresos',
                        url: '/menu/egresos',
                        icon: 'cut'
                    }
                ]
            },
            {
                title: 'Reportes',
                children: [
                    {
                        title: '1. Gerente General',
                        url: '/menu/gerente-general',
                        icon: '1'
                    },
                    {
                        title: '2. Utilidad',
                        url: '/menu/utilidad',
                        icon: ''
                    },
                    {
                        title: ' 3. Ventas por sucursal',
                        url: '/menu/ventas-sucursal',
                        icon: ''
                    },
                    {
                        title: '4. Ventas por vendedor',
                        url: '/menu/ventas-vendedor',
                        icon: ''
                    },
                    {
                        title: '5. Reporte facturación',
                        url: '/menu/facturacion',
                        icon: ''
                    },
                    {
                        title: '6. Pospago por segmento',
                        url: '/menu/pospago-segmento',
                        icon: ''
                    },
                    {
                        title: '7. Ventas por producto',
                        url: '/menu/ventas-producto',
                        icon: ''
                    },
                    {
                        title: '8. Ventas por recargas',
                        url: '/menu/ventas-recarga',
                        icon: ''
                    },
                    {
                        title: '9. Ventas Claro hogar',
                        url: '/menu/ventas-claro-hogar',
                        icon: ''
                    },
                    {
                        title: '10. Ventas por marca',
                        url: '/menu/ventas-marca',
                        icon: ''
                    },
                    {
                        title: '11. Compras por marca',
                        url: '/menu/compras-marca',
                        icon: ''
                    },
                    {
                        title: '12. Ventas por horas',
                        url: '/menu/ventas-horas',
                        icon: ''
                    },
                    {
                        title: '13. Ventas por dia',
                        url: '/menu/ventas-dias',
                        icon: ''
                    },
                    {
                        title: '14. Ventas por mes',
                        url: '/menu/ventas-mes',
                        icon: ''
                    },
                    {
                        title: '15. Ventas por bimestre',
                        url: '/menu/ventas-bimestre',
                        icon: ''
                    },
                    {
                        title: '16. Ventas por semestre',
                        url: '/menu/ventas-semestre',
                        icon: ''
                    },
                    {
                        title: '17. Ventas por año',
                        url: '/menu/ventas-anio',
                        icon: ''
                    },
                    {
                        title: '18. Recuados cps/cvs',
                        url: '/menu/recaudos',
                        icon: ''
                    },
                    {
                        title: '19. Ingresos y gastos',
                        url: '/menu/gastos',
                        icon: ''
                    },
                    {
                        title: '20. Evidentes',
                        url: '/menu/evidentes',
                        icon: ''
                    },
                    {
                        title: '21. Separados',
                        url: '/menu/separados',
                        icon: ''
                    },
                    {
                        title: '22. Datacredito',
                        url: '/menu/datacredito',
                        icon: ''
                    },
                    {
                        title: '23. Inconsistencias',
                        url: '/menu/inconsistencias',
                        icon: ''
                    },
                    {
                        title: '24. Descuentos',
                        url: '/menu/descuentos',
                        icon: ''
                    },
                    {
                        title: '25. Ventas por cliente',
                        url: '/menu/ventas-cliente',
                        icon: ''
                    }
                ]
            },
            {
                title: 'Auditoria',
                children: [
                    {
                        title: 'Próximos a vencer CAD',
                        url: '/menu/proximos-vencer',
                        icon: 'md-briefcase'
                    },
                    {
                        title: 'Reporte remisión salida',
                        url: '/menu/reporte-salida',
                        icon: 'md-cash'
                    },
                    {
                        title: 'Resoluciones próximas a vencer',
                        url: '/menu/resoluciones-vencer',
                        icon: 'md-home'
                    },
                    {
                        title: 'Devoluciones de venta',
                        url: '/menu/devoluciones-venta',
                        icon: 'md-people'
                    },
                    {
                        title: 'Traslados sin registro de entrada',
                        url: '/menu/traslado-sin-registro',
                        icon: 'md-people'
                    }
                ]
            },
            {
                title: 'Cuentas por cobrar',
                children: [
                    {
                        title: 'Reporte edades',
                        url: '/menu/reporte-edades',
                        icon: 'time'
                    }
                ]
            },
            {
                title: 'Cuentas por pagar',
                children: [
                    {
                        title: 'Reporte edades',
                        url: '/menu/reporte-edades2',
                        icon: 'time'
                    }
                ]
            }
        ];
        this.paginaSeleccionada = '';
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.paginaSeleccionada = event.url;
            }
        });
    }
    ngOnInit() {
    }
    backLogin(event) {
        alert('Sessión cerrada');
        this.sessionService.setSessionLoggedOut();
    }
};
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! ./menu.page.html */ "./src/app/paginas/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/paginas/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
        _json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=paginas-menu-menu-module.js.map