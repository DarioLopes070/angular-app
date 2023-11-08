import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFormModel } from '../models/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  baseUrl:string="https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }

  getById(id:number):Observable<UserFormModel>{
    return this.http.get<UserFormModel>(`${this.baseUrl}/users/${id}`);
  }

  getAll():Observable<UserFormModel[]>{
    return this.http.get<UserFormModel[]>(`${this.baseUrl}/users`);
  }

  addUser(newUser:UserFormModel):Observable<UserFormModel>{
    return this.http.post<UserFormModel>(`${this.baseUrl}/users`,newUser);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<UserFormModel>(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id:number, newUser:UserFormModel):Observable<UserFormModel>{
    return this.http.put<UserFormModel>(`${this.baseUrl}/users/${id}`, newUser);
  }

}

