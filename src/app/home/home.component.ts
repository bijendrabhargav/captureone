import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { slideInOutAnimation } from '../animations/animations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slideInOutAnimation]
})
export class HomeComponent {
  isOpen = false;
  dislay = true;
  loggedIn$: Observable<boolean>;

  constructor(private router: Router, private authervice: AuthService) {
    this.loggedIn$ = this.authervice.isLoggedIn;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  display = () => {
    return this.router.url === '/home' ? true : false;
  }
}
