import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordStrengthValidator } from 'src/app/shared/validators/passwordStrength.validator';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { take } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(`hreeves${moment().format('x')}@gmail.com`, [Validators.required, RxwebValidators.email()]),
    password: new FormControl('xInSaN3xSk1llzx#!', [Validators.required, passwordStrengthValidator]),
    retypePassword: new FormControl('xInSaN3xSk1llzx#!', [Validators.required, RxwebValidators.compare({fieldName: 'password'})])
  });
  hide = true;
  isLoading: boolean = false;

  constructor(
    private authService: AuthenticateService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.signupForm.value);
    if (!this.signupForm.valid) {
      return;
    }

    this.isLoading = true; // Disable button
    this.authService.signup(this.signupForm.value).pipe(take(1)).subscribe(
      (result) => {
        console.log(result);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
