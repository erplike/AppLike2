import { Injectable } from '@angular/core';
import { Session } from './session/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isSessionLoggedIn: boolean;
  public sessionLogged: Session;

  constructor() {
  this.isSessionLoggedIn = false;
  }

  setSessionLoggedIn(session: Session) {
    this.isSessionLoggedIn = true;
    this.sessionLogged = session;
    localStorage.setItem('currentSession', JSON.stringify(session));
  }
  setSessionLoggedOut() {
    const s: Session = {user: null, iduser: null, isSessionLoggedIn: false,
      dataBase: null, userDb: null, passDb: null, idcompany: null, company: null};
    localStorage.setItem('currentSession', JSON.stringify(s));
  }

  getSessionLogged() {
    if (localStorage.getItem('currentSession')) {
    return JSON.parse(localStorage.getItem('currentSession'));
    }
    return '';
  }
}
