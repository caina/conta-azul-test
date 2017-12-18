import { Component, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list-table',
	template: `
	<table class="custom-table table-hover">
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
				ngClass="{selected: vehicle.checked}"
				(dblclick)="vehicleSelectedOutput.emit(vehicle.id)" 
				(click)="markToRemove(vehicle)">

				<th>
					<input type="checkbox" id="ck{{vehicle.id}}" ([ngModel])="vehicle.checked" [checked]="vehicle.checked"/>
					<label for="ck{{vehicle.id}}"></label>
				</th>
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
