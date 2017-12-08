import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'contact', component: ContactComponent},

    // otherwise redirect to home
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', redirectTo: 'home', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);