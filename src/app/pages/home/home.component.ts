import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
  implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterViewInit, 
    AfterViewChecked, 
    AfterContentInit, 
    AfterContentChecked, 
    OnDestroy 
{

  text:string="";

  ngOnInit(): void {
    //console.log("ngOnInit");
    this.text="Conteudo inicial"
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck =", this.text);  
  }
  ngAfterViewInit(): void {
    this.text="contudo alterado após [ngAfterViewInit]"
    //console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    //console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    this.text="contudo alterado após [ngAfterContentInit]"
    //console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.text="contudo alterado após [ngAfterContentChecked]"
    console.log(this.text);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }






































  constructor(private router: Router) { }

  btnLogin(): void {
    this.router.navigate(["login"]);
  }
  btnInscricao(): void {
    this.router.navigate(["inscricao"]);
  }
  btnContact(): void {
    this.router.navigate(["contact"]);
  }
}
