import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { CheckStatusComponent} from '../check-status'
import {ApiServicesService } from '../api-services.service';
//import { userInfo } from '../userInformation';
//import { AppRoutingModule,routingComponents } from '..//app-routing.module';
@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {

  public userInfo  = [];

  constructor(private http :HttpClient,private userinfo : ApiServicesService)
   { }


   

 
  ngOnInit() {
    

    this.userinfo.getInfo().subscribe(data => 
      {this.userInfo = data;
       console.log(this.userInfo);
      });
     
  }
  columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  
  done()
  {
    
  }

}
