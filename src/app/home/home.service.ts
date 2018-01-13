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

	private productToCart = new BehaviorSubject<any>('this.cart')
	currentProduct = this.productToCart.asObservable()

	constructor(private af: AngularFirestore, private db: AngularFireDatabase) { }

	getCartProducts() {
		this.cart = this.af.collection('orders').valueChanges();
		return this.cart;
	}

	addOrder(message: any) {
		this.productToCart.next(message)
		this.order = this.af.collection('orders').add(message);
	}
	// addOrder(newOrder): Observable<any[]> {
	// 	this.order = this.af.collection('orders').add(newOrder);
	// 	return Observable.of(this.order);
	// }

}
