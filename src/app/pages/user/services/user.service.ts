import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }

  getById(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);
  }

  getAll():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}/users`);
  }

  addUser(newUser:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.baseUrl}/users`,newUser);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<UserModel>(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id:number, newUser:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.baseUrl}/users/${id}`, newUser);
  }

}

