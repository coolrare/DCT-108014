import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, FormArray } from '@angular/forms';
import { passwordValidator1Fn, passwordValidator2Fn, compareEqual, checkUniqEmail } from '../shared/MyValidators';
import { HttpClient } from '@angular/common/http';

export interface UserProfile {
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
  emails: string[];
}


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  data: UserProfile;
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: ['', [Validators.required]],
      emails: this.fb.array([]),
      password: ['', [passwordValidator1Fn, passwordValidator2Fn]],
      password2: ['', [
        Validators.required, compareEqual('password'),
        Validators.minLength(8), Validators.maxLength(16)
      ]]
    });

    this.http.get<UserProfile>('http://www.mocky.io/v2/5cb2f4173000007d00a78ce8')
      .subscribe((user) => {
        this.data = user;
        this.resetForm();
      });
  }

  resetForm() {
    this.form.removeControl('emails');
    this.form.addControl('emails', this.fb.array([], checkUniqEmail));
    for (const email of this.data.emails) {
      (this.form.get('emails') as FormArray).push(this.fb.control('', [Validators.required, Validators.email]));
    }
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
