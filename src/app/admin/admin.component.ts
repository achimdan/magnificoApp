import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AdminService } from '../admin/admin.service';
import { PostProduct } from '../models/post-product';
import { Upload } from '../services/upload/upload';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	name: string;
	description: string;
	price: number;
	date: number;
	active: boolean;
	img: any;

	url: string;

	selectedFiles: FileList;
	currentUpload: Upload;

	constructor(private productsService: ProductsService, private adminservice: AdminService) { }

	ngOnInit() {

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
		
			reader.onload = (event:any) => {
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

}