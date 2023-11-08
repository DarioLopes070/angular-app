export class UserFormModel{
    id:number=0;
    name:string='';
    email:string='';
    
    clear(){
        this.email="";
        this.name="";
    }
}