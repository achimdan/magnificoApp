import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from "angularfire2/database"; 
import * as firebase from 'firebase';
import { Upload } from '../upload/upload';

@Injectable()
export class UploadService {

	image: any;

	constructor(private af: AngularFirestore, private db: AngularFireDatabase) { }

	private basePath:string = '/uploads';
	// uploads: FirebaseListObservable<Upload[]>;

	pushUpload(upload: Upload) {
		console.log(upload);

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
				console.log('SUCCESS',upload);
			}
		);
	}

	returnImage() {
		return this.image;
	}

	private saveFileData(upload: Upload) {
		this.db.list(`${this.basePath}/`).push(upload);
		// this.af.collection('pictures').add(upload.file.name);
	}

}
