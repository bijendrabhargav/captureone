import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { zoomInOutAnimation } from '../animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [zoomInOutAnimation]
})
export class HeaderComponent {
  isOpen = true;
  loggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.loggedIn$ = this.authService.isLoggedIn;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }


  onLogout() {
    this.authService.logout();
  }
}
