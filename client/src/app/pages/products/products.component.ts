import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().pipe(take(1)).subscribe(
      (result) => {
        console.log(result);
        this.products = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
