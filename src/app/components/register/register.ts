import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, Loading],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';
  error = '';
  success = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    this.loading = true;
    this.authService.register(this.username, this.password).subscribe({
      next: (response: any) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/books']);
      },
      error: (err) => {
        this.loading = false;
        if (err.error?.errors) {
          const errors = err.error.errors;
          const allErrors = Object.values(errors).flat() as string[];
          this.error = allErrors.join(', ');
        } else {
          this.error = 'Något gick fel, försök igen';
        }
      },
    });
  }
}
