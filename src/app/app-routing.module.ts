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
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './config.service';
import {EditResComponent} from './edit-res';
import {EditProviderComponent} from './edit-provider';
import { AuthGuard } from './auth.guard';
const routes : Routes = [

 // {path:'', component : FormComponent},
 {path :'edit_provider/:ref_id',component:EditProviderComponent,canActivate: [AuthGuard],},
  {path: 'feedback-form', component: FormComponent,
  children: [
    { path: 'form-details', component: FormDetailsComponent }
  ]
  }, 
  { path: 'login', component: LoginComponent },
  
  
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
    path : 'feedbackList' , component :FeedbackListComponent, canActivate: [AuthGuard],
    children :[
      {path : 'edit_res/:ref_id' , component : EditResComponent},
      {path :'all/:type_id' ,  component : TypeAllComponent},
      {path :'comments', component : TypeCommentsComponent},
      {path : 'bugreport',component : TypeBugreportComponent},
      {path : 'questions' , component : TypeQuestionsComponent}
    ]

  },
  { path: '', redirectTo: '/feedback-form', pathMatch: 'full'},
  { path: '**', redirectTo: '' } 
];
@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

export const routingComponents =[ThankyouComponent,CheckStatusComponent,ProviderAuthComponent,FeedbackListComponent,LoginComponent,FormComponent,FormDetailsComponent,EditResComponent,EditProviderComponent]