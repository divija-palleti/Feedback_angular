import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private Auth: AuthService,private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(event) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    if (email === 'niharika@gmail.com' && password === 'niharika') {
      //alert('SUCCESS!! :-)');
      this.Auth.setLoggedIn(true);
      this.router.navigate(['feedbackList']);
    }
    else {
      this.Auth.setLoggedIn(false);
      this.router.navigate(['login']);
      alert('Please enter valid credentials');
    }
    
  }

}
