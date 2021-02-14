import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { LoansComponent } from './loans/loans.component';
import { OffersComponent } from './offers/offers.component';
import { DownloadComponent } from './download/download.component';


/* configured routes with path and corresponding components */
const routes: Routes = [
	{ path: 'accounts', component: AccountsComponent, 
	  children: [
	  	{ path: 'offers', component: OffersComponent },
		{ path: 'download', component: DownloadComponent },
	  ] 
	},
	{ path: 'cards', component: CardsComponent,
	 children: [
	  	{ path: 'offers', component: OffersComponent }
	  ] 
	},
	{ path: 'loans', component: LoansComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

