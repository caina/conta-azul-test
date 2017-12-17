import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
	selector: 'app-vehicle-list',
	template: `
	<app-container>
		<app-vehicle-list-actions
			(newCarClick)="navigateToAddCar()"
		></app-vehicle-list-actions>
		<app-vehicle-list-table
			[vehicles]="_service.vehicles$ | async"
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
	constructor(private _router: Router, public _service: VehicleService) { }

	ngOnInit(): void {
		this._service.list(this.TOTAL_RECORDS,0);
	}

	navigateToAddCar() {
		this._router.navigate(['vehicles/register'])
	}

}
