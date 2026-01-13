import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: any[] = [
    {
      id: 1,
      nombre: 'Hugo',
      puesto: 'Desarrollador',
      cantidad: 3,
      estado: 'activo', 
      fecha: '2024-06-15',
    },
    {
      id: 2,
      nombre: 'Ana',
      puesto: 'Diseñadora',
      cantidad: 5,
      estado: 'inactivo', 
      fecha: '2024-05-20',
    },
    {
      id: 3,
      nombre: 'Luis',
      puesto: 'Tester',
      cantidad: 2,
      estado: 'activo', 
      fecha: '2024-04-10',
    },
    {
      id: 4,
      nombre: 'María',
      puesto: 'Project Manager',
      cantidad: 4,
      estado: 'pendiente', 
      fecha: '2024-03-25',
    },
  ];

  constructor() { }

  getAlumnos() {
    return this.alumnos;
  }

  getAlumnoById(id: number) {
    return this.alumnos.find(alumno => alumno.id === id);
  }
}
