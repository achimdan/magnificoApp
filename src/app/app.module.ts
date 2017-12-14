//CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'

//ROUTING
import { routing } from './app.routing';

//FORMS
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

//SERVICES
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, 'magnificoApp'),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		FormsModule,
		routing
	],
	providers: [
		AuthService,
		AuthGuard,
		ProductsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
