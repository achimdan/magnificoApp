import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'admin-sidenav',
	templateUrl: './admin-sidenav.component.html',
	styleUrls: ['./admin-sidenav.component.less']
})
export class AdminSidenavComponent implements OnInit {
	navigation: Array<{}>

	constructor(private authService: AuthService,) { }

	ngOnInit() {
		this.navigation = [
			{
				id: 1,
				name: 'Home',
				route: ''
			},{
				id: 2,
				name: 'Dashboard',
				route: '/admin'
			},{
				id: 2,
				name: 'Product list',
				route: 'products-list'
			},{
				id: 3,
				name: 'Orders',
				route: 'orders'
			}
		];
	}

	toggleLeft() {
		console.log('toggled')
	}

	logout() {
		this.authService.signOut()
	}

}
