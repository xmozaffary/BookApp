import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { BookList } from './components/book-list/book-list';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'books', component: BookList },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
