import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-res',
  templateUrl: './edit-res.component.html',
  styleUrls: ['./edit-res.component.css']
})
export class EditResComponent implements OnInit {


  data:any;
  constructor( private route: ActivatedRoute, private router: Router) { }
   agInit(params)
   {
     this.data=params.value;
   }
  ngOnInit() {
  }

  function(data)
  {
    this.router.navigate(['edit_provider',data]);
  }
}
