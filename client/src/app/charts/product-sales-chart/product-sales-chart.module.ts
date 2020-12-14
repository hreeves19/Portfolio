import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSalesChartComponent } from './product-sales-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ProductSalesChartComponent],
  exports: [ProductSalesChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class ProductSalesChartModule { }
