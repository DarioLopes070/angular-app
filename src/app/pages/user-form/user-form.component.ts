import { Component, OnInit } from '@angular/core';
import { UserFormModel } from './models/userForm.model';
import { UserFormService } from './services/user-form.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  constructor(private userFormServices:UserFormService){}


  dataSource:UserFormModel[]=[];
  userAdd:UserFormModel=new UserFormModel();
  
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


  btnSearch(user:UserFormModel):void{
    this.userFormServices.getById(user.id).subscribe((resultado:UserFormModel)=>{
      let json=JSON.stringify(resultado);
      alert(json);
    })
  }

  btnDelete(user:UserFormModel):void{
    alert('Deletado');

    let index = this.dataSource.findIndex((item)=>item==user);

    this.dataSource.splice(index, 1);
    this.dataSource=Array.from(this.dataSource);
  }

  btnSave():void{
    
    if(this.userAdd.name){
      alert('Salvo');

   let myObject=Object.assign({},this.userAdd);
    this.dataSource.push(myObject);
    this.dataSource=Array.from(this.dataSource);
    //
    this.clear();
    this.userAdd.clear();
    }
  }

  private clear(){
    this.userAdd.email="";
    this.userAdd.name="";
  }
  
  loadUsers(){
    this.userFormServices.getAll().subscribe((result:UserFormModel[])=>{
      this.dataSource=result;
      console.log(result);
    })
  }

  
  
}
