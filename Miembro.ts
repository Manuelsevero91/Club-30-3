import Persona from "./Persona";

export default abstract class MiembroClub implements Persona{
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    dni: number;
    telefono: number;
    miembroDesde: string;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, dni: number, telefono: number,
        miembroDesde: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaNacimiento = fechaNacimiento;
            this.dni = dni;
            this.telefono = telefono;
            this.miembroDesde = miembroDesde;
        }
}