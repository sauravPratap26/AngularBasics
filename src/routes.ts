import { Routes } from '@angular/router';
import { ContactComponent } from './app/contact/contact.component';
import { WishComponent } from './app/wish/wish.component';
import { HomeComponent } from './app/home/home.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { ProductslistComponent } from './app/products/productslist/productslist.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'wish',
    component: WishComponent,
    title:'WishList'

  },
  {
    path: 'contact',
    component: ContactComponent,
    title:'Contact me !'

  },
  {
    path: 'products',
    component: ProductslistComponent,
    title:'Products'

  },
  {
    path: '**',
    component: NotFoundComponent,
    title:'Oops !'

  }
  //remember to keep the ** path at the complete end !
];

export default routeConfig;
