import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrlUser = 'https://localhost:44323/api/applicationUser'

  constructor(private http : HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.baseUrlUser + '/getlist')
  }

  addUser(val : any):Observable<any>{
    return this.http.post<any>(this.baseUrlUser + '/add' , val);
  }

  updateUser(val : any):Observable<any>
  {
    return this.http.put<any>(this.baseUrlUser + '/update' , val);
  }

  deleteRole(id : any):Observable<any>
  {
    return this.http.delete<any>(this.baseUrlUser + '/delete/' + `${id}`);
  }

  getGroups(userid : any):Observable<any>
  {
    return this.http.get<any>(this.baseUrlUser + '/getGroups/' + `${userid}`)
  }


}
