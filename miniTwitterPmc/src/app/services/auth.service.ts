import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Login} from '../dto/login';
import {SignUp} from '../dto/signIn';
import { Observable } from 'rxjs';
import {LoginResponse} from '../dto/login-response';
import {SigninResponse} from '../dto/signin-response';

const loginUrl = 'https://www.minitwitter.com:3001/apiv1/auth/login';

const signUpUrl ='https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(login: Login):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(loginUrl,login,httpOptions);
  }

  registro(signIn: SignUp):Observable<SigninResponse>{
    return this.http.post<SigninResponse>(signUpUrl,signIn,httpOptions);
  }
}
