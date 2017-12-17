import { Component, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-table',
	template: `
	<table class="table">
		<thead>
			<tr>
				<th scope="col"><input type="checkbox"></th>
				<th scope="col">Placa</th>
				<th scope="col">Modelo</th>
				<th scope="col">Marca</th>
				<th scope="col">Foto</th>
				<th scope="col">Combustível</th>
				<th scope="col">Valor</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let vehicle of vehicles" (click)="vehicleSelectedOutput.emit(vehicle.id)">
				<th scope="row">1</th>
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
	constructor() { }
	
}
