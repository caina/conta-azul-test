import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
	<button type="button" [disabled]="isDisabled" class="btn" [style.background-color]="getColor()" (click)="onClick.emit()">
		<ng-content></ng-content>
	</button>
	`,
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

	@Input() buttonType: string;
	@Input() isDisabled: boolean;
	@Output() onClick: EventEmitter<void> = new EventEmitter<void>();
	constructor() { }

	getColor() {
		if (this.buttonType === 'primary') {
			return '#00C45A';
		}
		if (this.buttonType === 'warning') {
			return '#C4383E';
		}
	}
}
