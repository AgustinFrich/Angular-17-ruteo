import { Component } from '@angular/core';
import { Usuario } from './classes/usuario';
import { AuthService } from './services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authS: AuthService) {
    //   authS.register('agustinfrich@gmail.com', '123456');
  }
}
