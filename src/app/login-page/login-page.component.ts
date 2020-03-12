import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { slideInOutAnimation } from '../animations/animations';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  animations: [slideInOutAnimation]
})
export class LoginPageComponent  {
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  userDetails = new FormGroup({
    username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(10)
    ]),
    password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
    ])
});

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onFormSubmit() {
    if (this.userDetails.valid) {
      this.authService.login(this.userDetails.value);
    }
  }
}
