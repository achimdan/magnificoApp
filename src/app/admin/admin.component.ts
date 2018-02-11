import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger ,style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from '../services/products.service';
// import { AdminService } from '../admin/admin.service';
import { AdminService } from '@admin/admin.service';
import { PostProduct } from '../models/post-product';
import { Upload } from '../services/upload/upload';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthService } from '../services/auth.service';

import { tween, styler, easing, transform } from 'popmotion';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.less'],
	animations: [
		trigger('slideLeftRight', [
			state('in', style({ 'grid-template-columns': '100px auto' })),
			state('out', style({ width: '*' })),
			transition('in => out', animate('300ms ease-in-out')),
			transition('out => in', animate('300ms ease-in-out'))
		])
	]
})
export class AdminComponent implements OnInit {

	isToggled: string
	displayFromParent = true
	styleHeight: any

	public options = {
		position: ["top", "right"],
		timeOut: 5000,
		lastOnBottom: true
	}

	constructor(private productsService: ProductsService,
				private adminservice: AdminService,
				private authService: AuthService) { }

	ngOnInit() {
		this.styleHeight = window.innerHeight - 90 + 'px'
	}

	onResize(event:any) {
		this.styleHeight = event.target.innerHeight - 90 + 'px'
	}


	toggleLeft(event) {
		this.isToggled = this.isToggled === 'in' ? 'out' : 'in'
		const arr = Observable.of(this.isToggled)
		.subscribe((map) => {
			console.log(map)
		})
		this.displayFromParent = !this.displayFromParent
	}

	mouseEnter(div : string) {
		// this.isToggled =! this.isToggled
		// this.isToggled = this.isToggled === 'in' ? 'out' : 'in'
		// console.log("mouse enter : " + div);
	}
	
	mouseLeave(div : string) {
		// this.isToggled = this.isToggled === 'in' ? 'out' : 'in'
		// console.log('mouse leave :' + div);
	}

}