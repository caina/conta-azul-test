import { Component, OnInit, SimpleChanges } from '@angular/core';
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

		<app-centralize-content>
			<app-pagination
				[totalOfRegisters]="totalVehicles"
				[registersPerPage]="TOTAL_RECORDS"
				[currentPage]="page"
				(pageOutput)="updateVehiclelist($event)"
			></app-pagination>
		</app-centralize-content>

	</app-container>
  `,
	styles: [`
		app-vehicle-list-table {
			margin: 10px;
		}
  `]
})
export class VehicleListComponent implements OnInit {

	public page = 0;
	public totalVehicles: number;
	public readonly TOTAL_RECORDS = 6;
	public selectedCars: Vehicle[] = [];

	constructor(private _router: Router, public _service: VehicleService) { }

	ngOnInit(): void {
		this.updateVehiclelist(0);
	}

	updateVehiclelist(page: number) {
		if (page < 0) {
			return;
		}
		this.page = page;
		this._service.list(this.TOTAL_RECORDS, page);
		this.updateTotalPages();
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
		this.updateVehiclelist(this.page);
		this.updateTotalPages();
	}


	updateTotalPages() {
		this._service.getTotalPages()
			.subscribe(_total => {
				this.totalVehicles = _total
			});
	}

}
