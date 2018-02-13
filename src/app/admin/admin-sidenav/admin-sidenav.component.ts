import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'admin-sidenav',
	templateUrl: './admin-sidenav.component.html',
	styleUrls: ['./admin-sidenav.component.less']
})
export class AdminSidenavComponent implements OnInit {

	@Input() displayFromParent = true
	navigation: Array<{}>

	constructor(private authService: AuthService,) { }

	ngOnInit() {
		this.navigation = [
			{
				id: 1,
				name: 'Home',
				icon: 'fas fa-home',
				route: ''
			},{
				id: 2,
				name: 'Dashboard',
				icon: 'fas fa-chart-pie',
				route: '/admin'
			},{
				id: 2,
				name: 'Product list',
				icon: 'fas fa-cart-plus',
				route: 'products-list'
			},{
				id: 3,
				name: 'Orders',
				icon: 'fas fa-money-bill-alt',
				route: 'orders'
			}
		];
	}

	logout() {
		this.authService.signOut()
	}

}
