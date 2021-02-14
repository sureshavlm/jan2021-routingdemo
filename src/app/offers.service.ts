import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OffersService {


  offers: any[] = [
  	{ discount: 0.5, type: "Savings", valid: new Date(), gender: "Male", category: "Accounts"},
  	{ discount: 0.5, type: "Business", valid: new Date(), gender: "Male", category: "Accounts"},
  	{ discount: 0.4, type: "Business", valid: new Date(), gender: "Female", category: "Accounts"},
  	{ discount: 0.1, type: "Debit Card VISA", valid: new Date(), gender: "Male", category: "Card"},
  	{ discount: 0.2, type: "Credit Card VISA", valid: new Date(), gender: "Female", category: "Card"}

  ];

  constructor() { 
  }

  getOffers(_category: String) {
  	let temp: any[] = [];
  	for(var i = 0; i < this.offers.length; i++){
  		if(this.offers[i].category == _category){
  			temp.push(this.offers[i]);
  		}
  	}
  	return temp;
  }
}
