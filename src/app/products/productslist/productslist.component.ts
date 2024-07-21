import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css',
})
export class ProductslistComponent {
  products: any[] = [];
  constructor(private store: ProductsService) {}

  ngOnInit() {
    this.store.getAllProduct().subscribe((products) => {
      this.products = products;
    });
  }
}
