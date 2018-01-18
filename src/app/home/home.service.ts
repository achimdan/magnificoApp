import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Cart } from '../models/cart-products';

@Injectable()
export class HomeService {

	order: any;
	cart: Observable<Cart[]>;
	cartArray: Array<{}> = []

	user = JSON.parse(localStorage.getItem('cart'))

	private productToCart = new BehaviorSubject<any>(this.user)
	currentProduct = this.productToCart.asObservable()

	constructor(private af: AngularFirestore, private db: AngularFireDatabase) { }

	// getCartProducts() {
	// 	this.cart = Observable.of(this.user)
	// 	return this.cart;
	// }

	// addOrder(product: any) {
	// 	this.productToCart.next(product);
	// 	this.cartArray.push(product)
	// 	localStorage.setItem('cart', JSON.stringify(this.cartArray));
	// 	// this.order = this.af.collection('orders').add(product);
	// }

	getCartProducts() {
		this.cart = this.af.collection('orders').valueChanges();
		return this.cart;
	}

	addOrder(product: any) {
		this.productToCart.next(product)
		this.order = this.af.collection('orders').add(product);
	}

}
