import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})

export class RegisterComponent {
  
  constructor(private router: Router) {}

  registerForm = new FormGroup({
    personType: new FormControl('', Validators.required),
    documentType: new FormControl('' , Validators.required),
    identificationNumber: new FormControl('' , Validators.required),
    name: new FormControl('', Validators.required ),
    email: new FormControl('' ,  [Validators.required, Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(8)] ),
    businessName: new FormControl(''),
    company: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required  )
  });

  submitted = false;
  showSuccessMessage = false;

  registerSubmit() {
    this.submitted = true;
    const invalidFields = this.getInvalidFields();
    if (Object.keys(invalidFields).length > 0) {
      return;
    }
    console.log(this.registerForm.value);
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.showSuccessMessage = false;
      this.resetForm();
      this.submitted = false;
      this.router.navigate(['/dashboard']);
    }, 2000); 
    
    
  }

  resetForm() {
    this.registerForm.patchValue({
      personType: '',
      documentType: '',
      identificationNumber: '',
      name: '',
      email: '',
      password: '',
      businessName: '',
      company: '',
      sector: ''
    });
    this.submitted = false;
  }

  getInvalidFields(): { [key: string]: boolean } {
    const invalidFields: { [key: string]: boolean } = {};

    if (this.registerForm.get('personType')?.invalid) {
      invalidFields['personType'] = true;
    }
    if (this.registerForm.get('documentType')?.invalid) {
      invalidFields['documentType'] = true;
    }
    if (this.registerForm.get('identificationNumber')?.invalid) {
      invalidFields['identificationNumber'] = true;
    }
    if (this.registerForm.get('name')?.invalid) {
      invalidFields['name'] = true;
    }
    if (this.registerForm.get('email')?.invalid) {
      invalidFields['email'] = true;
    }
    if (this.registerForm.get('password')?.invalid) {
      invalidFields['password'] = true;
    }
    if (this.registerForm.get('company')?.invalid) {
      invalidFields['company'] = true;
    }
    if (this.registerForm.get('sector')?.invalid) {
      invalidFields['sector'] = true;
    }

    return invalidFields;
  }

/*registerSubmit() {
  this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.showSuccessMessage = true;
    this.registerForm.reset();
    this.submitted = false;
  } */

  
 /*
  registerSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerForm.value);
  }*/
} 

