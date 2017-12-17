export class Vehicle {
	id: number;
	combustivel: string;
	imagem: string;
	marca: string;
	modelo: string;
	placa: string;
	valor: number;
	checked: boolean = false;

	constructor(
		id?: number,
		combustivel?: string,
		imagem?: string,
		marca?: string,
		modelo?: string,
		placa?: string,
		valor?: number
	) {
		this.id = id;
		this.combustivel = combustivel;
		this.imagem = imagem;
		this.marca = marca;
		this.modelo = modelo;
		this.placa = placa;
		this.valor = valor;
	}
}
