import { StoreService } from "./store.service";
import { Vehicle } from "../scenes/vehicles/models/vehicle.model";

const mock_vehicle = new Vehicle();
mock_vehicle.combustivel = 'Gasolina';
mock_vehicle.imagem = 'http://lorem.ipsun.dolors.sit.amet';
mock_vehicle.marca = 'GM';
mock_vehicle.modelo = 'SS';
mock_vehicle.placa = 'ITV2312';
mock_vehicle.valor = 100000;

describe('deve testar os servicos de armazenamento', () => {

	let service: StoreService;
	beforeEach(() => {
		service = new StoreService();
	})

	it('deve armazenar', () => {
		const savedVehicle = service.addVehicle(mock_vehicle);
		expect(savedVehicle.id).toBeTruthy();
	});

	it('deve encontrar veiculo', () => {
		const savedVehicle = service.addVehicle(mock_vehicle);
		const vehicleFound = service.findVehicle(savedVehicle.id);
		expect(vehicleFound.id).toBe(savedVehicle.id);
	});

	it('deve remover elemento', () => {
		const savedVehicle = service.addVehicle(mock_vehicle);
		service.removeVehicle(savedVehicle.id);

		const vehicleFound = service.findVehicle(savedVehicle.id);
		expect(vehicleFound).toBeUndefined();
	});

	it('deve pegar apenas os 6 primeiros elementos da pagina 1', () => {
		for (let i = 1; i < 120; i++) {
			const mock_vehicle = new Vehicle();
			mock_vehicle.marca = `GM${i}`;
			mock_vehicle.modelo = 'SS';
			service.addVehicle(mock_vehicle);
		}

		const vehicles = service.listByPages(6, 0);
		expect(vehicles.length).toBe(6);
		expect(vehicles[0].marca).toBe('GM1');
		expect(vehicles[5].marca).toBe('GM6');
	});

	it('deve pegar apenas os 6 primeiros elementos da pagina 2', () => {
		for (let i = 1; i < 120; i++) {
			const mock_vehicle = new Vehicle();
			mock_vehicle.marca = `GM${i}`;
			mock_vehicle.modelo = 'SS';
			service.addVehicle(mock_vehicle);
		}

		const vehicles = service.listByPages(6, 1);
		expect(vehicles.length).toBe(6);
		expect(vehicles[0].marca).toBe('GM7');
		expect(vehicles[5].marca).toBe('GM12');
	});

})