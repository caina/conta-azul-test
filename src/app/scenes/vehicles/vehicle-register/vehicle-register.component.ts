import { Component } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
	selector: 'app-vehicle-register',
	template: `
	<app-container>
		<app-vehicle-register-form
			(vehicleFormOutput)="registerVehicle($event)"
			(cancelOutput)="registerCancel()"
		></app-vehicle-register-form>
	</app-container>
  `,
})
export class VehicleRegisterComponent {

	constructor(private _router: Router, private _service: VehicleService) { }

	registerVehicle(vehicle: Vehicle) {
		console.log(vehicle);
		this._service.add(vehicle);
		this._router.navigate(['/']);
	}

	registerCancel() {
		this._router.navigate(['/']);
	}
}
