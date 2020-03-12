import { Component } from '@angular/core';

import jsondata from '../../assets/dummy.json';
import { slideInOutAnimation } from '../animations/animations';

@Component({
  selector: 'app-question-bank-master',
  templateUrl: './question-bank-master.component.html',
  animations: [slideInOutAnimation]
})
export class QuestionBankMasterComponent  {
  isOpen = false;
  jsonData: any = jsondata;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
