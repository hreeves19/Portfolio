import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('hreeves1610221719168@gmail.com', [Validators.required, RxwebValidators.email()]),
    password: new FormControl('xInSaN3xSk1llzx#!', [Validators.required])
  });
  isLoading: boolean = false;
  hide: boolean = true;

  constructor(
    private authService: AuthenticateService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.loginForm.value);

    if (!this.loginForm.valid) {
      return;
    }

    this.isLoading = true;
    this.authService.login(this.loginForm.value).pipe(take(1)).subscribe(
      (result) => {
        console.log(result);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
