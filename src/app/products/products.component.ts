import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

import { ProductsService } from '../services/products.service'
import { Product } from '../models/Product';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[];	

	constructor(public productsService: ProductsService) {	}
	
	ngOnInit() {
		this.productsService.getProducts().subscribe(products => {
			console.log(products);
			this.products = products;
		})
	}

	ngOnDestroy() {
	}

}
