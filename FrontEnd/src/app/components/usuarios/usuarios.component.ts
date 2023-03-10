import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/models/user';
import { UserService } from 'src/services/UserService';
import countryData from '../../../assets/countries/countries.json';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',

  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./usuarios.component.css'],
  providers: [
    UserService, MessageService, ConfirmationService
  ],
})
export class UsuariosComponent {
  public usuarios!: User[];
  public selectedUser!: User[];
  regExEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  countries = countryData;
  usuario!: User;
  productDialog!: boolean;
  submitted!: boolean;
  isInvalid()
  {
    debugger;
   return this.usuario.name == undefined || this.usuario.country == undefined || this.usuario.lastName== undefined || this.usuario.email== undefined ||
   this.usuario.dateOfBirth == undefined;
  }
  constructor(private userService: UserService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.loadUsers();
  }
  loadUsers() {
    this.usuarios = [];
    this.usuario = new User();
    this.userService.getUsers().subscribe(result => {
      this.usuarios = result;
    });

  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  saveProduct() {
    this.submitted = true;
    debugger;
    if (this.usuario.name.trim()) {
      if (this.usuario.id) {

        this.editarUsuario();
      }
      else {
        this.insertUsuario();
      }

      this.usuarios = [...this.usuarios];
      this.productDialog = false;
      this.usuario = new User();
    }
  }
  editarUsuario() {
    this.userService.updateUser(this.usuario).subscribe({
      next: (result) => {
        this.loadUsers();
        // this.usuarios[this.findIndexById(this.usuario.id)] = this.usuario;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Usuario ' + result.name + ' actualizado', life: 3000 });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Successful', detail: 'ERROR', life: 3000 });
      },
    });

  }
  insertUsuario() {
    this.userService.postUser(this.usuario).subscribe({
      next: (result) => {
        this.loadUsers();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Usuario ' + result.name + ' Creado', life: 3000 });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Successful', detail: 'ERROR', life: 3000 });
      },
    });
  }
  borrarUsuario(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Usuario eliminado correctamente', life: 3000 });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'error', detail: 'ERROR', life: 3000 });
      },
    });
  }
  openNew() {
    this.usuario = new User();
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: User) {
    debugger;
    this.usuario = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usuarios = this.usuarios.filter(val => val.id !== product.id);
        this.borrarUsuario(product.id);
        this.usuario = new User;
      }
    });
  }
  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

}