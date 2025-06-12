import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {
  private url = `https://jsonplaceholder.typicode.com/users`;

  constructor(private http:HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
