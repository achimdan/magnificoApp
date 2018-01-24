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
import { CartComponent } from './cart/cart.component';
import { ToCartComponent } from './to-cart/to-cart.component';

//SERVICES

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LandingPageComponent } from './landing-page/landing-page.component';

//SWIPER
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto',
	keyboard: true
};

  
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

		SwiperModule
	],
	declarations: [
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent,
		ProductDialog,
		LandingPageComponent,
		CartComponent,
		ToCartComponent
		
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
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	]
})
export class HomeModule { }
