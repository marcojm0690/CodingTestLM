import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ],
})
export class AppComponent {
  public users?: User[];

  constructor(private userService:UserService) {
    this.users = [];
    this.userService.getUsers().subscribe(result => {
      debugger;
      this.users = result;
    });
  }

  title = 'Usuarios';
}
