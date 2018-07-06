import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  constructor( private route :ActivatedRoute, private router : Router) { }

  ngOnInit() {
    
    this.loadAll();
    
  }

  loadComments()
  {
    this.router.navigate(['comments'], {relativeTo : this.route});
  }

  loadBug()
  {
    this.router.navigate(['bugreport'], {relativeTo : this.route});
  }

  loadQues()

  {
    this.router.navigate(['questions'], {relativeTo : this.route});
  }
  

  loadAll()
  {
    this.router.navigate(['all'], {relativeTo : this.route});
  }
 /*
 typeX()
  {
    console.log("kjhfkjsdf");
    this.router.navigate(['#'], {relativeTo : this.route});
  }
*/
}
