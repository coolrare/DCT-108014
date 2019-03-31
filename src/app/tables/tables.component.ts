import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, AfterViewInit {

  num = 3;
  data: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('num')) {
        this.num = +params.get('num');
      }
    });

    this.http.get('http://www.mocky.io/v2/5c9e523f3000005500ee97cf').subscribe(data => {
      this.data = data;
      setTimeout(() => { $('#dataTable').DataTable(); }, 0);
    });
  }

  ngAfterViewInit(): void {
    // $('#dataTable').DataTable();
  }

}
