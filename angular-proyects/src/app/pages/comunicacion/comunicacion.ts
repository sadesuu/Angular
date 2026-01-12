import { Component } from '@angular/core';
import { Padre } from './padre/padre/padre';
import { Hijo } from './hijo/hijo/hijo';

@Component({
  selector: 'app-comunicacion',
  imports: [Padre, Hijo],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {

}
