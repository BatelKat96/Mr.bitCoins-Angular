import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ChartsComponent } from './cmps/charts/charts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MarketPriceComponent } from './cmps/market-price/market-price.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    HomePageComponent,
    ChartsComponent,
    MarketPriceComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
