import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaTweetsComponent } from './component/lista-tweets/lista-tweets.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { TweetComponent } from './component/tweet/tweet.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaTweetsComponent,
    SignInComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
