import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];