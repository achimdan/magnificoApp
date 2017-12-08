import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductsComponent,
		NavComponent
	],
	imports: [
		BrowserModule,
		routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
