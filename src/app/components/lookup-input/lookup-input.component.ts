import { Component } from '@angular/core';

@Component({
	selector: 'app-lookup-input',
	template: `
	<div>
		<input type="text" placeholder="Pesquisar"/>
		<span>@</span>
	</div>
  `,
	styleUrls: ['./lookup-input.component.scss']
})
export class LookupInputComponent {

	constructor() { }

}
