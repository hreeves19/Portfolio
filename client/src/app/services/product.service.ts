import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';
import * as moment from 'moment';
import * as _ from 'underscore';
import * as accounting from 'accounting';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(`${environment.server}/api/product/`).pipe(
      map(products => {
        console.log(products);
        return _.map(products, (product: any) => {
          product.price = accounting.formatMoney(product.price);
          return product;
        });
      })
    );
  }
}
