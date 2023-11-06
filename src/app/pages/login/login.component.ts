import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private shared:SharedService){

  }




  username:string="";
  password:string="";
  mensagemLogin:string="";

  // btnLogin():void{
  //   if(this.username=="admin" && this.password=="admin"){
  //     this.mensagemLogin="Correto!";
  //     this.shared.setUsername("Dário.Lopes");
  //     this.router.navigate(["home"]);
  //   }else{
  //     this.mensagemLogin="Incorreto!";
  //   }
  // }


  btnLogin():void{
    if(this.username=="admin" || this.username=="123"){
      this.mensagemLogin="Correto!";
      this.shared.setUsername(this.username);
      // this.router.navigate(["home"]);
    }else{
      this.mensagemLogin="Incorreto!";
    }
  }


}
