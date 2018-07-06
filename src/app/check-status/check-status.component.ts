import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';




@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  public userInformation = [];
 

  constructor( private http :HttpClient,
     private route :ActivatedRoute, private router : Router) { }

  ngOnInit() {

    
  }
   
 


  displayInformation()
  {
      this.router.navigate(['displayInfo'], {relativeTo : this.route});
  }

  



}
