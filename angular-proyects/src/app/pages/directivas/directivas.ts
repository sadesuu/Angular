import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})
export class Directivas {
  // Ejemplo @if
  mostrarMensaje = false;
  usuario = { nombre: 'Hugo', edad: 21 };

  // Ejemplo @for
  frutas = ['Manzana', 'Banana', 'Naranja', 'Fresa', 'Uva'];
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
}
