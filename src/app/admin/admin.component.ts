import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger ,style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

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

	public options = {
		position: ["top", "right"],
		timeOut: 5000,
		lastOnBottom: true
	}

	name: string;
	description: string;
	price: number;
	date: number;
	active: boolean;
	img: any;
	url: string;

	selectedFiles: FileList;
	currentUpload: Upload;

	styleHeight: any

	constructor(private productsService: ProductsService,
				private adminservice: AdminService,
				private authService: AuthService) { }

	ngOnInit() {
		this.styleHeight = window.innerHeight - 110 + 'px'
		console.log(window.innerHeight)
	}

	onResize(event:any) {
		this.styleHeight = event.target.innerHeight - 110 + 'px'
		console.log(event.target.innerHeight)
	}

	addProduct() {
		const prod = {
			name: this.name,
			description: this.description,
			price: this.price,
			date: new Date(),
			active: true,
			img: this.img
		}
		this.adminservice.addProduct(prod);
	}

	detectFiles(event: any) {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();

			reader.onload = (event: any) => {
				this.url = event.target.result;
			}

			reader.readAsDataURL(event.target.files[0]);
		}
		this.selectedFiles = event.target.files;
		console.log(this.selectedFiles);
	}

	uploadImage() {
		let file = this.selectedFiles.item(0)
		this.currentUpload = new Upload(file);
		this.adminservice.pushUpload(this.currentUpload);
	}

	toggleLeft(value) {
		this.isToggled = this.isToggled === 'in' ? 'out' : 'in'	  
	}

	mouseEnter(div : string) {
		// this.isToggled =! this.isToggled
		console.log("mouse enter : " + div);
	}

	mouseLeave(div : string) {
		console.log('mouse leave :' + div);
	}

}