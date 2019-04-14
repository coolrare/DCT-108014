import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, FormArray } from '@angular/forms';
import { passwordValidator1Fn, passwordValidator2Fn, compareEqual } from '../shared/passwordValidator1Fn';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  data = {
    firstName: 'Will',
    lastName: 'Huang',
    password: '123123123',
    password2: '123123123',
    emails: [
      'user1@example.com',
      'user2@example.com'
    ]
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: ['', [Validators.required]],
      password: ['', [passwordValidator1Fn, passwordValidator2Fn]],
      password2: ['', [
        Validators.required, compareEqual('password'),
        Validators.minLength(8), Validators.maxLength(16)
      ]]
    });

    this.form.addControl('emails', this.fb.array([]));
    (this.form.get('emails') as FormArray).push(this.fb.control('', [Validators.required, Validators.email]));
    (this.form.get('emails') as FormArray).push(this.fb.control('', [Validators.required, Validators.email]));

    this.form.setValue(this.data);
  }

  resetForm() {
    this.form.reset(this.data);
  }

  addNewEmail() {
    const emails = this.form.get('emails') as FormArray;
    emails.push(this.fb.control('', [Validators.required, Validators.email]));
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
