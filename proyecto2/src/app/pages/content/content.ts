import { Component } from '@angular/core';
import { Heading } from './heading/heading/heading';
import { Aboutme } from './aboutme/aboutme/aboutme';

@Component({
  selector: 'app-content',
  imports: [Heading, Aboutme],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
