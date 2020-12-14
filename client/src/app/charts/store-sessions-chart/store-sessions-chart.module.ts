import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreSessionsChartComponent } from './store-sessions-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [StoreSessionsChartComponent],
  exports: [StoreSessionsChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class StoreSessionsChartModule { }
