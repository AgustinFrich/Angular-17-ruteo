export class Usuario {
  correo: string;
  nombre: string;
  apellido: string;
  dni: number;

  constructor(correo: string, nombre: string, apellido: string, dni: number) {
    this.correo = correo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }
}
