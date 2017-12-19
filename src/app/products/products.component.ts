import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[];	

	// products = new BehaviorSubject([]);
	// batch = 2;
	// lastKey = '';
	// finished = false;

	constructor(private productsService: ProductsService) {	}
	
	ngOnInit() {
		// this.getProducts();
		this.productsService.getProducts().subscribe(products => {
			console.log(products);
			this.products = products;
		})
	}

	// onScroll() {
	// 	console.log('scrolled!!!');
	// 	this.getProducts();
	// }

	// private getProducts(key?) {
	// 	if (this.finished) return;
		
	// 	this.productsService
	// 		.getProducts(this.batch + 1, this.lastKey)
	// 		.do(products => {
	// 			//problem
	// 			// this.lastKey = _.last(products)['$key'];
	// 			this.lastKey = _.last(products);
	// 			const newProducts = _.slice(products, 0, this.batch);

	// 			const currentProducts = this.products.getValue();

	// 			if (this.lastKey == _.last(newProducts)['$key']) {
	// 				this.finished = true;
	// 			}
	// 			this.products.next(_.concat(currentProducts, newProducts))
	// 		})
	// 		.take(1)
	// 		.subscribe();
	// }

}
