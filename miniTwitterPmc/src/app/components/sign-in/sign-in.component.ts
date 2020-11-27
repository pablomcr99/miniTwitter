import { Component, OnInit } from '@angular/core';
import { SignUp} from '../../dto/signIn';
import {AuthService} from '../../services/auth.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  nuevoUsuario:SignUp;

  constructor(private authService:AuthService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.nuevoUsuario=new SignUp("","","");
  }

  registro(){
    this.authService.registro(this.nuevoUsuario).subscribe(data =>{
      this.router.navigate(["/"]);
    });
  }

  irLogin(){
    this.router.navigate(["/"]);
  }

 

}
