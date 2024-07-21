import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: any[] = [
    {
      id: 1,
      name: 'guitar',
      price: 1000,
    },
    { id: 2, name: 'violin', price: 2000 },
    { id: 3, name: 'piano', price: 3000 },
  ];
  constructor() {}

  getAllProduct(){
    return of (this.data);
  }

  getproduct(id:number){
    return of(this.data.find(p=>p.id===id))
  }
}
