import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	user: Observable<firebase.User>;
	authentificated: boolean = false;
	
	constructor(public af: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
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
		
	}

	login(method) {
		if (method === 'google') {
			this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( success => {
				console.log(success);
				this.router.navigate(['/home']);
			});
		} else {
			this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then( success => {
				console.log(success);
				this.router.navigate(['/home']);
			},reason => {
				console.log(reason);
			});
		}
	}

}
