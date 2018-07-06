import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { userInfo } from './userInformation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {


  private url : string ="/assets/data/info.json";

  constructor(private http :HttpClient) { }


  getInfo():Observable<userInfo[]>
  {
    return this.http.get<userInfo[]>(this.url);
  }
}
