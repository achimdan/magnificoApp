import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../admin/admin.service';
import { PostProduct } from '../../models/post-product';
import { Upload } from '../../services/upload/upload';

@Component({
	selector: 'add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css','../../app.component.less']
})
export class AddProductComponent implements OnInit {

	rForm: FormGroup;
	post: any;

	name: string
	description: string
	price: number
	date: number
	active: boolean
	fileName: any
	
	url: string

	selectedFiles: FileList
	currentUpload: Upload

	constructor(private productsService: ProductsService, 
				private adminService: AdminService,
				private fb: FormBuilder) {
		
		this.rForm = fb.group({
			name: [null, Validators.required],
			price: [null, Validators.required],
			description: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])],
			date: new Date(),
			active: true,
			img: [this.fileName, Validators.required],
		})

	}

	ngOnInit() {

	}

	addProduct(post) {
		let file = this.selectedFiles.item(0)
		this.currentUpload = new Upload(file)
		this.adminService.saveProduct(this.currentUpload ,post)
	}

	onFileChange(event: any) {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader()
			reader.onload = (event: any) => {
				this.url = event.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}

		this.selectedFiles = event.target.files
		let file = event.target.files[0]
		this.rForm.controls['img'].setValue(file)
	}

}