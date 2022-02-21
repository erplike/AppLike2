import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/* import { HttpClientModule } from '@angular/common/http';  */
import { JsonService } from './json.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
/* import { TableComponent } from './table/table.component'; */


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent {
  /* name = this.sessionService.getSessionLoggedIn(); */
  sessionUser = this.sessionService.getSessionLogged().user;
  sessionIdUser = this.sessionService.getSessionLogged().iduser;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public json: JsonService,
    public sessionService: SessionService,
    public router: Router
   /*  public tableComponent: TableComponent */
  ) {
    this.initializeApp();
   /*  this.verifyLogin(); */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 /*  verifyLogin() {
    let logged = this.sessionService.getSessionLogged().isSessionLoggedIn;
    if (logged) {
      this.router.navigateByUrl('menu/inicio');
    } else {
      this.router.navigateByUrl('/');
    }
  } */
  login() {
    this.sessionUser = this.sessionService.getSessionLogged().user;
    this.sessionIdUser = this.sessionService.getSessionLogged().iduser;
  }
  backLogin() {
    /* var success = function(status) {
      alert('Message: ' + status);
  // tslint:disable-next-line: semicolon
  }
  // tslint:disable-next-line: only-arrow-functions
  // tslint:disable-next-line: align
  var error = function(status) {
      alert('Error: ' + status);
  // tslint:disable-next-line: semicolon
  }
  (window as any).cache.clear(success, error); */
    alert('Sesión cerrada');
    window.location.reload();
    this.sessionService.setSessionLoggedOut();
    /* setTimeout(() =>
    {
      window.location.reload();
    },
100);
  }
  refresh() {
    window.location.reload();
  } */
}
}
