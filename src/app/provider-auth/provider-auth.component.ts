import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {passValidator} from '../custom-validators';

@Component({
  selector: 'app-provider-auth',
  templateUrl: './provider-auth.component.html',
  styleUrls: ['./provider-auth.component.css']
})
export class ProviderAuthComponent implements OnInit {


  rForm: FormGroup;
  post: any;
  name: string = '';
  
  password: string = '';
 

  constructor(fb: FormBuilder){
    this.rForm = fb.group({
      'name': [null, Validators.required],
      
      'password': [null,Validators.required],
     

    });
  }

  addForm(post){

  }
  ngOnInit() {
  }

}
