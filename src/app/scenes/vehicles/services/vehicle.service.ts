import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Vehicle } from "../models/vehicle.model";
import { StoreService } from "../../../services/store.service";

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

}