import { Path } from './../../node_modules/@angular-devkit/core/src/virtual-fs/path.d';
import { Routes } from '@angular/router';
import { Content } from './pages/content/content';
import { Aboutme } from './pages/aboutme/aboutme/aboutme';
import { Contacto } from './pages/contact/contacto/contacto';

export const routes: Routes = [
    {path: '', component: Content},
    {path: 'content', component: Content},
    {path: 'aboutme', component: Aboutme},
    {path: 'contacto', component: Contacto},
];
