import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ROUTING
import { routing } from '../app.routing';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

//SDIDEBAR
import { SidebarModule } from 'ng-sidebar';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

//NOTIFICATION
import { SimpleNotificationsModule } from 'angular2-notifications';
import { OrdersComponent } from './orders/orders.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

@NgModule({
	imports: [
		CommonModule,
		routing,
		FormsModule,
		ReactiveFormsModule,

		MatSidenavModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatTooltipModule,
		MatTableModule,
		
		SidebarModule.forRoot(),
		SimpleNotificationsModule.forRoot()
	],
	declarations: [
		AdminComponent,
		AdminSidenavComponent,
		AdminProductDialog,
		ProductsListComponent,
		AddProductComponent,
		OrdersComponent,
		AdminToolbarComponent
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
