import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesTrafficChartComponent } from './sales-traffic-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [SalesTrafficChartComponent],
  exports: [SalesTrafficChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class SalesTrafficChartModule { }
