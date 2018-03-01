import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators } from '@angular/forms';

import { HomeService } from '../home.service';
import { Cart } from '../../models/cart-products';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

	products: Cart[];
	isLinear = true;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	
	towns = [
		{value: '1', viewValue: 'Alba'},
		{value: '2', viewValue: 'Cluj-Napoca'},
		{value: '3', viewValue: 'Bucuresti'}
	  
	];

	constructor(private homeService: HomeService, private _formBuilder: FormBuilder) { }

	ngOnInit() {
		// this.homeService.getCartProducts().subscribe(cart => {
		// 	console.log(cart);
		// 	this.cart = cart;
		// })

		this.homeService.currentProduct.subscribe(products => {
			this.products = products
			console.log('products',products)
		})

		this.firstFormGroup = this._formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			telephone: ['', Validators.required],
			town: ['', Validators.required],
			adress: ['', Validators.required]
		});

		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
	}

}
