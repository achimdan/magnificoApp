import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},

    // otherwise redirect to home
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', redirectTo: 'home', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);