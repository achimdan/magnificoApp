import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ROUTING
import { routing } from '../app.routing';

//COMPONENTS
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductDialog } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from '../home/contact/contact.component';

//SERVICES

// //Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
	imports: [
		CommonModule,
		routing,

		MatDialogModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatGridListModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatCheckboxModule,
	],
	declarations: [
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent,
		ProductDialog,
		LandingPageComponent,
	],
	exports: [
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent,

		MatDialogModule,
		MatProgressSpinnerModule,
		MatGridListModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatCheckboxModule
	],
	entryComponents: [
		ProductDialog
	],
	providers: [

	]
})
export class HomeModule { }
