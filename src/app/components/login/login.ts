import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

import { NgIf } from '@angular/common';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Loading],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  error = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/books']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Fel användarnamn eller lösenord';
      },
    });
  }
}
