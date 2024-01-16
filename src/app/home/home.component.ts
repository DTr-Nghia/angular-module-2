import { Component } from '@angular/core';
import { User } from '../auth/shared/models/User';
import { AuthService } from '../auth/auth.service';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
   }
  ngOnInit(): void {
    
  }
}
