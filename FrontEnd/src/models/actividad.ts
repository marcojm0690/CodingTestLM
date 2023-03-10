import { User } from "./user";

export class Actividad {
    idActividad!:      number ;
    createDate!:       Date;
    idUsuario!:        number;
    descripcionActividad!:       string;
    usuarioActividad!: User;
}
