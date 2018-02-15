import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'admin-toolbar',
	templateUrl: './admin-toolbar.component.html',
	styleUrls: ['./admin-toolbar.component.less']
})
export class AdminToolbarComponent implements OnInit {

	userPhoto: string = '';
	constructor() { }

	ngOnInit() {

		var user = firebase.auth().currentUser.photoURL;
		if (user) {
			this.userPhoto = user;
		} else {
			this.userPhoto = '/assets/imgs/man.png';
		}
	}

}
