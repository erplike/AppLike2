(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-login-login-module"],{

/***/ "./src/app/paginas/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/paginas/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/paginas/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/paginas/login/login.page.html":
/*!***********************************************!*\
  !*** ./src/app/paginas/login/login.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>IdNetworking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <img src=\"/assets/icon/favicon.png\" alt=\"\"  width=\"30%\" class=\"images\"/>\n    <form name=\"login\">\n        <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\">\n           Empresa  <input type=\"text\" name=\"company\"  id=\"company\" #company class=\"form-control\" autofocus>\n           Usuario <input type=\"text\" name=\"user\" #user class=\"form-control\" >\n           Contrase??a  <input type=\"password\" #password name=\"password\" class=\"form-control\" >\n           <br>\n           <!-- routerLink=\"/home/\" -->\n          </div>\n          </form>\n  <ion-button  (click)=\"submmit(company.value, user.value, password.value)\">ACCEDER A LIKE</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/login/login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/paginas/login/login.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n\nion-header {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9sb2dpbi9FOlxcTUVHQVxcTGlrZS9zcmNcXGFwcFxccGFnaW5hc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/paginas/login/login.page.ts":
/*!*********************************************!*\
  !*** ./src/app/paginas/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../session.service */ "./src/app/session.service.ts");






let LoginPage = class LoginPage {
    /*  public appComponent: AppComponent */
    constructor(json, router, sessionService, nav) {
        this.json = json;
        this.router = router;
        this.sessionService = sessionService;
        this.nav = nav;
        /* this.router.navigateByUrl('/home'); */
        /*  public navCtrl: NavController, */
        /*  formBuilder: FormBuilder; */
        /* this.ngOnInit(); */
        /* window.location.reload(); */
        /* if (this.sessionService.getSessionLogged().isSessionLoggedIn) { this.navigate(); } */
    }
    ngOnInit() { }
    submmit(company, user, password) {
        /* this.json.getJson().subscribe((res: any) => {
      console.log(res);
     }); */
        this.json.login(company, user, password).subscribe((res) => {
            console.log(res);
            // tslint:disable-next-line: object-literal-shorthand
            if (!res.access) {
                alert('Datos incorrectos');
                return;
            }
            alert('datos correctos');
            // tslint:disable-next-line: prefer-const
            let s = { user: res.user, iduser: res.iduser, isSessionLoggedIn: res.access,
                database: res.database, userDb: res.userDb, passDb: res.passDb, idcompany: res.idcompany };
            this.sessionService.setSessionLoggedIn(s);
            /* window.location.reload(); */
            /*   this.appComponent.refresh(); */
            this.navigate();
        }, error => {
            console.error(error);
        });
    }
    navigate() {
        this.router.navigateByUrl('/menu/inicio');
    }
};
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.page.html */ "./src/app/paginas/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/paginas/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=paginas-login-login-module.js.map