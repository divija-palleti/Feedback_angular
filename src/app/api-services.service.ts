import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { userInfo } from './information';
import { Observable } from 'rxjs';
import {allInfo} from './information';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {


  private url : string ="/assets/data/info.json";
  private url1 : string ="/assets/data/info.json";

  constructor(private http :HttpClient) { }


  getInfo():Observable<userInfo[]>
  {
    return this.http.get<userInfo[]>(this.url);
  }

  getAllInfo() :Observable<allInfo[]>
  {
    return this.http.get<allInfo[]>(this.url1);
  }

}
