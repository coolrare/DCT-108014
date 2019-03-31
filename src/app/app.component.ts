import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from './chart-area-demo';
import { chartPieDemo } from './chart-pie-demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';

  ngOnInit(): void {
  }
}
