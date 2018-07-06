import { Component, OnInit } from '@angular/core';

import {ApiServicesService } from '../api-services.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-type-all',
  templateUrl: './type-all.component.html',
  styleUrls: ['./type-all.component.css']
})
export class TypeAllComponent implements OnInit {


  closeResult: string;

  public allInfo = [];
  constructor(private modalService: NgbModal,private allinfo : ApiServicesService) { }

  ngOnInit() {

    //this.content = content;

    this.allinfo.getInfo().subscribe(data => 
      {this.allInfo = data;
       console.log(this.allInfo);
      });
    
  }
 
  fulldetails()
  {
    
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
    columnDefs = [
		{headerName:'Reference Number', field: 'ref_id',cellRenderer: function(params) {
      return '<a  href ="javascript:void(0);" onclick="open(content);"  >'+ params.value+'</a>'
  }},
		{headerName: 'First Name', field: 'firstname' },
    {headerName: 'Last Name', field: 'lastname'},
    {headerName:'Feedback Type', field: 'feedbacktype' },
		{headerName: 'Subject', field: 'subject' },
   
    {headerName:'Date and Time', field: 'dt' },
		{headerName: 'Feedback Status', field: 'feedbackstatus' },
		
	];
/*
	  rowData = [
    { referencenumber: '5879898' ,firstname : 'Divija',secondname : 'Palleti', feedbacktype: 'Bug Report',subject: 'Subject',date :'7-8-2018',status :'open'},
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  */
  
  
  
}
