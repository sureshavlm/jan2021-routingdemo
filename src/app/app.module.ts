import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { LoansComponent } from './loans/loans.component';

import { routing } from './app.routing';
import { OffersComponent } from './offers/offers.component';
import { DownloadComponent } from './download/download.component';


import { OffersService } from './offers.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CardsComponent,
    LoansComponent,
    OffersComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [ OffersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
