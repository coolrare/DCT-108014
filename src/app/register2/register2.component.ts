import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';
  }

}
