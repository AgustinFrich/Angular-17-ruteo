import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  constructor(private authS: AuthService) {}

  log() {
    this.authS.login('agus@mail.com', '123456');
  }

  register() {
    this.authS.register('agus@mail.com', '123456');
  }
}
