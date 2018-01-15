import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
import { Cart } from '../../models/cart-products';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

	cart: Cart[];	

	constructor(private homeService: HomeService) { }

	ngOnInit() {
		// this.homeService.getCartProducts().subscribe(cart => {
		// 	console.log(cart);
		// 	this.cart = cart;
		// })
	}

}
