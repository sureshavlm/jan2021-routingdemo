import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  category: String;
  offers: any[];

  constructor(private route: ActivatedRoute, private offerServ: OffersService ) { }

  ngOnInit() {
	  if(this.route != undefined && this.route != null){
	  	this.route.queryParams.subscribe(params => {
	  		if(params != null && params != undefined){
			    this.category = params.category;

			    this.offers = this.offerServ.getOffers(this.category);

			    console.log('Received Offers: **** ', this.offers);
	  		}
		  });
	  }
  	
  }

}
