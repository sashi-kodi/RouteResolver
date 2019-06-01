import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';    

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers = ()=>{
    let url = "http://localhost:3000/api/users";
    
    return this.http.get<User[]>(url)
  
  }
}
