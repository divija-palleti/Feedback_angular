import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiServicesService } from '../api-services.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
  
})
export class ThankyouComponent implements OnInit {



  refId = [];
  constructor(private modalService: NgbModal, private http :HttpClient,private refid : ApiServicesService) {}
  closeResult: string;

  
  ngOnInit() {

   
  }



  functionRefId()
  {
        
  this.refid.getRef().subscribe(data => 
    {this.refId = data;
     console.log(this.refId);
    });
  }



  openWindow(content) {
   
    this.modalService.open(content, { windowClass: 'dark-modal' , centered: true});
  
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
}
