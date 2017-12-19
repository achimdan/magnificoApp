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
import { ProductDialog } from './product/product.component';
import { LoginComponent } from './login/login.component';

//SERVICES
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';

import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';

//THIRD PARTY IMPORTS

//Infinite Scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductsComponent,
		NavComponent,
		ContactComponent,
		ProductComponent,
		LoginComponent,
		AdminComponent,
		ProductDialog
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, 'magnificoApp'),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		FormsModule,
		routing,

		InfiniteScrollModule,

		MatDialogModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatGridListModule,
		MatIconModule,
		BrowserAnimationsModule
	],
	exports: [
		MatDialogModule,
		MatProgressSpinnerModule,
		MatGridListModule,
		MatButtonModule,
		MatIconModule
	],
	entryComponents: [
		ProductDialog
	],
	providers: [
		AuthService,
		AuthGuard,
		ProductsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
