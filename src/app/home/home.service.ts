import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import { firestore } from '../../../functions/node_modules/firebase-functions';

@Injectable()
export class HomeService {

	order: any;

	constructor(private af: AngularFirestore, private db: AngularFireDatabase) { }

	addOrder(newOrder): Observable<any[]> {
		this.order = this.af.collection('orders').add(newOrder);
		return Observable.of(this.order);
	}

}
