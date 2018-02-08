import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Upload } from '../admin/upload';
import { Product } from '../models/Product';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AdminService {

	productsCollection: AngularFirestoreCollection<Product>;
	items: Observable<Product[]>;
	removeProduct: AngularFirestoreDocument<Product>;

	image: any
	postProduct: any

	private basePath: string = '/uploads'
	
	constructor(private af: AngularFirestore, private db: AngularFireDatabase, private router: Router, private notification: NotificationsService) {
		
		this.productsCollection = this.af.collection('items', ref => ref.orderBy('date','desc'));

		this.items = this.productsCollection.snapshotChanges().map(changes => {
			return changes.map(a => {
				const data = a.payload.doc.data() as Product;
				data.id = a.payload.doc.id;
				return data;
			});
		});
	}

	getProducts() {
		// this.items = this.productsCollection.valueChanges();
		// return Observable.of(this.items)
		return this.items
	}

	addProduct(product: Product, img) {
		this.postProduct = this.productsCollection
			.add(product)
			.then( () => {
				this.successCall(product)
				this.router.navigate(['admin/products-list']);
			})
	}

	saveProduct(upload: Upload, product: any) {

		let storageRef = firebase.storage().ref()
		let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file)
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {
				// upload in progress
				upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
				console.log(upload.progress)
			},
			(error) => {
				// upload failed
				console.log(error)
			},
			() => {
				// upload success
				upload.url = uploadTask.snapshot.downloadURL
				upload.name = upload.file.name
				product.img = upload.url
				this.saveFileData(upload)
				this.addProduct(product, this.image)
			}
		);
		
		return Observable.of(uploadTask)
	}

	deleteProduct(product: Product) {
		this.removeProduct = this.af.doc(`items/${product.id}`)
		this.removeProduct.delete();
		return this.removeProduct;
	}

	private saveFileData(upload: Upload) {
		this.db.list(`${this.basePath}/`).push(upload)
	}

	private successCall(params) {
		this.notification.success(
			params.name,
			params.date,
			{
				timeOut: 2000,
				showProgressBar: true,
				pauseOnHover: false,
				clickToClose: false,
				maxLength: 10
			}
		)
	}
}
