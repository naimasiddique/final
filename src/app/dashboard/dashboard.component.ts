import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url: string = "http://www.mocky.io/v2/5c76bcbe3200008b3df463a5";
  url2: string = "http://www.mocky.io/v2/5c76c715320000de20f463d1";
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  test: string;
  test2: string;
  response: any;
  response2: any;
  angularCourse() {
      this.http.get(this.url).subscribe( e => this.response = JSON.stringify(e));
      this.test = "OK";
      return false;
  }

  phpCourse() {
    this.http.get(this.url2).subscribe( e => this.response2 = JSON.stringify(e) );
    this.test2 = "OK from PHP";
  }

}
