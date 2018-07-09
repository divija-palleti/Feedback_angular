import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ThankyouComponent} from './thankyou';
import { CheckStatusComponent} from './check-status';
import { DisplayInfoComponent } from './display-info';
import  {ProviderAuthComponent} from './provider-auth';
import  {FeedbackListComponent} from './feedback-list';
import {TypeAllComponent} from './type-all';
import {TypeCommentsComponent} from './type-comments';
import {TypeBugreportComponent} from './type-bugreport';
import {TypeQuestionsComponent} from './type-questions';
import {ReEnterComponent} from './re-enter';
const routes : Routes = [

  {path:'', component : ThankyouComponent},
  {
    path:'checkStatus',
    component : CheckStatusComponent,
    children :[
      {path : 'displayInfo/:ref_id', component :DisplayInfoComponent},
      {path :'re-enter',component: ReEnterComponent}
    ]
  },
  {
    path : 'provider' ,component : ProviderAuthComponent

  },
  {
    path : 'feedbackList' , component :FeedbackListComponent,
    children :[
     
      {path :'all/:type_id' ,  component : TypeAllComponent},
      {path :'comments', component : TypeCommentsComponent},
      {path : 'bugreport',component : TypeBugreportComponent},
      {path : 'questions' , component : TypeQuestionsComponent}
    ]

  },
 
];
@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

export const routingComponents =[ThankyouComponent,CheckStatusComponent,ProviderAuthComponent,FeedbackListComponent]