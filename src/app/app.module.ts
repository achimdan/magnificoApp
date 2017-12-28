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
import { LoginComponent } from './admin/login/login.component';

//SERVICES
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { UploadService } from './services/upload/upload.service';
import { AdminService } from './admin/admin.service';

import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';

import { ServiceWorkerModule } from '@angular/service-worker';

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
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';

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
		ProductDialog,
		ProductsListComponent,
		AddProductComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		FormsModule,
		routing,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

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
		ProductDialog,
		LoginComponent
	],
	providers: [
		AuthService,
		AuthGuard,
		ProductsService,
		UploadService,
		AdminService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
