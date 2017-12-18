import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-actions',
	template: `
	<section>
		<span>
			<app-button buttonType="primary" (onClick)="newCarClick.emit()">Novo Carro</app-button>
			<app-button buttonType="warning" (onClick)="deleteClick.emit()" *ngIf="showDeleteButton">Excluir Carro</app-button>
		</span>
		<app-lookup-input
			(searchOutput)="searchOutput.emit($event)"
		></app-lookup-input>
	</section>
	`,
	styleUrls: ['./vehicle-list-actions.component.scss']
})
export class VehicleListActionsComponent {

	@Input() showDeleteButton: boolean;
	@Output() newCarClick: EventEmitter<void> = new EventEmitter<void>();
	@Output() deleteClick: EventEmitter<void> = new EventEmitter<void>();
	@Output() searchOutput: EventEmitter<string> = new EventEmitter<string>();
	constructor() { }
}
