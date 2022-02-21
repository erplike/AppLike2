(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap\" rel=\"stylesheet\">\n<ion-header >\n  <ion-toolbar>\n    <ion-title style=\"margin:15px; font-family:Handlee\">IdNetworking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <img src=\"/assets/icon/favicon.png\" alt=\"\" height=\"30%\" />\n<form name=\"login\">\n    <div class=\"form-group\" style=\"margin:15px; font-family:'Nanum Myeongjo'; font-size: 120%\">\n       Empresa  <input type=\"text\" name=\"company\"  id=\"company\" #company class=\"form-control\" autofocus>\n       Usuario <input type=\"text\" name=\"user\" #user class=\"form-control\" >\n       Contraseña  <input type=\"password\" #password name=\"password\" class=\"form-control\" >\n       <br>\n       <!-- routerLink=\"/home/\" -->\n       <button type=\"submit\" class=\"btn btn-danger btn-lg\" (click)=\"submmit(company.value, user.value, password.value)\">  Ingresar </button>\n      </div>\n      </form>\n     <!--  <div *ngIf=\"sessionLogged\"></div> -->\n     \n</ion-content>\n<script>\n  login.company.focus();\ndocument.getElementById(\"company\").focus();\n</script>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: white !important;\n  --ion-text-color: black ;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n\nion-header {\n  --ion-background-color: rgb(196, 20, 20) !important;\n  --ion-text-color: black ;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  align-self: center; }\n\n/*  ion-input {\r\n    input {\r\n      text-align: center;\r\n      /* IF YOU ALSO WANT TO PUSH PLACHEHOLDER TO THE RIGHT USE THE FOLLOWING, IF NOT JUST DELETE THE ::-webkit-input-placeholder*/\n\n/*  ::-webkit-input-placeholder {\r\n        text-align: center;\r\n      }\r\n    }\r\n  } */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXE1FR0FcXExpa2Uvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNHLHdDQUF3QjtFQUN4Qix3QkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbURBQXdCO0VBQ3hCLHdCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFckI7OztrSUNFaUk7O0FERTdIOzs7O0tDR0EiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIGlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3IgOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2sgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxyXG4gIH1cclxuICBpb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3IgOiByZ2IoMTk2LCAyMCwgMjApICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiBibGFjayA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAgXHJcbiAgfVxyXG4gLyogIGlvbi1pbnB1dCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLyogSUYgWU9VIEFMU08gV0FOVCBUTyBQVVNIIFBMQUNIRUhPTERFUiBUTyBUSEUgUklHSFQgVVNFIFRIRSBGT0xMT1dJTkcsIElGIE5PVCBKVVNUIERFTEVURSBUSEUgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyKi9cclxuICAgICAvKiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICovICIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2sgO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyMCwgMjApICFpbXBvcnRhbnQ7XG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrIDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuXG4vKiAgaW9uLWlucHV0IHtcclxuICAgIGlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvKiBJRiBZT1UgQUxTTyBXQU5UIFRPIFBVU0ggUExBQ0hFSE9MREVSIFRPIFRIRSBSSUdIVCBVU0UgVEhFIEZPTExPV0lORywgSUYgTk9UIEpVU1QgREVMRVRFIFRIRSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIqL1xuLyogIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json.service */ "./src/app/json.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../session.service */ "./src/app/session.service.ts");






var LoginPage = /** @class */ (function () {
    /*  public appComponent: AppComponent */
    function LoginPage(json, router, sessionService, nav) {
        this.json = json;
        this.router = router;
        this.sessionService = sessionService;
        this.nav = nav;
        /* this.router.navigateByUrl('/home'); */
        /*  public navCtrl: NavController, */
        /*  formBuilder: FormBuilder; */
        /* this.ngOnInit(); */
        /* window.location.reload(); */
        /* if (this.sessionService.getSessionLoggedIn().isSessionLoggedIn) { this.navigate(); } */
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.submmit = function (company, user, password) {
        var _this = this;
        /* this.json.getJson().subscribe((res: any) => {
      console.log(res);
     }); */
        this.json.kardex().subscribe(function (res) {
            console.log(res);
        });
        this.json.login(company, user, password).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line: object-literal-shorthand
            if (!res.access) {
                alert('Datos incorrectos');
                return;
            }
            alert('datos correctos');
            // tslint:disable-next-line: prefer-const
            var s = { user: res.user, iduser: res.iduser, isSessionLoggedIn: res.access,
                database: res.database, userDb: res.userDb, passDb: res.passDb, idcompany: res.idcompany };
            _this.sessionService.setSessionLoggedIn(s);
            window.location.reload();
            /*   this.appComponent.refresh(); */
            /*  this.navigate(); */
        } /* ,  error => {
         console.error(error);
       },
       () => this.navigate() */);
    };
    LoginPage.prototype.navigate = function () {
        this.router.navigateByUrl('/home');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map