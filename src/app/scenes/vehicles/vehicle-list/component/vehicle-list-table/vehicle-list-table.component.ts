import { Component, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-table',
	template: `
	<table class="table">
		<thead>
			<tr>
				<th scope="col"><input type="checkbox" (click)="markAllToRemove()"></th>
				<th scope="col">Placa</th>
				<th scope="col">Modelo</th>
				<th scope="col">Marca</th>
				<th scope="col">Foto</th>
				<th scope="col">Combustível</th>
				<th scope="col">Valor</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let vehicle of vehicles" 
				(dblclick)="vehicleSelectedOutput.emit(vehicle.id)" 
				(click)="markToRemove(vehicle)">

				<th scope="row">
					<input type="checkbox" ([ngModel])="vehicle.checked" [checked]="vehicle.checked"/>
				</th>
				<td>{{vehicle.placa}}</td>
				<td>{{vehicle.modelo}}</td>
				<td>{{vehicle.marca}}</td>
				<td>Sem foto</td>
				<td>{{vehicle.combustivel}}</td>
				<td>{{vehicle.valor}}</td>
			</tr>
			
		</tbody>
	</table>
	`,
	styleUrls: ['./vehicle-list-table.component.scss']
})
export class VehicleListTableComponent {

	@Input() vehicles: Vehicle[];
	@Output() vehicleSelectedOutput: EventEmitter<number> = new EventEmitter<number>();
	@Output() toDeleteOutput: EventEmitter<Vehicle[]> = new EventEmitter<Vehicle[]>();

	constructor() { }

	markAllToRemove() {
		this.vehicles.forEach(_el => _el.checked = !_el.checked);
		this.emitRemoveOutput();
	}

	markToRemove(vehicle: Vehicle) {
		vehicle.checked = !vehicle.checked;
		this.emitRemoveOutput();
	}

	emitRemoveOutput() {
		this.toDeleteOutput.emit(this.vehicles.filter(_el => _el.checked));
	}

}
