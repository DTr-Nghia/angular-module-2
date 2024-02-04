import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { CartService } from '../../../cart/cart.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    MenubarModule,
    NgFor,
    NgIf,
    BadgeModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[];
  total: string;
  constructor(public auth: AuthService, public cartService: CartService) {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Users', routerLink: '/users' },
    ];
    this.cartService.cartTotal$.subscribe((count) => {
      this.total = count?.toString();
    });
  }
  logout() {
    this.auth.logout();
  }
}
