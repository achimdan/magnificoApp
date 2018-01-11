import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	email: string;
	password: string;

	constructor (public authService: AuthService, private router: Router, public dialog: MatDialog) {}
	
	canEdit;
	
	ngOnInit() {	
		
	}

	login(method) {
		if (method === 'google') {
			this.authService.googleLogin()
				.then( () => {
					this.router.navigate(['admin']);
					// this.dialog.closeAll();
				});
		} else if (method === 'facebook') {
			this.authService.facebookLogin()
				.then( () => {
					this.dialog.closeAll();
				});
		} else {
			this.authService.emailLogin(this.email, this.password)
				.then( () => {
					this.dialog.closeAll();
				});
		}
	}

}
