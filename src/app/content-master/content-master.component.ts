import { Component } from '@angular/core';

import { slideInOutAnimation } from '../animations/animations';
import jsondata from '../../assets/dummy.json';

@Component({
  selector: 'app-content-master',
  templateUrl: './content-master.component.html',
  animations: [slideInOutAnimation]
})
export class ContentMasterComponent {

  isOpen = false;
  jsonData: any = jsondata;

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
