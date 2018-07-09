import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {


  public type_id=0;
  constructor( private route :ActivatedRoute, private router : Router) { }

  ngOnInit() {
    
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
    
  }

  loadComments()
  {
    this.type_id=1;
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }

  loadBug()
  {
    this.type_id=2;
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }

  loadQues()

  {
    this.type_id=3;
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }
  

  loadAll()
  {
    console.log(this.type_id);
    this.type_id=0;
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }
 /*
 typeX()
  {
    console.log("kjhfkjsdf");
    this.router.navigate(['#'], {relativeTo : this.route});
  }
*/
}
