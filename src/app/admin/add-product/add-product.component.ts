import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../admin/admin.service';
import { PostProduct } from '../../models/post-product';
import { Upload } from '../../services/upload/upload';

@Component({
	selector: 'add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css','../../app.component.css']
})
export class AddProductComponent implements OnInit {

	name: string;
	description: string;
	price: number;
	date: number;
	active: boolean;
	img: any;

	url: string;

	selectedFiles: FileList;
	currentUpload: Upload;

	constructor(private productsService: ProductsService, private adminService: AdminService) { }

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
		this.adminService.addProduct(prod);
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
		this.adminService.pushUpload(this.currentUpload);
	}

}