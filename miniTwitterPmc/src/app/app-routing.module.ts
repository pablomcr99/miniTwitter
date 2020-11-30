import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { CrearTweetComponent } from './components/crear-tweet/crear-tweet.component';

const routes: Routes = [
  { path: "", component: LogInComponent, pathMatch: "full" },
  { path: "register", component: SignInComponent, pathMatch: "full" },
  { path: "inicio", component: TweetsComponent, pathMatch: "full"},
  { path: "nuevotweet", component: CrearTweetComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
