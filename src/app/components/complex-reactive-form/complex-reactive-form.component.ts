import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './complex-reactive-form.component.html',
  styleUrl: './complex-reactive-form.component.scss'
})
export class ComplexReactiveFormComponent {
  form!: FormGroup;
  errorData: any = {};
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      zipCode: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, Validators.required),
      expiryDate: new FormControl(null, Validators.required),
      cvv: new FormControl(null, Validators.required),
    });
  }

  get fullName() {
    return this.form.get('fullName');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get zipCode() {
    return this.form.get('zipCode');
  }
  get cardNumber() {
    return this.form.get('cardNumber');
  }
  get expiryDate() {
    return this.form.get('expiryDate');
  }
  get cvv() {
    return this.form.get('cvv');
  }

  submit() {
    this.errorData = {};
    if (this.fullName?.value?.split(' ')?.length < 2) {
      this.errorData['fullName'] = 'Full name must contain at least 2 words.'
    }
    if (this.phone?.value?.toString()?.length !== 10) {
      this.errorData['phone'] = 'Phone number must be a 10-digit number.'
    }
    if (this.zipCode?.value?.toString()?.length !== 5) {
      this.errorData['zipCode'] = 'Zip code must be exactly 5 digits.'
    }
    if (this.cardNumber?.value?.toString()?.length !== 16) {
      this.errorData['cardNumber'] = 'Card Number must be exactly 16 digits.'
    }
    if (new Date(this.expiryDate?.value) < new Date()) {
      this.errorData['expiryDate'] = 'Expiry date must be future date.'
    }
    if (this.cvv?.value?.toString()?.length !== 3) {
      this.errorData['cvv'] = 'CVV must be exactly 3 digits.'
    }
    if (Object.keys(this.errorData)?.length == 0) {
      alert("form is validated");
    } else {
      return;
    }
  }
}
