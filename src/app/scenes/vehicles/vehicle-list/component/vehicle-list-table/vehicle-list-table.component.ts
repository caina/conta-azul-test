import { Component, Input, SimpleChanges } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'app-vehicle-list-table',
	templateUrl: './vehicle-list-table.component.html',
	styleUrls: ['./vehicle-list-table.component.scss']
})
export class VehicleListTableComponent implements OnChanges{
	
	@Input() vehicles: Vehicle[];
	
	constructor() { }
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}
}
