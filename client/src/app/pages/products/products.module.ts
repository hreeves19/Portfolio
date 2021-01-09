import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductListModule
  ]
})
export class ProductsModule { }
