import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor (public authService: AuthService, private router: Router) {}
	
	canEdit;
	
	ngOnInit() {	
		
	}

	login(method) {
		if (method === 'google') {
			this.authService.googleLogin()
				.then( success => {
					this.router.navigate(['/home']);
				});
		} else {
			this.authService.facebookLogin()
				.then( success => {
					this.router.navigate(['/home']);
				});
		}
	}

}
