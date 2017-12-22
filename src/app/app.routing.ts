import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';


const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
        { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
        { path: 'products-list', component: ProductsListComponent, canActivate: [AuthGuard]},
    ]},

    // otherwise redirect to login
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: '**', redirectTo: 'login', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);