import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { AuthguardService } from './shared/authguard.service';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, canActivate:[AuthguardService]},
  {path: 'contact', component:ContactComponent, canActivate:[AuthguardService]},
  {path: 'inscricao', component:InscricaoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user', component:UserComponent, canActivate:[AuthguardService]},
  {path: '', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
