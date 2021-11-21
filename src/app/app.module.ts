import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbButtonModule, NbActionsModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CardComponent } from './shared/card/card.component';
import { DoughnutChartComponent } from './shared/doughnut-chart/doughnut-chart.component';
import { RouterModule } from '@angular/router';
import { DoughnutChart1Component } from './shared/doughnut-chart1/doughnut-chart1.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    DoughnutChartComponent,
    DoughnutChart1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    RouterModule,
    ChartsModule,
    NbActionsModule,
    NbIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
