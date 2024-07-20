import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.status===0){
      console.error("Issue with client or network",error.error)
    }
    else{
      console.error("server-side error",error.error)
    }

    return  throwError(()=>new Error('cannot retrieve wishes from the server. PLease try again !!!'))
  }

  private addWish(){
    let options= this.getStandardOptions();
    options.headers=options.headers.set('Authorization',' kdfj');
    this.http.post('Your url here',options)
  }
}
