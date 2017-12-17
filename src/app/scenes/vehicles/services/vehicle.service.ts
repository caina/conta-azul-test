import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Vehicle } from "../models/vehicle.model";
import { StoreService } from "../../../services/store.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class VehicleService {

	private vehicleSource = new BehaviorSubject<Vehicle[]>([]);
	public vehicles$ = this.vehicleSource.asObservable();

	constructor(private _database: StoreService) { }

	public list(itens: number, page: number) {
		this.vehicleSource.next(this._database.listByPages(itens, page));
	}

	public add(vehicle: Vehicle) {
		this._database.addVehicle(vehicle);
	}

	public find(id) {
		const vehicle = this._database.findVehicle(parseInt(id));
		return Observable.of(vehicle);
	}

	public edit(vehicle){
		this._database.editVehicle(vehicle);
	}

	public remove(vehicle: Vehicle[]) {
		vehicle.forEach(_el => {
			this._database.removeVehicle(_el.id);
		})
	}

}