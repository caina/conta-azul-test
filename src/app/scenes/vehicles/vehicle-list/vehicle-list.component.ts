import { Vehicle } from '../models/vehicle.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-vehicle-list',
	template: `
	<app-container>
		<app-vehicle-list-actions
			(newCarClick)="navigateToAddCar()"
		></app-vehicle-list-actions>
		<app-vehicle-list-table
			[vehicles]="vehicles | async"
		></app-vehicle-list-table>
	</app-container>
  `,
	styles: [`
		app-vehicle-list-table {
			margin: 10px;
		}
  `]
})
export class VehicleListComponent {

	vehicles: Observable<any[]>;

	constructor(private _router: Router) { }

	navigateToAddCar() {
		this._router.navigate(['vehicles/register'])
	}

}
