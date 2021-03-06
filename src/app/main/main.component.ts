import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // {
  //   city:'',
  //   area: '',
  //   zipcode:
  // }
  // formData = new FormGroup({
  //   city: new FormControl(),
  //   area: new FormControl(''),
  //   zipcode: new FormControl()
  // });
  formData = this.fb.group({
    city: '',
    area: '',
    zipcode: [{ value: '', disabled: true }, [Validators.required]]
  });

  data;
  cityOptions = [];
  areaOptions = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.http.get('/assets/cityarea.json').subscribe(data => {
      this.cityOptions = Object.keys(data);
      this.data = data;
    });

    // FormGroup.get(path) => 取得 FormControl
    this.formData.get('city').valueChanges.subscribe(city => {
      this.cityOptionChange(city);
      this.formData.get('zipcode').setValue('');
    });

    this.formData.get('area').valueChanges.subscribe(area => {
      const zipcode = this.areaOptionChange(area);
      this.formData.get('zipcode').setValue(zipcode);
    });
  }

  cityOptionChange(city) {
    if (city) {
      this.areaOptions = Object.keys(this.data[city]);
    } else {
      this.areaOptions = [];
    }
  }

  areaOptionChange(area) {
    return this.data[this.formData.get('city').value][area] || '';
  }

  send() {
    // 這裡的寫法在遇到 formControl 是 disable 時會有問題
    console.log(this.formData.getRawValue()); // will include disable controls' value

    //
    console.log(this.formData.value);
    // 送資料到後端 API
    // this.http.post('api url', f.value).subscribe();
  }
}
