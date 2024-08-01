import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  errorMessage: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      this.http.get<any[]>('http://localhost:3000/users').subscribe(
        (users) => {
          const user = users.find((u) => u.email === this.email?.value);
          if (user) {
            if (user.password === this.password?.value) {
              this.errorMessage = null; // Clear any previous error message
              if (
                user.fullName === 'Admin User' ||
                user.fullName === 'Asesor User'
              ) {
                this.router.navigate(['/dashboard']);
              } else {
                this.router.navigate(['/client-portal']);
              }
            } else {
              this.errorMessage = 'Contraseña incorrecta.';
            }
          } else {
            this.errorMessage = 'El usuario no existe. Debe registrarse.';
          }
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.errorMessage =
            'Error al verificar el usuario. Inténtelo de nuevo más tarde.';
        }
      );
    }
  }
}
