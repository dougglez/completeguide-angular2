import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailGuard } from './user-detail.guard';

export const USER_ROUTES: Routes = [
  { path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
  { path: 'edit', component: UserEditComponent },
]
