import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule,routingComponents } from './/app-routing.module';
import { DisplayInfoComponent } from './display-info/display-info.component';

import {AgGridModule} from 'ag-grid-angular' ;

import {HttpClientModule} from '@angular/common/http';

import {ApiServicesService } from './api-services.service';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TypeAllComponent } from './type-all/type-all.component';
import { TypeCommentsComponent } from './type-comments/type-comments.component';
import { TypeBugreportComponent } from './type-bugreport/type-bugreport.component';
import { TypeQuestionsComponent } from './type-questions/type-questions.component';
import { ReEnterComponent } from './re-enter/re-enter.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './config.service';
import { EditResComponent } from './edit-res/edit-res.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DisplayInfoComponent,
    TypeAllComponent,
    TypeCommentsComponent,
    TypeBugreportComponent,
    TypeQuestionsComponent,
    ReEnterComponent,
    EditResComponent,
    EditProviderComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AgGridModule.withComponents([routingComponents]),
    HttpClientModule
  ],
  providers: [ApiServicesService],entryComponents:[EditResComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
