import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {

	productsCollection: AngularFirestoreCollection<Product>;
	products: Observable<Product[]>

	constructor(public af: AngularFirestore) {}
	
	getProducts() {
		this.products = this.af.collection('items').valueChanges();
		return this.products;
	}

}