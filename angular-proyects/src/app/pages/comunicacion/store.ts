import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Store {

  // Signal almacena mensajes compartidos
  private mensajeSignal = signal<string>('');

  //Exponer el signal como readonly

  readonly mensaje = this.mensajeSignal.asReadonly()

  setMensaje(nuevoMensaje: string){
    this.mensajeSignal.set(nuevoMensaje);
  }

}
