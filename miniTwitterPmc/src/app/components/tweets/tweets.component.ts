import { Component, OnInit } from '@angular/core';
import {AllTweetsService} from '../../services/all-tweets.service';
import {Tweet} from '../../dto/tweet';
import { ActivatedRoute,Router} from '@angular/router';
import {element} from 'protractor';
import {LikeService} from '../../services/like.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  listaTweets:Tweet[];

  constructor(private tweetService:AllTweetsService,private route: ActivatedRoute, 
    private router:Router, private likeService:LikeService) { }

  ngOnInit(): void {
    this.listaTweets=[];
    this.mostrarTweets();
  }

  mostrarTweets(){
    this.tweetService.tweets().subscribe(respuesta=>{
      respuesta.forEach(element =>{
        this.listaTweets.push(element);
      });
    });
  }

  megusta(id:number){
    this.likeService.like(id).subscribe(resp=>{
    console.log(resp);
    alert("Has indicado que te gusta el tweet");
    this.router.navigate(["/inicio"]);
    });
  }

  irNuevoTweet(){
    this.router.navigate(["/nuevotweet"]);
  }

}
