import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
export const passwordValidator1Fn = Validators.compose([
  Validators.required
]);
export const passwordValidator2Fn = Validators.compose([
  Validators.minLength(8),
  Validators.maxLength(16)
]);
export function compareEqual(fieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    if (control.parent.get(fieldName).value === control.value) {
      return null;
    }
    else {
      return { compareEqual: true };
    }
  };
}
