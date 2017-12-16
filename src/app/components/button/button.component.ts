import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
	<button type="button" class="btn" (click)="onClick.emit()">
		<ng-content></ng-content>
	</button>
	`,
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

	@Output() onClick: EventEmitter<void> = new EventEmitter<void>();
	constructor() { }

}
