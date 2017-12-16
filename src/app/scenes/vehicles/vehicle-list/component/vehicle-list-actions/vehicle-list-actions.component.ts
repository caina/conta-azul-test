import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-actions',
	template: `
	<div>
		<span>
			<app-button (onClick)="newCarClick.emit()">Novo Carro</app-button>
			<app-button>Excluir Carro</app-button>
		</span>
		<app-lookup-input></app-lookup-input>
	</div>
	`,
	styleUrls: ['./vehicle-list-actions.component.scss']
})
export class VehicleListActionsComponent {

	@Output() newCarClick: EventEmitter<void> = new EventEmitter<void>();
	constructor() { }

	teste() {
		console.log("???");

	}

}
