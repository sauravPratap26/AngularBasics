import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule, ContactModule,ProductsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
