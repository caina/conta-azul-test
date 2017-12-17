import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
	selector: 'app-vehicle-list',
	template: `
	<app-container>
		<app-vehicle-list-actions
			(newCarClick)="navigateToAdd()"
			(deleteClick)="deleteSelectedCars()"
			[showDeleteButton]="selectedCars.length > 0"
		></app-vehicle-list-actions>
		<app-vehicle-list-table
			[vehicles]="_service.vehicles$ | async"
			(vehicleSelectedOutput)="navigateToEdit($event)"
			(toDeleteOutput)="updateSelectedCars($event)"
		></app-vehicle-list-table>
	</app-container>
  `,
	styles: [`
		app-vehicle-list-table {
			margin: 10px;
		}
  `]
})
export class VehicleListComponent implements OnInit{
	
	private readonly TOTAL_RECORDS = 6;
	public page = 0;
	private selectedCars: Vehicle[] = [];
	constructor(private _router: Router, public _service: VehicleService) { }

	ngOnInit(): void {
		this.updateVehiclelist();
	}

	private updateVehiclelist() {
		this._service.list(this.TOTAL_RECORDS,this.page);
	}

	navigateToAdd() {
		this._router.navigate(['vehicles/register'])
	}

	navigateToEdit(vehicleId: number) {
		this._router.navigate(['vehicles/register'], { queryParams: { vehicle_id: vehicleId } });
	}

	updateSelectedCars(vehicles: Vehicle[]) {
		this.selectedCars = vehicles;
	}

	deleteSelectedCars() {
		this._service.remove(this.selectedCars);
		this.updateVehiclelist();
	}

}
