import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ROUTING
import { routing } from '../app.routing';

//FORMS
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { AdminComponent } from './admin.component';
import { AdminProductDialog } from './products-list/products-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';

//SERVICES
import { AdminService } from './admin.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [
		CommonModule,
		routing,
		FormsModule,

		MatProgressSpinnerModule
	],
	declarations: [
		AdminComponent,
		AdminProductDialog,
		ProductsListComponent,
		AddProductComponent
	],
	exports: [
		AdminComponent,

		MatProgressSpinnerModule
	],
	entryComponents: [
		AdminProductDialog,
	],
	providers: [
		AdminService
	]
})
export class AdminModule { }
