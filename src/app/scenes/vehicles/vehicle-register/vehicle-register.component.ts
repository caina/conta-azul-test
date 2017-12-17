import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
	selector: 'app-vehicle-register',
	template: `
	<app-container>
		<app-vehicle-register-form
			(vehicleFormOutput)="registerVehicle($event)"
			(cancelOutput)="registerCancel()"
			[vehicle]="selectedVehicle"
		></app-vehicle-register-form>
	</app-container>
  `,
})
export class VehicleRegisterComponent implements OnInit {

	public selectedVehicle: Vehicle;

	constructor(
		private _router: Router,
		private _activeRoute: ActivatedRoute,
		private _service: VehicleService) { }

	ngOnInit(): void {
		this._activeRoute.queryParams.subscribe(params => {
			this._service.find(params.vehicle_id)
				.subscribe(vehicle => this.selectedVehicle = vehicle);
		});
	}

	registerVehicle(vehicle: Vehicle) {
		if(vehicle.id) {
			this._service.edit(vehicle);
		} else {
			this._service.add(vehicle);
		}
		this._router.navigate(['/']);
	}

	registerCancel() {
		this._router.navigate(['/']);
	}

}
