import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  constructor(private store: ProductsService, private route: ActivatedRoute) {}

  product:any
  ngOnInit(){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= params.get('id')

      if(id){
        this.store.getproduct(parseInt(id, 10)).subscribe(product=>this.product=product)
      }
    })
  }
}
