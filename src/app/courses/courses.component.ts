import { Component } from '@angular/core';

import { slideInOutAnimation } from '../animations/animations';
import jsondata from '../../assets/dummy.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  animations: [slideInOutAnimation]
})
export class CoursesComponent {
  isOpen = false;
  jsonData: any = jsondata;

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
