import { Injectable } from "@angular/core";
import { Vehicle } from "../scenes/vehicles/models/vehicle.model";

@Injectable()
export class StoreService {

	private store: Array<Vehicle> = [];

	constructor() { }

	public addVehicle(vehicle: Vehicle) {
		vehicle.id = this.store.length + 1;
		this.store.push(vehicle);

		return vehicle;
	}

	public findVehicle(id: number) {
		return this.store.find(_element => _element.id === id);
	}

	public removeVehicle(id: number) {
		this.store = [...this.store.filter(_element => _element.id !== id)];
	}

	public listByPages(totalItens: number, page: number) {
		const begin = page * totalItens;
		return [...this.store.slice(begin, begin + totalItens)];
	}
}