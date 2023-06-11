import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/user`);
  }
  deleteUser(id: any): Observable<IUser> {
    return this.http.delete<IUser>(
      `http://localhost:8080/api/user/${id}`
   );
  }

  
}
