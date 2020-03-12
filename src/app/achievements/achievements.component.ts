import { Component,  } from '@angular/core';

import { slideInOutAnimation } from '../animations/animations';
import jsondata from '../../assets/dummy.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  animations: [slideInOutAnimation]
})
export class AchievementsComponent  {
  isOpen = false;
  jsonData: any = jsondata;
  navigated = false;

  constructor(private router: Router) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
