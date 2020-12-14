import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardModule } from '../card/card.module';
import { StoreSessionsChartModule } from '../../charts/store-sessions-chart/store-sessions-chart.module';
import { SalesTrafficChartModule } from '../../charts/sales-traffic-chart/sales-traffic-chart.module';
import { ProductSalesChartModule } from '../../charts/product-sales-chart/product-sales-chart.module';
import { AnnualSalesChartModule } from 'src/app/charts/annual-sales-chart/annual-sales-chart.module';
import { OrdersTableModule } from 'src/app/tables/orders-table/orders-table.module';


@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    CardModule,
    StoreSessionsChartModule,
    SalesTrafficChartModule,
    ProductSalesChartModule,
    AnnualSalesChartModule,
    OrdersTableModule
  ]
})
export class DashboardModule { }
