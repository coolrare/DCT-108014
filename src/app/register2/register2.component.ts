import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

function compareEqual(fieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    if (control.parent.get(fieldName).value === control.value) {
      return null;
    } else {
      return { compareEqual: true };
    }
  };
}


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      firstName: this.fb.control('Will', [Validators.required]),
      lastName: ['Huang', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8), Validators.maxLength(16)
      ]],
      password2: ['', [
        Validators.required, compareEqual('password'),
        Validators.minLength(8), Validators.maxLength(16)
      ]]
    });
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
    }
  }

  setDisabled(c: FormControl) {
    c.disable();
  }

}
