import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:3030/auth/login';

  constructor(private http: HttpClient) {
  }

  attemptAuth(email: string, password: string): Observable <any> {
    const credentials = {email: email, password: password};
    console.log('attempAuth ::' + credentials);
    return this.http.post(this.baseUrl, credentials);
  }

}
