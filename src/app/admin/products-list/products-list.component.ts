import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { AdminService } from '../admin.service';
import { Product } from '../../models/Product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css']
  })
export class ProductsListComponent implements OnInit {

	@Input() product: any;
	products: Product[];	

	// products = new BehaviorSubject([]);
	// batch = 2;
	// lastKey = '';
	// finished = false;

	constructor(private adminService: AdminService, public dialog: MatDialog) {	}

	editProduct(product): void {
		let dialogRef = this.dialog.open(AdminProductDialog, {
			width: '650px',
			data: { product: product }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			// console.log('The dialog was closed', this.product);
			// this.selected = this.product;
		});
	}
	
	ngOnInit() {
		// this.getProducts();
		this.adminService.getProducts().subscribe(products => {
			console.log(products);
			this.products = products;
		})
	}

	deleteProduct(product: Product) {
		console.log(product);
		this.adminService.deleteProduct(product);
	}

	// onScroll() {
	// 	console.log('scrolled!!!');
	// 	this.getProducts();
	// }

	// private getProducts(key?) {
	// 	if (this.finished) return;
		
	// 	this.adminService
	// 		.getProducts(this.batch + 1, this.lastKey)
	// 		.do(products => {
	// 			//problem
	// 			// this.lastKey = _.last(products)['$key'];
	// 			this.lastKey = _.last(products);
	// 			const newProducts = _.slice(products, 0, this.batch);

	// 			const currentProducts = this.products.getValue();

	// 			if (this.lastKey == _.last(newProducts)['$key']) {
	// 				this.finished = true;
	// 			}
	// 			this.products.next(_.concat(currentProducts, newProducts))
	// 		})
	// 		.take(1)
	// 		.subscribe();
	// }

}

@Component({
	// selector: 'dialog-data-example-dialog',
	templateUrl: 'admin-product.html',
})
export class AdminProductDialog {
	constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
		console.log(data.product);
	}
	product : any = this.data.product;
}
