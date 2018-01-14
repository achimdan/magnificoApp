import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
	selector: 'to-cart',
	templateUrl: './to-cart.component.html',
	styleUrls: ['./to-cart.component.less']
})
export class ToCartComponent implements OnInit {

	cartLength: number

	constructor(private homeService: HomeService) { }

	ngOnInit() {
		this.homeService.getCartProducts().subscribe(cart => {
			this.cartLength = cart.length
		})
	}

}
