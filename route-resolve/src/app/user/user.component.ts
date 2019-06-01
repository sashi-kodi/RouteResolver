import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {User} from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: User[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
       this.users = data.users.users;
       
       
    })
  }

}
