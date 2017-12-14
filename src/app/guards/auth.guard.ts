// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service'
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';

// @Injectable()
// export class AuthGuard implements CanActivate {
// 	constructor(private auth: AuthService, private router: Router) { }
	
// 	canActivate(
// 		next: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot): Observable<boolean> | boolean {
// 		return this.auth.user$
// 			.take(1)
// 			.map(user => !!user)
// 			.do(loggedIn => {
// 				if (!loggedIn) {
// 					console.log('access denied')
// 					this.router.navigate(['/login']);
// 				}
// 			})
// 	}
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(user => user && user.roles.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error('Access denied - Admins only')
        }
      })
    );

  }
}