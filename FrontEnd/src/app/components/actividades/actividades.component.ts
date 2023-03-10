import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Actividad } from 'src/models/actividad';
import { User } from 'src/models/user';
import { ActividadService } from 'src/services/actividadService';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  providers: [
    ActividadService
  ],
})
export class ActividadesComponent {
  public actividades!: Actividad[];
  constructor(private actividadService:ActividadService) {
    this.actividades = [];
    this.actividadService.getActividades().subscribe(result => {
      debugger;
      this.actividades = result;
    });
  }

}