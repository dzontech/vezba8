import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers() {
    this.serviceUser.getUsers().subscribe(data=>this.users=data);
  }

}
