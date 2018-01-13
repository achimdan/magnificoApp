import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

	navigation: Array<{}>
	user: any
		
	constructor(private router: Router) { }
	
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
