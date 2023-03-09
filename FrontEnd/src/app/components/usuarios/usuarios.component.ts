import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [
    UserService
  ],
})
export class UsuariosComponent {



}