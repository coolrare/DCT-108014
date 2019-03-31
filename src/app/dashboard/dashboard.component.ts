import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chart-area-demo';
import { chartPieDemo } from '../chart-pie-demo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

  goTables(num: number) {
    this.router.navigate(['/tables'], { queryParams: { num } });
  }
}
