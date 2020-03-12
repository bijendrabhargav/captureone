import { Component } from '@angular/core';

import {slideInOutAnimation } from '../animations/animations';
import jsondata from '../..//assets/dummy.json';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  animations: [slideInOutAnimation],
  providers: [AuthService]
})
export class GalleryComponent {
  isOpen = false;
  jsonData: any = jsondata;

  constructor(private authSrvice: AuthService) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
