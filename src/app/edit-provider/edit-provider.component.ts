import { Component, OnInit } from '@angular/core';
import {ApiServicesService } from '../api-services.service';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
import { ConfigService } from '../config.service';
import {userInfo} from '../information';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {HttpClient} from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
let type = 10;

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {


  public userInfo  = [];
  public ref_id;
  closeResult: string;
  registerForm: FormGroup;
  submitted = false;
 
  constructor(private route: ActivatedRoute, private router: Router,private userinfo : ApiServicesService,private Config: ConfigService, private formBuilder: FormBuilder,private modalService: NgbModal, private http :HttpClient) 
   { 
    route.params.subscribe(val => {
      console.log('sdjdjdj');
      let ref_id = this.route.snapshot.paramMap.get("ref_id");
         this.ref_id=ref_id;
         console.log(ref_id);
      this.userinfo.getInfo(ref_id).subscribe(data => 
        {this.userInfo = data;
         console.log(this.userInfo);
         console.log(this.userInfo[0]);
         this.registerForm = this.formBuilder.group({
          subject: [this.userInfo[0].subject, Validators.required],
          descr: [this.userInfo[0].descr, Validators.required],
          status: [this.userInfo[0].feedbackstatus, Validators.required],
          comments: [this.userInfo[0].comments, ],
         
          email: [this.userInfo[0].email, [Validators.required, Validators.email]],
        });
        
        });
     });
  }

  ngOnInit() {

   this.registerForm = this.formBuilder.group({
      subject: ['', Validators.required],
      descr: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['', ],
     
      email: ['', [Validators.required, Validators.email]],
    });
  
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return ;
    }
  }
  // tslint:disable-next-line:member-ordering
  handleChange(val) {
    type = val;
    console.log(val);
  }
  sendUser(event) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');
    event.preventDefault();
    const target = event.target;
    const subject = target.querySelector('#subject').value;
    const descr = target.querySelector('#descr').value;
    const feedbackstatus = target.querySelector('#status').value;
    const comments= target.querySelector('#comments').value;
  
    const email = target.querySelector('#email').value;
    console.log(type);
    this.Config.putUserDetails(feedbackstatus, comments);

  }

}
