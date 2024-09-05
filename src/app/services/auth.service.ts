import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authF: Auth) {}

  public logueado: any = false;

  async estaLogueado() {
    await authState(this.authF).forEach((user) => {
      this.logueado = user;
      console.log(user);
    });
  }

  async register(mail: string, pass: string) {
    createUserWithEmailAndPassword(this.authF, mail, pass).then((usr) => {
      this.logueado = usr;
      console.log(usr);
    });
  }

  login(mail: string, pass: string) {
    signInWithEmailAndPassword(this.authF, mail, pass).then((usr) => {
      this.logueado = usr;
    });
  }

  logout() {
    this.authF.signOut();
  }
}
