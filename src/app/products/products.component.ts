import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	heroes: any[];

	constructor(db: AngularFireDatabase) {
		db.list('/heroes')
			.valueChanges().subscribe(heroes => {
				this.heroes = heroes;
				console.log(this.heroes);
			})
	}

	ngOnInit() {
	}

}
