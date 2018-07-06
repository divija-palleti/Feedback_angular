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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DisplayInfoComponent,
    TypeAllComponent,
    TypeCommentsComponent,
    TypeBugreportComponent,
    TypeQuestionsComponent,
   
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
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
