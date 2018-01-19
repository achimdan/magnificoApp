import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
	selector: 'to-cart',
	templateUrl: './to-cart.component.html',
	styleUrls: ['./to-cart.component.less']
})
export class ToCartComponent implements OnInit {

	products: Array<{}>
	isVisible: boolean = false

	constructor(private homeService: HomeService) { }

	ngOnInit() {

		this.homeService.currentProduct.subscribe(products => {
			this.products = products
		})

		// FOR FIREBASE

		// this.homeService.getCartProducts().subscribe(cart => {
		// 	console.log(cart)
		// 	// this.product = cart.length || cart
		// })
	}

	mouseEnter(div: string) {
		console.log("mouse enter : " + div)
		this.isVisible = true
	}
	
	mouseLeave(div: string) {
		console.log('mouse leave :' + div)
		this.isVisible = false
	}

}
