import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; // Import UserListComponent
export const routes: Routes = [
    { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirect root to /users
  { path: '**', redirectTo: '/users' } // Wildcard route for a 404 page
];
