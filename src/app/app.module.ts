import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { environment } from '../environments/environment';

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
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		FormsModule,
		routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
