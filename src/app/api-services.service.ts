import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {userInfo} from './information';
import { Observable } from 'rxjs';
import {allInfo} from './allinformation';
import {refId} from './information';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
   



  private url : string ="http://localhost:3000/restDemo1/quizzes1";
  private url1 :string = "http://localhost:3000/restDemo/quizzes";
  private url2 : string = "http://localhost:3000/restDemo/getontype";//to get the ref number
  constructor(private http :HttpClient) { }


  getRef() : Observable<refId[]>
  {
    return this.http.get<refId[]>(this.url2);
  }
  getInfo(ref_id):Observable<userInfo[]>
  {
    console.log(ref_id);
    return this.http.get<userInfo[]>("./assets/data/info.json");
   // return this.http.get<userInfo[]>(this.url+'/'+ref_id+'?');
  }

  getAllInfo(type_id) :Observable<allInfo[]>
  {
    return this.http.get<allInfo[]>("./assets/data/info.json");

   // return this.http.get<allInfo[]>(this.url2+'/'+type_id+'?');
  }

}