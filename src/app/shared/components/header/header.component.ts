import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[];
  constructor(private auth: AuthService) {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Books', routerLink: '/books' },
    ];
  }
  logout() {
    this.auth.logout()
  }
}
