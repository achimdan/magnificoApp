import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

	title = 'landing-page works! YUHUU';
	products: Product[];	

	public config: SwiperConfigInterface = {
		// direction: 'horizontal',
		// slidesPerView: 2,
		keyboard: true,
		mousewheel: true,
		// scrollbar: true,
		// navigation: true,
		pagination: true
	};

	constructor(private productsService: ProductsService) {	}

	ngOnInit() {
		// this.getProducts();
		this.productsService.getProducts().subscribe(products => {
			// console.log(products);
			this.products = products;
		})
	}

}
