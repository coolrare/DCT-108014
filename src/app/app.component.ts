import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from './chartAreaDemo';
import { chartPieDemo } from './chartPieDemo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }
}
