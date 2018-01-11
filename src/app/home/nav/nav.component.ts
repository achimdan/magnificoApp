import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less']
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
				route: ''
			},{
				id: 2,
				name: 'Products',
				route: 'products'
			},{
				id: 2,
				name: 'Contact',
				route: 'contact'
			}
		];
	}

}
