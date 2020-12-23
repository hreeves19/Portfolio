import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    retypePassword: new FormControl(null, [Validators.required])
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
  }

}
