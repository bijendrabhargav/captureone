import { Component } from '@angular/core';

import { slideInOutAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOutAnimation]
})
export class AppComponent {
  title = 'skilling-you';

  isOpen = false;

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
