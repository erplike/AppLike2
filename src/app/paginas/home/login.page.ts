import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JsonService } from '../../json.service';
import { SessionService } from '../../session.service';
import { Session } from '../../session/session.model';
import { ResourceLoader } from '@angular/compiler';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  /*  public appComponent: AppComponent */
  constructor(public json: JsonService, private router: Router, private sessionService: SessionService, public nav: NavController) {
    /* this.router.navigateByUrl('/home'); */
   /*  public navCtrl: NavController, */
   /*  formBuilder: FormBuilder; */
   /* this.ngOnInit(); */
   /* window.location.reload(); */
   if (this.sessionService.getSessionLogged().isSessionLoggedIn) { this.navigate(); }
  }
  ngOnInit() {  }
  submmit(company: string, user: string, password: string) {
       
     if (company === '') {
       alert('Ingrese la empresa');
       return;
     }
     if (user === '') {
      alert('Ingrese el usuario');
      return;
    }
     if (password === '') {
      alert('Ingrese la contraseña');
      return;
    }
     this.json.login(company, user, password).subscribe((res: any) => {
      console.log(res);
      // tslint:disable-next-line: object-literal-shorthand
      if (!res.access) {  alert('Datos incorrectos'); return; }
     /*  alert('datos correctos'); */
      // tslint:disable-next-line: prefer-const
      let s: Session = {user: res.user, iduser: res.iduser, isSessionLoggedIn: res.access,
      dataBase: res.dataBase, userDb: res.userDb, passDb: res.passDb, idcompany: res.idcompany, company: res.company};
      this.sessionService.setSessionLoggedIn(s);
      /* window.location.reload(); */
    /*   this.appComponent.refresh(); */
      this.navigate();
     },  error => {
      console.error(error);
    },
    /* () => this.navigate() */
  );
  }
  navigate() {
    this.router.navigateByUrl('/menu/inicio');
  }
}
