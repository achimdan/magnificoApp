import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

	email: string;
	password: string;

	constructor (public authService: AuthService, private router: Router, public dialog: MatDialog) {}
	
	ngOnInit() {	
		
	}

	login(method) {
		if (method === 'google') {
			this.authService.googleLogin()
			} else if (method === 'facebook') {
				this.authService.facebookLogin()
		} else {
			this.authService.emailLogin(this.email, this.password)
		}
	}

	closeDialog() {
		this.dialog.closeAll();
		this.router.navigate(['/']);
	}

}
