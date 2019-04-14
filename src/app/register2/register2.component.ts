import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { passwordValidator1Fn, passwordValidator2Fn, compareEqual } from '../shared/passwordValidator1Fn';

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
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.email]),
        this.fb.control('', [Validators.required, Validators.email])
      ]),
      password: ['', [passwordValidator1Fn, passwordValidator2Fn]],
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
