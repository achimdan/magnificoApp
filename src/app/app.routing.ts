import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: 'contact', component: ContactComponent},

    // otherwise redirect to login
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: '**', redirectTo: 'login', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);