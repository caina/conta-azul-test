import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehicle-list',
	template: `
	<app-container>
		<app-vehicle-list-actions
			(newCarClick)="navigateToAddCar()"
		></app-vehicle-list-actions>
		<app-vehicle-list-table></app-vehicle-list-table>
	</app-container>
  `,
	styles: [`
		app-vehicle-list-actions {
			margin-bottom:10px;
		}
  `]
})
export class VehicleListComponent {

	constructor(private _router: Router) { }

	navigateToAddCar() {
		this._router.navigate(['vehicles/register'])
	}

}
