import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  authS = inject(AuthService);

  logOut() {
    this.authS.logout();
  }
}
