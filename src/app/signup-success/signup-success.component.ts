import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';   

@Component({  
  selector: 'app-signup-success',  
  templateUrl: './signup-success.component.html',  
  styleUrls: ['./signup-success.component.css']  
})  
export class SignupSuccessComponent implements OnInit {  
  email: string;  

  constructor(private router: Router) {    
    this.email = '';  
  }  

  ngOnInit(): void {  
    setTimeout(() => {  
      this.router.navigate(['login', this.email]);
    }, 3000);  
  }  
}
