import { Component, OnInit } from '@angular/core';
import {userInfo} from '../information';
import {allInfo} from '../allinformation';
import {ApiServicesService } from '../api-services.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-type-all',
  templateUrl: './type-all.component.html',
  styleUrls: ['./type-all.component.css']
})
export class TypeAllComponent implements OnInit {


  closeResult: string;
  public type_id;
  public allInfo :allInfo[];
  constructor(private modalService: NgbModal,private allinfo : ApiServicesService,private route :ActivatedRoute, private router : Router) { 
    route.params.subscribe(val => {
      console.log('sdjdjdj');
      let type_id = this.route.snapshot.paramMap.get('type_id');
    this.type_id = type_id;
   // console.log(this.type_id);
        //this.content = content;

    this.allinfo.getAllInfo(type_id).subscribe(data => 
      {this.allInfo = data;
       console.log(this.allInfo);
      });
     });
  }
  ngOnInit() {


    let type_id = this.route.snapshot.paramMap.get('type_id');
    this.type_id = type_id;
   // console.log(this.type_id);
        //this.content = content;

    this.allinfo.getAllInfo(type_id).subscribe(data => 
      {this.allInfo = data;
       console.log(this.allInfo);
      });
    
  }

  users: userInfo[];

  fulldetails()
  {

    
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.type_id);
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
		{headerName: 'Feedback Status', field: 'feedbackstatus',cellTemplate: 'edit-button.html' },
		
  ];
  /*
  sendUser(event) {
    event.preventDefault();
    const target = event.target;
    const sub = target.querySelector('#subject').value;
    const descr = target.querySelector('#descr').value;
    const fname = target.querySelector('#firstname').value;
    const lname = target.querySelector('#lastname').value;
    const email = target.querySelector('#email').value;
    const status = target.querySelector('#feedbackstatus').value;
    const comments = target.querySelector('#comments').value;
    this.Config.getUserDetails({ sub }, { descr }, { fname }, { lname }, { email },{status},{comments} as userInfo);
    // console.log(fname, lname);
  }
/*
	  rowData = [
    { referencenumber: '5879898' ,firstname : 'Divija',secondname : 'Palleti', feedbacktype: 'Bug Report',subject: 'Subject',date :'7-8-2018',status :'open'},
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  */
  
  
  
}