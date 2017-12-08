import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	navigation: Array<{}>;
	
	constructor() { }
	
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

}
