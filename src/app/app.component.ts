import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	template: `
	<app-header></app-header>
	<router-outlet></router-outlet>
	`,
})
export class AppComponent {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) {

	}
}
