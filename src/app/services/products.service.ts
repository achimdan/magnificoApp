import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {

	productsCollection: AngularFirestoreCollection<Product>;
	items: Observable<Product[]>;

	postProduct: any;
	removeProduct: AngularFirestoreDocument<Product>;

	constructor(public af: AngularFirestore) {
		this.productsCollection = this.af.collection('items', ref => ref.orderBy('title','asc'));

		this.items = this.productsCollection.snapshotChanges().map(changes => {
			return changes.map(a => {
				const data = a.payload.doc.data() as Product;
				data.id = a.payload.doc.id;
				return data;
			});
		});
	}
	
	getProducts() {
		this.items = this.af.collection('items').valueChanges();
		return this.items;
	}

	addProduct(product) {
		this.postProduct = this.af.collection('items').add(product);
		return this.postProduct;
	}

	deleteProduct(product) {
		this.removeProduct = this.af.doc(`items/${product.id}`)
		this.removeProduct.delete();
		return this.removeProduct;
	}

}