import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

	title = 'landing-page works! YUHUU';

	constructor() { }

	ngOnInit() {
	}

}
