import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Products } from './components/products/products';

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