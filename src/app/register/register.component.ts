import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class RegisterViewModel {
  firstName = 'Will';
  lastName = 'Huang';
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

}
