import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }


  public getTweets = function () {
    const url = "https://www.minitwitter.com:3001/apiv1/tweets/all"+this.login.userId+"/messages?";
    const authToken = this.login.tokenUser;
    let headers = new HttpHeaders({ Authorization: `Bearer ${authToken}`});
    return this.http.get(url, { headers } );
  };
}
