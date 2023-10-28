import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }




  username:string="";
  password:string="";
  mensagemLogin:string="";

  btnLogin():void{
    if(this.username=="admin" && this.password=="admin"){
      this.mensagemLogin="Correto!";
      this.router.navigate(["home"]);
    }else{
      this.mensagemLogin="Incorreto!";
    }
  }


}
