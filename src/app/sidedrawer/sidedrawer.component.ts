import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { slideInOutAnimation } from '../animations/animations';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  animations: [slideInOutAnimation]
})

export class SidedrawerComponent {
  isOpen = false;
  loggedIn$: Observable<boolean>;

  @ViewChild('container') container: ElementRef;

  constructor(private location: Location, private authService: AuthService) {
    document.addEventListener('click', this.offClickHandler);
    this.loggedIn$ = this.authService.isLoggedIn;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onLogout() {
    this.authService.logout();
  }

  goback = () => {
    this.location.back();
  }

  offClickHandler = (event: any) => {
    if (!this.container.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
}
}

