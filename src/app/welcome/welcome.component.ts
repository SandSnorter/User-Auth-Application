import { Component } from '@angular/core';  
import { Router } from '@angular/router';  

export class UserModel {  
  email: string;  
  phone: string;  

  constructor(email: string, phone: string) {  
    this.email = email;  
    this.phone = phone;  
  }  
}  

export class WelcomeModel {  
  email: string;  
  phone: string;  

  constructor() {  
    this.email = '';  
    this.phone = '';  
  }  
}  

@Component({  
  selector: 'app-welcome',  
  templateUrl: './welcome.component.html',  
  styleUrls: ['./welcome.component.css']  
})  

export class WelcomeComponent {  
  welcomeObj: WelcomeModel = new WelcomeModel();  
  errorMessages: { email?: string; phone?: string } = {}; 

  constructor(private router: Router) {}  

  onWelcome(event: Event) {  
    event.preventDefault(); // Prevent default form submission behavior  
    this.errorMessages = {}; // Reset error messages  

    // Validate the form  
    if (!this.validateForm()) {  
      console.log('Validation failed', this.errorMessages);  
      return; // Stop further execution if validation fails  
    }  

    const localUser = localStorage.getItem('angular17users');  
    const users: UserModel[] = localUser ? JSON.parse(localUser) : []; 

    // Check if email is entered  
    if (this.welcomeObj.email) {  
      // Use the defined UserModel to give type to the user variable  
      const existingUser = users.find((user: UserModel) => user.email === this.welcomeObj.email);  

      if (existingUser) {  
        // If user exists, navigate to login page with email as route parameter  
        this.router.navigate(['/login', this.welcomeObj.email]);  
      } else {  
        // If user does not exist, navigate to signup page  
        this.router.navigate(['/signup']);  
      }  
    } else if (this.welcomeObj.phone) {  
      // If only phone number is entered, navigate to signup page  
      this.router.navigate(['/signup']);  
    }  
  }  

  validateForm(): boolean {  
    let isValid = true;  

    // Check if either email or phone is provided  
    if (!this.welcomeObj.email && !this.welcomeObj.phone) {  
      this.errorMessages.email = 'Either email or phone number is required.';  
      isValid = false;  
    }  

    // Check if both email and phone are provided  
    if (this.welcomeObj.email && this.welcomeObj.phone) {  
      this.errorMessages.email = 'Please provide either email or phone number.';  
      isValid = false;  
    }  

    return isValid;  
  }  
}