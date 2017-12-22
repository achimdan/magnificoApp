import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'
import { tap, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginComponent } from '../admin/login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private auth: AuthService, public dialog: MatDialog, private router: Router) { }

	loginDialog(): void {
		let dialogRef = this.dialog.open(LoginComponent, {
			width: '350px',
		});

		// dialogRef.disableClose = true;

		// dialogRef.beforeClose().subscribe(result => {
		// 	console.log('before');
		// 	this.dialog.closeAll();
		// });
			
		dialogRef.afterClosed().subscribe(result => {
			// let timeoutId = setTimeout(() => {  
			// 	this.router.navigate(['/admin/products-list']);
			// }, 100);
			// this.dialog.closeAll();
			
			// this.router.navigate(['/admin/products-list']);
			console.log('The dialog was closed');
		});
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> {

		return this.auth.user$.pipe(
			take(1),
			map(user => user && user.roles.admin ? true : false),
			tap(isAdmin => {
				if (!isAdmin) {
					console.error('Access denied - Admins only');
					this.loginDialog();
				}
			})
		);

	}
}