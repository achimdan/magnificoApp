import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	navigation: Array<{}>;
	user: Observable<firebase.User>;
	authentificated: boolean = false;
	
	constructor(public af: AngularFireAuth) {
		this.af.authState.subscribe(
			(auth) => {
				if (auth != null) {
					this.user = af.authState;
					this.authentificated = true;
				}
			}
		)
	}
	
	ngOnInit() {	
		this.navigation = [
			{
				id: 1,
				name: 'Home',
				route: 'home'
			},{
				id: 2,
				name: 'Porducts',
				route: 'products'
			},{
				id: 2,
				name: 'Contact',
				route: 'contact'
			}
		];
	}

	login() {
		this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		this.authentificated = true;
	}

	logout() {
		this.af.auth.signOut();
		this.authentificated = false;
	}

}
