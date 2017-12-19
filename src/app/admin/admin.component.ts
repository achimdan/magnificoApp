import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

import { PostProduct } from '../models/post-product'

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	name: string;
	description: string;
	price: number;
	date: number;
	active: boolean;

	constructor(private productsService: ProductsService) { }

	ngOnInit() {

	}

	addProduct() {
		const prod = {
			name: this.name,
			description: this.description,
			price: this.price,
			date: new Date(),
			active: this.active
		}
		this.productsService.addProduct(prod);
	}

}
