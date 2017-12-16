import { Component } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Router } from '@angular/router';

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

	constructor(private _router: Router) { }

	registerVehicle(vehicle: Vehicle) {
		console.log(vehicle);
	}

	registerCancel() {
		this._router.navigate(['/']);
	}
}
