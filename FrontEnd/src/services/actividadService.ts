import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actividad } from "src/models/actividad";
import { User } from "src/models/user";
import { environment } from '../environment/environment.development'
@Injectable()
export class ActividadService {
    constructor(
        private http: HttpClient) { }
  
    getActividades() {
        return this.http.get<Actividad[]>(environment.apiUrl + "/Actividad");
    }
  }