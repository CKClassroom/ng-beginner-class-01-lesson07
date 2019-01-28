import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('city') cityOption: ElementRef;

  data;
  cityOptions = [];
  areaOptions = [];
  zipcode = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/cityarea.json').subscribe(data => {
      this.cityOptions = Object.keys(data);
      this.data = data;
    });
  }
  cityOptionChange(event) {

    if (event.target.value) {
      this.areaOptions = Object.keys(this.data[event.target.value]);
    } else {
      this.areaOptions = [];
    }
    this.zipcode = '';
  }

  areaOptionChange(event) {
    const city = this.cityOption.nativeElement.value;
    if (event.target.value) {
      this.zipcode = this.data[city][event.target.value];
    } else {
      this.zipcode = '';
    }
  }
}
