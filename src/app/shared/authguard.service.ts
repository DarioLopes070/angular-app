import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private shared:SharedService, private router:Router) { }


  canActivate():Observable<boolean> | boolean{
    let logged:boolean=this.shared.isAuthenticated();

    if(!logged){
      this.router.navigate(['login']);

    }
    return logged;
  }
}
