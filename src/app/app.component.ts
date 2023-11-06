import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private shared:SharedService){}



  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno: string) => {
      if(retorno){
        this.isAuth=true;
      }else{
        this.isAuth=false;
      }
      
    })
  }
  title = 'angular-app';
  showFiller = false;

  isAuth:boolean=false;

}
