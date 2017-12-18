import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	navigation: Array<{}>;
	user: any;
	
	constructor(public authService: AuthService, private router: Router) { }
	
	ngOnInit() {	
		this.navigation = [
			{
				id: 1,
				name: 'Home',
				route: 'home'
			},{
				id: 2,
				name: 'Products',
				route: 'products'
			},{
				id: 2,
				name: 'Contact',
				route: 'contact'
			},{
				id: 2,
				name: 'Admin',
				route: 'admin'
			}
		];
	}

	update() {
		this.authService.canRead(this.user);
	}

	logout() {
		this.authService.signOut();
	}

}
