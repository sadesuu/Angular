import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/nav/nav';
import { Content } from './pages/content/content';
import { Footer } from './pages/footer/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto2');
}
