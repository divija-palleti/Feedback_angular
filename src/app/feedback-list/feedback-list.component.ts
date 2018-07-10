import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {


  public type_id=0;
  public type ;
  constructor( private route :ActivatedRoute, private router : Router) { 

  }

  ngOnInit() {
   // this.router.navigate(['login']);
   this.type = "All";
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
    //this.types();
  }
 
  types()
  {
    if(this.type_id == 1)
    {
             this.type = "Comments";
    }

    if(this.type_id == 2)
    {
             this.type = "Bug Report";
    }

    if(this.type_id == 1)
    {
             this.type = "Questions";
    }

  }
  loadComments()
  {
    this.type_id=1;
    this.type = "Comments";
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }

  loadBug()
  {
    this.type_id=2;
    this.type = "Bug Report";
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }

  loadQues()

  {
    this.type_id=3;
    this.type = "Questions";
    this.router.navigate(['all',this.type_id], {relativeTo : this.route});
  }
  

  loadAll()
  {
    console.log(this.type_id);
    this.type_id=0;
    this.type = "All";
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