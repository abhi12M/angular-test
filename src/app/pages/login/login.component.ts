import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;
  private router = inject(Router);

  constructor() {
    this.form = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    if (localStorage.getItem('userName')) {
      this.router.navigate(['dashboard']);
    }
  }

  submit() {
    if (this.form.value.userName !== 'admin' && this.form.value.password !== '123456') {
      alert('Invalid credentials!');
    } else {
      localStorage.setItem('userName', this.form.value.userName);
      this.router.navigate(['dashboard']);
    }
  }
}

