import { Component, OnInit } from '@angular/core';  
import { Router, ActivatedRoute } from '@angular/router';   
import { SignUpModel } from '../signup/signup.component';   

interface ErrorMessages {  
  email?: string;  
  password?: string;  
}  

export class LoginModel {  
  email: string;  
  password: string;  

  constructor() {  
    this.email = "";  
    this.password = "";  
  }  
}  

@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  

export class LoginComponent implements OnInit {  
  loginObj: LoginModel = new LoginModel();  
  errorMessages: ErrorMessages = {};  
  userName: string = ''; 

  constructor(private router: Router, private route: ActivatedRoute) {}  

  ngOnInit() {  
    // Retrieve the email from route parameters  
    this.route.params.subscribe(params => {  
      if (params['email']) {  
        this.loginObj.email = params['email'];  
        this.loadUserNameByEmail(); // Load the user's name using the retrieved email  
      } else {  
        this.loadUserName(); // Load the last user's name if no email parameter is provided  
      }  
    });  
  }  

  loadUserNameByEmail() {  
    const localUser = localStorage.getItem('angular17users');  
    if (localUser) {  
      const users: SignUpModel[] = JSON.parse(localUser);  
      // Find the user with the corresponding email  
      const existingUser = users.find((user: SignUpModel) => user.email === this.loginObj.email);  
      if (existingUser && existingUser.name) {  
        this.userName = existingUser.name; // Set the user's name  
      } else {  
        this.userName = ''; // Reset if no user is found  
      }  
    }  
  }  

  loadUserName() {  
    const localUser = localStorage.getItem('angular17users');  
    if (localUser) {  
      const users: SignUpModel[] = JSON.parse(localUser);  
      const currentUser = users[users.length - 1];   
      if (currentUser && currentUser.name) {  
        this.userName = currentUser.name; 
      }  
    }  
  }  

  onLogin(event: Event) {  
    event.preventDefault(); 
    console.log('Login button clicked');
    console.log('Login Object:', this.loginObj); 

    if (this.validateForm()) {  
      const localUser = localStorage.getItem('angular17users');  
      const users: LoginModel[] = localUser ? JSON.parse(localUser) : [];  

      // Check for existing user with the same email and password  
      const existingUser = users.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);  
      if (!existingUser) {  
        alert('Invalid email or password.');  
        return;  
      }  

      alert('Login Success');  
      this.router.navigate(['/login-successful']); 
    } else {  
      console.log('Validation failed', this.errorMessages);
    }  
  }  

  validateForm(): boolean {  
    this.errorMessages = {};  
    let isValid = true;  

    if (!this.loginObj.email) {  
      this.errorMessages.email = 'Email is required.';  
      isValid = false;  
    }  
    if (!this.loginObj.password) {  
      this.errorMessages.password = 'Password is required.';  
      isValid = false;  
    }  

    return isValid;  
  }  
}