import { Component, OnInit } from '@angular/core';
import {Login} from '../../dto/login';
import {AuthService} from '../../services/auth.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  usuario:Login;

  constructor(private authService:AuthService,private route: ActivatedRoute, private router: Router) {
    
   }
   ngOnInit(): void {
    this.usuario=new Login('','');
  }

  login(){
    this.authService.login(this.usuario).subscribe(data =>{
      localStorage.setItem('usuarioActual',JSON.stringify({'token':data.token}))
      this.router.navigate(["/inicio"]);
    });
  }

  irRegistro(){
    this.router.navigate(["/register"]);
  }

  

}
