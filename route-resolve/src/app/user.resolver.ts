import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Resolve} from '@angular/router';
import {User} from './user';


@Injectable()
export class UserResolver implements Resolve<User[]| User>{
   constructor(private userService: UserService){
   
   }
   
   resolve(){
    //if (route.params['id']) return this.userService.get(route.params['id']);
    return this.userService.getUsers();
   
   }
   
}