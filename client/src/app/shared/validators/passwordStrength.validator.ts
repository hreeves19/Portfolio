import { FormControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(control: FormControl) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{12,}$/g;
  const value = control.value;
  return !passwordRegex.test(value) ? {passwordStrength: control.value} : null;
}
