import { Component } from '@angular/core';

import { slideInOutAnimation } from '../animations/animations';
import jsondata from '../../assets/dummy.json';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  animations: [slideInOutAnimation],
})
export class EventMasterComponent {

  isOpen = false;
  jsonData: any = jsondata;

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
