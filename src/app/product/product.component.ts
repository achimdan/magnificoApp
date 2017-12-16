import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	@Input() product: Object;
	selected: any;

	constructor(public dialog: MatDialog) { }

	openDialog(): void {
		let dialogRef = this.dialog.open(ProductDialog, {
			width: '650px',
			data: { product: this.product }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			// console.log('The dialog was closed', this.product);
			// this.selected = this.product;
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
	constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
		console.log(data.product);
	}
	product : Object = this.data.product;
}
