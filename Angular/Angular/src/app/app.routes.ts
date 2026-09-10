import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Products } from './components/products/products';
import { ApiProducts } from './components/api-products/api-products';

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
    path: 'api-products',
    component: ApiProducts
  },

];