import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params:{

      }
    };
  }
  getWishes() {
    let options = this.getStandardOptions();

    // options.params= new HttpParams({
    //   fromObject:{
    //     format:'json'
    //   }
    // })
    //right now commenting it out because, I do not have a query in the mock url that I receive !!

    return this.http.get(
      'https://6697ee3602f3150fb66f83cb.mockapi.io/api/v1/wishItem',
      options
    );
  }

  private addWish(){
    let options= this.getStandardOptions();
    options.headers=options.headers.set('Authorization',' kdfj');
    this.http.post('Your url here',options)
  }
}
