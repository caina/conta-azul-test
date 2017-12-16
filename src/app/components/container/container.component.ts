import { Component } from "@angular/core";

@Component({
	selector: 'app-container',
	template: `
		<div class="container"><ng-content></ng-content></div>
	`,
	styles: [`
		div {
			margin-top: 20px;
		}
	`]
})
export class ContainerComponent {
	constructor(){}	
}