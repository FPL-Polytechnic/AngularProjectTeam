import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/signup', data);
  }
  login = (user: IUser): Observable<IUser> => {
    return this.http.post<IUser>('http://localhost:8080/api/signin', user)
  }
}
