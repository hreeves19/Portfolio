import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualSalesChartComponent } from './annual-sales-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AnnualSalesChartComponent],
  exports: [AnnualSalesChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class AnnualSalesChartModule { }
