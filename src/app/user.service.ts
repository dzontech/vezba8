import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.urlUser);
  }
}
