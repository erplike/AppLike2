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
            }
        ]
    }
];
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

module.exports = ".active {\n  --ion-text-color: var(--ion-color-primary); }\n  .active ion-icon {\n    --ion-text-color-rgb: var(--ion-color-primary); }\n  .parent-active {\n  font-weight: 500; }\n  .sub-item {\n  padding-left: 20px;\n  font-size: small; }\n  .list-md {\n  background: var(--ion-item-background, var(--ion-background-color, #cd1818)); }\n  ion-content {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n  ion-header {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n  ion-content {\n  --ion-background-color:#cd1818; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZW51L0U6XFxNRUdBXFxMaWtlL3NyY1xcYXBwXFxwYWdpbmFzXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFpQixFQUFBO0VBRHJCO0lBSVEsOENBQXFCLEVBQUE7RUFJN0I7RUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLDRFQUEwRSxFQUFBO0VBRTlFO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7RUFFcEI7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQUd0QjtFQUVJLDhCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJlbnQtYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWItaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4gIC5saXN0LW1ke1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjY2QxODE4KSk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxyXG4gIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2NkMTgxODtcclxufSJdfQ== */"

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
                title: 'Inicio',
                url: '/menu/inicio',
                icon: 'home'
            },
            {
                title: 'Inventarios',
                children: [
                    {
                        title: 'Kardex',
                        url: '/menu/kardex',
                        icon: 'logo-google'
                    },
                    {
                        title: 'Mercancia en prestamo',
                        url: '/menu/merca',
                        icon: 'logo-google'
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