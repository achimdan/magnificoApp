import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { Product } from '../models/Product';
import { firestore } from '../../../functions/node_modules/firebase-functions';
import { Upload } from '../admin/upload';

@Injectable()
export class AdminService {

	image: any;
	postProduct: any;

	constructor(private af: AngularFirestore, private db: AngularFireDatabase) { }

	private basePath: string = '/uploads';
	// uploads: FirebaseListObservable<Upload[]>;

	addProduct(product) {
		// console.log(product);
		product.img = this.image;
		this.postProduct = this.af.collection('items').add(product);
		return this.postProduct;
	}

	pushUpload(upload: Upload) {

		let storageRef = firebase.storage().ref();
		let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {
				// upload in progress
				upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
				console.log(upload.progress);
			},
			(error) => {
				// upload failed
				console.log(error)
			},
			() => {
				// upload success
				upload.url = uploadTask.snapshot.downloadURL;
				upload.name = upload.file.name;
				this.saveFileData(upload);
				this.image = upload.url;
				console.log('SUCCESS', upload);
			}
		);
	}

	private saveFileData(upload: Upload) {
		this.db.list(`${this.basePath}/`).push(upload);
		// this.af.collection('pictures').add(upload.file.name);
	}
}
