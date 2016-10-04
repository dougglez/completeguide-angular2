import { Component } from '@angular/core';

import {HomeComponent} from './home-component.component';
import {UserComponent} from './user/user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .active {
        color: red;
      }
    `]
})
export class AppComponent {
  title = 'app works!';
}
