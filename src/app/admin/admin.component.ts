import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { UploadService } from '../services/upload/upload.service';
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

	selectedFiles: FileList;
	currentUpload: Upload;

	constructor(private productsService: ProductsService, private Upload: UploadService) { }

	ngOnInit() {

	}

	addProduct() {
		const prod = {
			name: this.name,
			description: this.description,
			price: this.price,
			date: new Date(),
			active: this.active,
			img: this.img
		}
		this.productsService.addProduct(prod);
	}

	detectFiles(event) {
		this.selectedFiles = event.target.files;
	}

	uploadImage() {
		let file = this.selectedFiles.item(0)
		this.currentUpload = new Upload(file);
		this.Upload.pushUpload(this.currentUpload);
	}

}