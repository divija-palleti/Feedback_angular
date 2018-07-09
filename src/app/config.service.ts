

import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { userInfo } from './information';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
@NgModule({
  providers: [HttpClient]
})
export class ConfigService {

  GetHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }
  // tslint:disable-next-line:member-ordering
  configUrl = 'http://192.168.122.1:3000/person/save';

  getConfig() {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) { }

  //   getUserDetails(sub, descr, fname, lname, email) {
  //     // post user details to HTTP
  //     // console.log(email);
  //     const user = {
  //       sub,
  //       descr,
  //       fname,
  //       lname,
  //       email
  //     };
  //     console.log(user);
  //     return this.http.post<User>(this.configUrl, user, { headers: this.GetHttpHeaders() }).subscribe(data => {
  //       console.log(data, 'is what we get');
  //     });
  //   }
  // }
  getUserDetails(sub: any, descr: any, fname: any, lname: any, email: any,status:any,comments:any) {
    return this.http.post<any>(this.configUrl, { firstname: fname, lastname: lname, subject: sub, descr: descr, email: email, feedbackstatus :status ,comments:comments})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }
}