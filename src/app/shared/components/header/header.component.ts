import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[];
  constructor(public auth: AuthService) {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Users', routerLink: '/users' },
    ];
  }
  logout() {
    this.auth.logout();
  }
}
