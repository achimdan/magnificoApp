import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component'
import { ProductsComponent } from './home/products/products.component';
import { ContactComponent } from './home/contact/contact.component';

import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { OrdersComponent } from './admin/orders/orders.component'


const appRoutes: Routes = [
    
    { path: '', component: HomeComponent, 
        children: [
            { path: '', redirectTo: 'home', pathMatch:'full'},
            { path: '', component: LandingPageComponent},
            { path: 'products', component: ProductsComponent},
            { path: 'contact', component: ContactComponent},
        ]
    },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], 
        children: [
            { path: '', redirectTo: 'admin', pathMatch:'full' },
            { path: '', component: LandingPageComponent },
            { path: 'products-list', component: ProductsListComponent},
            { path: 'add-product', component: AddProductComponent},
            { path: 'orders', component: OrdersComponent},
        ]
    },

    // otherwise redirect to login
    // { path: '', redirectTo: 'login', pathMatch:'full'},
    // { path: '**', redirectTo: 'login', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);