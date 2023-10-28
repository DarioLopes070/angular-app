import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nome:string;
  email:string;
  mensagem:string;

  constructor(){
    this.nome="";
    this.email="";
    this.mensagem="";

  }

  enviarFormulario(): void{

    console.log(this.nome);
    console.log(this.email);
    console.log(this.mensagem);
    
  
  }
  


}


