import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: LoginDto;

  
  constructor(private authService: AuthService) { 
    this.usuario = new LoginDto('dam2019@gmail.com', '1234');
  }

  ngOnInit() {
  }

  doLogin() {
   
    this.authService.login(this.usuario).subscribe(respuesta => {
        console.log('API TOKEN ' + respuesta.token);
    });
  }

}
