import { Component } from '@angular/core';  
import { Router } from '@angular/router';  

interface ErrorMessages {  
  name?: string;  
  email?: string;  
  password?: string;  
  organisationName?: string;
  organisationId?: string;
  designation?: string;  
  dateOfBirth?: string;  
  city?: string;  
  pincode?: string;  
}  

export class SignUpModel {  
  name: string;  
  email: string;  
  password: string;   
  organisationName: string;
  organisationId: string;
  designation: string;  
  dateOfBirth: string;  
  city: string;  
  pincode: string;  

  constructor() {  
    this.email = "";  
    this.name = "";  
    this.password = "";  
    this.organisationName = "";
    this.organisationId = "";
    this.designation = "";  
    this.dateOfBirth = "";  
    this.city = "";  
    this.pincode = "";  
  }  
}  

@Component({  
  selector: 'app-signup',  
  templateUrl: './signup.component.html',  
  styleUrls: ['./signup.component.css']  
})  

export class SignupComponent {  
  signUpObj: SignUpModel = new SignUpModel();  
  errorMessages: ErrorMessages = {};  
  currentPage: number = 1;  // For tracking the current page  

  constructor(private router: Router) {}  

  nextPage() {  
    if (this.currentPage === 1 && this.validateFirstPage()) {  
      this.currentPage = 2; // Go to the second page  
    }  
  }  

  onRegister() {  
    console.log('Register button clicked'); 
    console.log('SignUp Object:', this.signUpObj);  

    if (this.validateSecondPage()) {  
      const localUser = localStorage.getItem('angular17users');  
      const users: SignUpModel[] = localUser ? JSON.parse(localUser) : [];  

      // Check for existing user with the same email  
      const existingUser = users.find(user => user.email === this.signUpObj.email);  
      if (existingUser) {  
        alert('User with this email already exists.');  
        return;  
      }  

      users.push(this.signUpObj);  
      localStorage.setItem('angular17users', JSON.stringify(users));  
      alert('Registration Success');  
      this.resetForm();  
      this.router.navigate(['/signup-successful']); 
    } else {  
      console.log('Validation failed', this.errorMessages);   
    }  
  }  

  validateFirstPage(): boolean {  
    this.errorMessages = {};  
    let isValid = true;  

    if (!this.signUpObj.name) {  
      this.errorMessages.name = 'Name is required.';  
      isValid = false;  
    }  
    if (!this.signUpObj.email) {  
      this.errorMessages.email = 'Email is required.';  
      isValid = false;  
    }  
    if (!this.signUpObj.password) {  
      this.errorMessages.password = 'Password is required.';  
      isValid = false;  
    }  

    return isValid;  
  }  

  validateSecondPage(): boolean {  
    this.errorMessages = {};  
    let isValid = true;  

    if (!this.signUpObj.organisationName) {  
      this.errorMessages.organisationName = 'Organisation name is required.';  
      isValid = false;  
    }  
    if (!this.signUpObj.organisationId) {  
      this.errorMessages.organisationId = 'Organisation ID is required.';  
      isValid = false;  
    }  
    if (!this.signUpObj.city) {  
      this.errorMessages.city = 'City is required.';  
      isValid = false;  
    }  
    if (!this.signUpObj.pincode || !/^\d{6}$/.test(this.signUpObj.pincode)) {  
      this.errorMessages.pincode = 'Pincode must be a 6-digit number.';  
      isValid = false;  
    }  

    return isValid;  
  }  

  resetForm() {  
    this.signUpObj = new SignUpModel();  
    this.errorMessages = {};  
    this.currentPage = 1;  // Reset to first page  
  }  
}