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

// MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//SDIDEBAR
import { SidebarModule } from 'ng-sidebar';

//NOTIFICATION
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
	imports: [
		CommonModule,
		routing,
		FormsModule,

		MatSidenavModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		
		SidebarModule.forRoot(),
		SimpleNotificationsModule.forRoot()
	],
	declarations: [
		AdminComponent,
		AdminProductDialog,
		ProductsListComponent,
		AddProductComponent
	],
	exports: [
		AdminComponent,

		MatSidenavModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		MatButtonModule
	],
	entryComponents: [
		AdminProductDialog,
	],
	providers: [
		AdminService
	]
})
export class AdminModule { }
