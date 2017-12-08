import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
