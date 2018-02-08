import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Upload } from '../admin/upload';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AdminService {

	image: any
	postProduct: any

	constructor(private af: AngularFirestore, private db: AngularFireDatabase, private router: Router, private notification: NotificationsService) { }

	private basePath: string = '/uploads'

	addProduct(product, img) {
		this.postProduct = this.af.collection('items')
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
