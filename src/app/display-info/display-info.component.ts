import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { CheckStatusComponent} from '../check-status'
import {ApiServicesService } from '../api-services.service';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
//import { userInfo } from '../Information';
//import { AppRoutingModule,routingComponents } from '..//app-routing.module';
@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {

  public userInfo  = [];
   public ref_id;

  constructor(private http :HttpClient,private userinfo : ApiServicesService,  private route :ActivatedRoute, private router : Router)
   { }


   
 
 
  ngOnInit() {
    
    let ref_id = this.route.snapshot.paramMap.get("ref_id");
       this.ref_id=ref_id;
       console.log(ref_id);
    this.userinfo.getInfo().subscribe(data => 
      {this.userInfo = data;
       console.log(this.userInfo);
      });
     
  }
  
  done()
  {
    
  }

}
