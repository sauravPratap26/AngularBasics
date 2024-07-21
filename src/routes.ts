import { Routes } from '@angular/router';
import { ContactComponent } from './app/contact/contact.component';
import { WishComponent } from './app/wish/wish.component';
import { AppComponent } from './app/app.component';
import { WishModule } from './app/wish/wish.module';
import { HomeComponent } from './app/home/home.component';

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

  }
];

export default routeConfig;
