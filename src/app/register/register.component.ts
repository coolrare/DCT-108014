import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

class RegisterViewModel {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  password2 = '';
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data = new RegisterViewModel();

  constructor() { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
    }
  }

  setDisabled(c: NgModel) {
    c.control.disable();
  }

}
