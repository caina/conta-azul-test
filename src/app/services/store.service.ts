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

		//todo deletar
		for (let i = 1; i < 5; i++) {
			const mock_vehicle = new Vehicle();
			mock_vehicle.marca = `GM${i}`;
			mock_vehicle.modelo = 'SS';
			this.addVehicle(mock_vehicle);
		}
	}

	public cleanStore(): void {
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

	public editVehicle(vehicle: Vehicle) {
		const index = this.store.findIndex(_el => _el.id == vehicle.id);
		this.store[index] = vehicle;
	}

	public getNumberOfVehicles() {
		return this.store.length;
	}

	public filter(expression): Vehicle[] {
		expression = expression.toLowerCase();
		
		return this.store.filter(_el => {
			if (_el.marca && _el.marca.toLowerCase().includes(expression)) {
				return true;
			} else if (_el.modelo && _el.modelo.toLowerCase().includes(expression)) {
				return true;
			} else if (_el.placa && _el.placa.toLowerCase().includes(expression)) {
				return true;
			} else if (_el.combustivel && _el.combustivel.toLowerCase().includes(expression)) {
				return true;
			}  else if (_el.valor === parseInt(expression)) {
				return true;
			}
			return false;
		})
	}
}