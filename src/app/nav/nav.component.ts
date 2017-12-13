import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	
	constructor(public af: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
		this.af.authState.subscribe(
			(auth) => {
				if (auth != null) {
					this.user = af.authState;
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

	logout() {
		this.af.auth.signOut();
		this.router.navigate(['/login']);
	}

}
