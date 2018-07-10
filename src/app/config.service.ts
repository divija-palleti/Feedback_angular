import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './form-details/user';
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

   public  x :string;

  GetHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }
  // tslint:disable-next-line:member-ordering
  configUrl = 'http://192.168.122.1:3000/person/save';
  configUrl1 = 'http://192.168.122.1:3000/person/save';

  getrefid()
  {
    return this.x;
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) { }

    getUserDetails(subject, descr, firstname, lastname, email, feedbacktype) {
      // post user details to HTTP
      console.log(feedbacktype);

       this.http.post<any>(this.configUrl, { subject, descr, firstname, lastname, email, feedbacktype},
        { headers: this.GetHttpHeaders() }).subscribe(data => {
         // this.x= data.ref_id;
         this.x="3uyd8";
         console.log( this.x);

      });
      console.log( this.x);
      return this.x;
    }
    putUserDetails( feedbackstatus, comments,ref_id) {
      // post user details to HTTP
      //console.log(feedbacktype);

       this.http.put<any>(this.configUrl1+'/'+ref_id+'?', { feedbackstatus, comments},
        { headers: this.GetHttpHeaders() }).subscribe(data => {
         // this.x= data.ref_id;
        

      });
     
    }
  }
//   getUserDetails(sub: any, descr: any, fname: any, lname: any, email: any) {
//     return this.http.post<any>(this.configUrl, { firstname: fname, lastname: lname, subject: sub, descr: descr, email: email })
//       .pipe(map(user => {
//         // login successful if there's a jwt token in the response
//         if (user) {
//           // store user details and jwt token in local storage to keep user logged in between page refreshes
//           localStorage.setItem('currentUser', JSON.stringify(user));
//         }

//         return user;
//       }));
//   }
// }
