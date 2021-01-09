import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<any> = [];
  starAmount: Array<number> = new Array(5).fill(0);
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
