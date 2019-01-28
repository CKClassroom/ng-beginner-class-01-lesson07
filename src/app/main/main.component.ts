import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data;
  cityOptions = [];
  areaOptions = [];
  city = '';
  area = '';
  zipcode = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/cityarea.json').subscribe(data => {
      this.cityOptions = Object.keys(data);
      this.data = data;
    });
  }
  cityOptionChange() {
    if (this.city) {
      this.areaOptions = Object.keys(this.data[this.city]);
    } else {
      this.areaOptions = [];
    }
    this.zipcode = '';
  }

  areaOptionChange() {
    if (this.area) {
      this.zipcode = this.data[this.city][this.area];
    } else {
      this.zipcode = '';
    }
  }
}
