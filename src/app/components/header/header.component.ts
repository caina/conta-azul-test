import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
	<nav class="navbar navbar-expand-md navbar-light">
		<div class="container">
			<a class="navbar-brand" href="/">
				// teste
			</a>
		</div>
	</nav>
	`,
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor() { }

}
