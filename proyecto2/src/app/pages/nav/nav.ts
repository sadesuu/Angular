import { Component } from '@angular/core';
import { BarraNavegacion } from './navbar/barra-navegacion/barra-navegacion';
import { Publicidad } from './publi/publicidad/publicidad';

@Component({
  selector: 'app-nav',
  imports: [BarraNavegacion, Publicidad],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}