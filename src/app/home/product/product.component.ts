import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../admin/admin.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	@Input() product: any;
	selected: any;

	constructor(public dialog: MatDialog) { }

	openDialog(): void {
		let dialogRef = this.dialog.open(ProductDialog, {
			width: '650px',
			data: { product: this.product }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

	ngOnInit() {

	}

}

@Component({
	// selector: 'dialog-data-example-dialog',
	templateUrl: 'product.dialog.html',
})
export class ProductDialog {
	constructor( @Inject(MAT_DIALOG_DATA) public data: any,
				private productsService: ProductsService, 
				private adminService: AdminService) { }

	product : object = this.data.product

	addToCart() {
		console.log(this.product)
		// let prod = {
		// 	name: this.name,
		// 	description: this.description,
		// 	price: this.price,
		// 	date: new Date(),
		// 	active: true,
		// 	img: this.img
		// }
		// this.adminService.addProduct(prod).subscribe( (success) => {
		// 	console.log('product saved', success);
		// 	this.successCall();
		// });
	}

}
