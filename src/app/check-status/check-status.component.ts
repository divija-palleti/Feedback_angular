import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';


import {ApiServicesService } from '../api-services.service';
import { isEmpty } from 'rxjs/operators';
import { isObject } from 'util';
@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})

export class CheckStatusComponent implements OnInit {

  public userInformation = [];

  constructor( private http :HttpClient,
     private route :ActivatedRoute, private router : Router,private userinfo : ApiServicesService) { }

  ngOnInit() {

    
  }
   
 


  displayInformation(event)
  {
     event.preventDefault();
     const target = event.target;
    
     const ref_id = target.querySelector('#referencenumber').value;
      console.log("lijfdlskj");  
     console.log(ref_id);


     this.userinfo.getInfo(ref_id).subscribe(data => 
      {this.userInformation = data;
       console.log(this.userInformation);
       console.log(this.userInformation);
    
    
       if(this.userInformation[0] == undefined)
        { 
          console.log("nitish");
        this.router.navigate(['re-enter'], {relativeTo : this.route}); 
   
        }
        else
        {
          this.router.navigate(['displayInfo',ref_id], {relativeTo : this.route});
        }
       
     
      });
    
        

     
  }

  



}