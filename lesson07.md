# Form

1. Template Driven Form
   - [ngForm](https://angular.io/api/forms/NgForm)
   - [ngModel](https://angular.io/api/forms/NgModel)
   - [ngModelGroup](https://angular.io/api/forms/NgModelGroup)
2. Reactive Form
  - 需注入 `ReactiveFormsModule` from `@angular/forms`
  - FormGroup
  - FormControl
  - FormArray
  - FormBuilder
  - Validators: 表單驗證用

## 複習
- FormControl 預設值寫法
  - `new FormControl(inital value)`
  - `[inital value]`
  - 加上驗證條件
    - `[inital value, [同步型的驗證規則s]]`
  - 一開始就 disable 物件:  `[{value: inital value, disabled: true}]`

3. 其他筆記

- [ViewChild](https://angular.io/api/core/ViewChild)
- 
```html

<!-- 變數$ = Observable 型別的資料 -->
<div *ngIf="(data$ | async) as data">
  show data: {{ data }}
</div>
```


- FormGroup: ngForm, ngModelGroup
- FormControl: ngModel
{
 firstName: '',
   address: {
     city: '',
     area:''
   }
}

A?.B
?.  當 A === null 時，就不會去取 A.B 值

## 再說明的項目
1. Directive 套用的方式, eg: ngForm
2. SEO in Angular
  1. SSR (Server Side Rendering) - Angular Universal
    - nodejs server 將目前瀏覽的畫面在後端先跑一次，產生出來的 html 吐回給瀏覽器    
  2. Rendertron
