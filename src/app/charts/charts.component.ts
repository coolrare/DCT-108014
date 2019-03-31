import { Component, OnInit } from '@angular/core';
import { chartBarDemo } from '../chart-bar-demo';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chartPieDemo();
    chartAreaDemo();
    chartBarDemo();
  }

}
