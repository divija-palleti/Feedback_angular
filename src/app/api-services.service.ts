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


  private url : string ="/assets/data/info.json";
  private url1 :string = "/assets/data/info.json";
  private url2 : string = "";//to get the ref number

  constructor(private http :HttpClient) { }


  getRef() : Observable<refId[]>
  {
    return this.http.get<refId[]>(this.url2);
  }
  getInfo():Observable<userInfo[]>
  {
    return this.http.get<userInfo[]>(this.url);
  }

  getAllInfo() :Observable<allInfo[]>
  {
    return this.http.get<allInfo[]>(this.url1);
  }

}
