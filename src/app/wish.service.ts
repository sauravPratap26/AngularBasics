import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {
  }
  getWishes(){
    return this.http.get('https://6697ee3602f3150fb66f83cb.mockapi.io/api/v1/wishItem')
  }
}
