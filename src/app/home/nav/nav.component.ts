import { Component, OnInit, Input } from '@angular/core';
import { trigger ,style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less'],
	animations: [
		trigger('slideInOut', [
			state('in', style({ height: '0px', display: 'none', opacity: '0' })),
			state('out', style({ height: '*'})),
			transition('in => out', animate('200ms ease-in')),
			transition('out => in', animate('200ms ease-out'))
		])
	]
})
export class NavComponent implements OnInit {
	
	@Input() isVisible : boolean = true;
	
	navigation: Array<{}>
	user: any

	isVisibile:boolean = false
	isToggle: string
		
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

		if (window.innerWidth <= 768) {
			this.isVisibile = true
			this.isToggle = 'in'
		} 
	}

	onResize(event:any) {
		if (event.target.innerWidth <= 768) {
			this.isVisibile = true
			this.isToggle = 'in'
		} else {
			this.isVisibile = false
			this.isToggle = 'out'
		}
	}

	toggleMenu() {
		if (window.innerWidth <= 768) this.isToggle = this.isToggle === 'out' ? 'in' : 'out'
	}

	public navigate(button: any) {
		this.router.navigate([button.route])
	}

}
