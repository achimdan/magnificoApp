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

//MODULES
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';

//SERVICES
import { HomeService } from './home/home.service';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { UploadService } from './services/upload/upload.service';

import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';

//THIRD PARTY IMPORTS

//Infinite Scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AdminModule,
		HomeModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		FormsModule,
		routing,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

		InfiniteScrollModule,

		BrowserAnimationsModule
	],
	exports: [

	],
	entryComponents: [
		LoginComponent
	],
	providers: [
		HomeService,
		AuthService,
		AuthGuard,
		ProductsService,
		UploadService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
