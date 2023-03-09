import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actividad } from "src/models/actividad";
import { User } from "src/models/user";
import { environment } from '../environment/environment.development'
@Injectable()
export class UserService {
    private heroes: User[] = [];
    constructor(
        private http: HttpClient) { }
  
    getUsers() {
        return this.http.get<User[]>(environment.apiUrl + "/User");
    }
    postUser(user:User) {
        return this.http.post<User>(environment.apiUrl + "/User",user);
    }
    updateUser(user:User) {
        return this.http.put<User>(environment.apiUrl + "/User",user);
    }
    deleteUser(id:number){
        return this.http.delete<User>(environment.apiUrl + "/User/" + id);
    }
    getActividades() {
        return this.http.get<Actividad[]>(environment.apiUrl + "/Actividad");
    }
  }