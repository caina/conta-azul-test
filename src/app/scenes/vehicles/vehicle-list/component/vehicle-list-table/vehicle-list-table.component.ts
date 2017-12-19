import { Component, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-table',
	template: `
	<table class="table table-hover">
		<thead>
			<tr>
				<th scope="col">
					<app-checkbox
					(modelChange)="markAllToRemove($event)"
					></app-checkbox>
				</th>
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
				[ngClass]="{selected: vehicle.checked}"
				(dblclick)="vehicleSelectedOutput.emit(vehicle.id)" 
				(click)="markToRemove(vehicle)">

				<td>
					<app-checkbox
						[(model)]="vehicle.checked"
					></app-checkbox>
				</td>
				<td>{{vehicle.placa}}</td>
				<td>{{vehicle.modelo}}</td>
				<td>{{vehicle.marca}}</td>

				<td *ngIf="vehicle.imagem"><a href="{{vehicle.imagem}}" target="_blank">Imagem</a></td>
				<td *ngIf="!vehicle.imagem">Sem Foto</td>

				<td>{{vehicle.combustivel}}</td>
				<td>{{vehicle.valor | currency:'BRL'}}</td>
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

	markAllToRemove(marked) {
		this.vehicles.forEach(_el => _el.checked = marked);
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
