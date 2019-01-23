import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  memberName = '';
  members = [
    { id: 1, name: 'Kevin' },
    { id: 2, name: 'Amos' },
    { id: 3, name: 'T7' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const member = this.members.find(
        x => x.id.toString() === params.get('id')
      );
      this.memberName = member.name;
    });

    // this.route.queryParamMap.subscribe(queryParams => {
    //   console.log(queryParams);
    // });

    // this.route.fragment.subscribe(fragment => console.log(fragment));
  }

  goto() {
    this.router.navigate(['/about']);
    // this.router.navigateByUrl('/about');
  }

  ngOnInit() {
    console.log('profile component onInit');
  }

  ngOnDestroy() {
    console.log('profile component destroy');
  }
}
