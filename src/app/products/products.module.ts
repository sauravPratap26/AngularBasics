import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductslistComponent
  ],
  exports:[
    ProductslistComponent
  ]
})
export class ProductsModule { }
