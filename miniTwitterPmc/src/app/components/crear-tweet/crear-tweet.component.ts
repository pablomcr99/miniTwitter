import { Component, OnInit } from '@angular/core';
import {createTweet} from '../../dto/createTweet';
import {AllTweetsService} from '../../services/all-tweets.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.css']
})
export class CrearTweetComponent implements OnInit {

  nuevoTweet:createTweet;

  constructor(private tweetService:AllTweetsService ,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.nuevoTweet=new createTweet("");
  }

  crearTweet(){
    this.tweetService.crearTweet(this.nuevoTweet).subscribe(resp=>{
      this.router.navigate(["/inicio"]);
    });
  }

  volvertweets(){
    this.router.navigate(["/inicio"]);
  }

}
