import { Injectable } from '@angular/core';
import { Vehicle } from '../scenes/vehicles/models/vehicle.model';

@Injectable()
export class StoreService {

	private store: Array<Vehicle> = [];

	constructor() {
		this.store = [
			new Vehicle(1, 'Flex', null, 'Volkswagem', 'Gol', 'FFF-5498', 20000),
			new Vehicle(2, 'Gasolina', null, 'Volkswagem', 'Fox', 'FOX-4125', 20000),
			new Vehicle(3, 'Alcool', 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg', 'Volkswagen', ' Fusca', ' PAI-4121', 20000)
		];
	}

	public cleanStore():void {
		this.store = [];
	}

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