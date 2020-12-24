import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordStrengthValidator } from 'src/app/shared/validators/passwordStrength.validator';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required, RxwebValidators.email()]),
    password: new FormControl(null, [Validators.required, passwordStrengthValidator]),
    retypePassword: new FormControl(null, [Validators.required, RxwebValidators.compare({fieldName: 'password'})])
  });
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.signupForm.value);
    if (!this.signupForm.valid) {
      return;
    }
    alert('valid');
  }

}
