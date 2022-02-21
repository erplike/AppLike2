import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from './session.service';
import { Session } from './session/session.model';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient, public sessionService: SessionService) { }

  getJson(url: string) {
    return this.http.get(url);
  }
   login(company: string, user: string, password: string ) {
    const formData = new FormData();
    formData.append('company', company);
    formData.append('user', user);
    formData.append('password', password);
    return this.http.post('https://app.networkingsas.com/login/seguridad.php', formData);
  }
    menu() {
      return this.http.get('https://app.networkingsas.com/login/seguridad.php');
    }
    sucursales() {
      const formData = new FormData();
      return this.postJson('https://app.networkingsas.com/app/sucursal.php', formData);
    }
    categorias() {
      const formData = new FormData();
      return this.postJson('https://app.networkingsas.com/app/sucursal.php', formData);
    }
    postJson(url: string , formData) {
      let s: Session = this.sessionService.getSessionLogged();
      formData.append('dataBase', s.dataBase);
      formData.append('idcompany', s.idcompany);
      formData.append('passDb', s.passDb);
      formData.append('userDb', s.userDb);
      formData.append('iduser', s.iduser);
      return this.http.post(url, formData);
    }
    getSucursales(): any [] {
      let data = [];
      this.postJson('https://app.networkingsas.com/app/sucursal.php', new FormData()).subscribe((res: Array<string>) => {
        console.log(res);
        /* let data = []; */
        let i = 0 ;
        // tslint:disable-next-line: only-arrow-functions
        Object.keys(res).forEach(function(key) {
          data[i] = (res[key]);
          i++;
        });
        console.log(data.length);
        // tslint:disable-next-line: no-string-literal
        return data;
       });
        // tslint:disable-next-line: align
        return data;
    }
    getCategoria(): any [] {
      let data = [];
      this.postJson('https://app.networkingsas.com/app/categoria.php', new FormData()).subscribe((res: Array<string>) => {
        console.log(res);
        /* let data = []; */
        let i = 0 ;
        // tslint:disable-next-line: only-arrow-functions
        Object.keys(res).forEach(function(key) {
          data[i] = (res[key]);
          i++;
        });
        console.log(data.length);
        // tslint:disable-next-line: no-string-literal
        return data;
       });
        // tslint:disable-next-line: align
        return data;
    }
}