import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { BookList } from './components/book-list/book-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'books', component: BookList, canActivate: [authGuard] },
  // { path: 'quotes', component: Quotes, canActivate: [authGuard] },
  // { path: 'books/add', component: BookForm, canActivate: [authGuard] },
  // { path: 'books/edit/:id', component: BookForm, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
