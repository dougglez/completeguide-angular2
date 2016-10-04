import { Component, OnDestroy } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['../']">Home</a>
      <!-- <a [routerLink]="['/user']">User</a> -->
      <button (click)="onNavigate()">Go Home</button>
      <button [routerLink]="['/']">Go Home2</button>
      <hr>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {

  private subscription: Subscription;

  id: string;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
