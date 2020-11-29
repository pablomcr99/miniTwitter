import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Tweet} from '../dto/tweet';
import {createTweet} from '../dto/createTweet'


const allTweetsUrl = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const nTweetUrl= 'https://www.minitwitter.com:3001/apiv1/tweets/create';
let usuarioLogeado= JSON.parse(localStorage.getItem('usuarioActual'));
let token= usuarioLogeado.token;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ token
  })
};

@Injectable({
  providedIn: 'root'
})
export class AllTweetsService {

  constructor(private http:HttpClient) { }

  tweets():Observable<Tweet[]>{
    return this.http.get<Tweet[]>(allTweetsUrl,httpOptions);
  }

  crearTweet(tweet:createTweet):Observable<Tweet>{
    return this.http.post<Tweet>(nTweetUrl,tweet,httpOptions);
  }


}
