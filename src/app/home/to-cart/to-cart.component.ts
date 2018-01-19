import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
	selector: 'to-cart',
	templateUrl: './to-cart.component.html',
	styleUrls: ['./to-cart.component.less']
})
export class ToCartComponent implements OnInit {

	products: Array<{}>;

	constructor(private homeService: HomeService) { }

	ngOnInit() {

		this.homeService.currentProduct.subscribe(products => {
			this.products = products.length || 0
		})

		// FOR FIREBASE

		// this.homeService.getCartProducts().subscribe(cart => {
		// 	console.log(cart)
		// 	// this.product = cart.length || cart
		// })
	}

}
