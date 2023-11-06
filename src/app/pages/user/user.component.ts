import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private userServices:UserService){}


  dataSource:UserModel[]=[];
  userAdd:UserModel=new UserModel;
  
  ngOnInit(): void {
    this.dataSource=[
    //{
    //   id:0,
    //   name:'teste',
    //   email:'teste@email.com'
    // },
    // {
    //   id:1,
    //   name:'teste1',
    //   email:'teste@email.com1' 
    //}
  ];
  this.loadUsers();
  }


  btnSearch(user:UserModel):void{
    this.userServices.getById(user.id).subscribe((resultado:UserModel)=>{
      let json=JSON.stringify(resultado);
      alert(json);
    })
  }

  btnDelete(user:UserModel):void{
    alert('Deletado');

    let index = this.dataSource.findIndex((item)=>item==user);

    this.dataSource.splice(index, 1);
    this.dataSource=Array.from(this.dataSource);
  }

  btnSave():void{
    if(this.userAdd.name){
      alert('Salvo');
      this.dataSource.push(this.userAdd);
      this.dataSource=Array.from(this.dataSource);
    }
  }

  loadUsers(){
    this.userServices.getAll().subscribe((result:UserModel[])=>{
      this.dataSource=result;
      console.log(result);
    })
  }

  
  
}
