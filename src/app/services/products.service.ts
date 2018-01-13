import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {

	productsCollection: AngularFirestoreCollection<Product>;
	products: Observable<Product[]>;
	postProduct: any;
	removeProduct: any;

	constructor(public af: AngularFirestore) {}
	
	getProducts() {
		this.products = this.af.collection('items').valueChanges();
		return this.products;
	}

	addProduct(product) {
		this.postProduct = this.af.collection('items').add(product);
		return this.postProduct;
	}

	deleteProduct(product) {
		this.removeProduct = this.af.collection('items').doc(product).delete();
		return this.removeProduct;
	}

}