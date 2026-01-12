import { FetchBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})
export class Directivas {
  // Ejemplo @if
  mostrarMensaje = false;
  usuario = { nombre: 'Hugo', edad:  7};
  spiderman = { nombre: 'Spiderman', poder: 'telaraña' };
  batman = { nombre: 'Batman', poder: 'tecnología' };
  heroes: 'Spiderman' | 'Batman' = 'Spiderman';
  // Ejemplo @for
  alumnos:any[] = [
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
  frutas = ['Manzana', 'Banana', 'Naranja', 'Mango', 'Pera'];
  usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Luis', rol: 'Usuario' },
    { id: 3, nombre: 'María', rol: 'Editor' }
  
  ];
  // Ejemplo @switch
  tipoUsuario: 'admin' | 'editor' | 'usuario' | 'invitado' = 'admin';
  estadoPedido: 'pendiente' | 'procesando' | 'enviado' | 'entregado' = 'pendiente';

  toggleMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  cambiarTipoUsuario(tipo: 'admin' | 'editor' | 'usuario' | 'invitado') {
    this.tipoUsuario = tipo;
  }

  cambiarEstadoPedido(estado: 'pendiente' | 'procesando' | 'enviado' | 'entregado') {
    this.estadoPedido = estado;
  }

  cambiarHeroe(heroe: 'Spiderman' | 'Batman') {
    this.heroes = heroe;
  }
}
