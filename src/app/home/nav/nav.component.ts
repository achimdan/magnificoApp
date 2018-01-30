import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {

	navigation: Array<{}>
	user: any

	isVisibile:boolean = false
	isToggle:boolean = false
		
	constructor(private router: Router) {}
	
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

		if (window.innerWidth <= 768) this.isVisibile = true
	}

	onResize(event:any) {
		if (event.target.innerWidth <= 768) {
			this.isVisibile = true
		} else {
			this.isVisibile = false
		}
		console.log(event.target.innerWidth)
	}

	toggleMenu() {
		this.isToggle =! this.isToggle
	}

	public navigate(button: any) {
		this.router.navigate([button.route])
	}

}
