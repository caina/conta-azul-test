import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../../../models/vehicle.model';

@Component({
	selector: 'app-vehicle-register-form',
	template: `
	<form #form [formGroup]="registerForm" (ngSubmit)="risterVehicleAct(registerForm.value)">
		<div class="form-row">
			<div class="form-group col-md-3">
				<label for="input-placa">Placa (sem separação)</label>
				<input type="text" formControlName="placa" [ngClass]="{'is-invalid': !registerForm.controls['placa'].valid && registerForm.controls['placa'].touched}" class="form-control" id="input-placa" placeholder="Placa">
			</div>
			<div class="form-group col-md-3">
				<label for="input-combustivel">Combustível</label>
				<select class="form-control" formControlName="combustivel" id="input-combustivel"
				[ngClass]="{'is-invalid': !registerForm.controls['combustivel'].valid && registerForm.controls['combustivel'].touched}">
					<option value="0" selected>Selecione</option>
					<option value="Gasolina">Gasolina</option>
					<option value="Alcool">Álcool</option>
					<option value="Flex">Flex</option>
				</select>
			</div>
			<div class="form-group col-md-6">
				<label for="input-foto">Link foto</label>
				<input type="text" formControlName="foto" class="form-control" id="input-foto" placeholder="Foto">
			</div>
		</div>

		<div class="form-row">
			<div class="form-group col-md-3">
				<label for="input-modelo">Modelo</label>
				<input type="text" formControlName="modelo" class="form-control" id="input-modelo" placeholder="Modelo"
				[ngClass]="{'is-invalid': !registerForm.controls['modelo'].valid && registerForm.controls['modelo'].touched}">
			</div>
			<div class="form-group col-md-3">
				<label for="input-marca">Marca</label>
				<input type="text" formControlName="marca" class="form-control" id="input-marca" placeholder="Marca"
				[ngClass]="{'is-invalid': !registerForm.controls['marca'].valid && registerForm.controls['marca'].touched}">
			</div>
			<div class="form-group col-md-3">
				<label for="input-valor">Valor</label>
				<input type="number" formControlName="valor" class="form-control" id="input-valor" placeholder="Valor"
				[ngClass]="{'is-invalid': !registerForm.controls['valor'].valid && registerForm.controls['valor'].touched}">
			</div>
		</div>

		<div class="form-row">
			<div class="form-group">
				<app-button buttonType="primary" type="submit" [isDisabled]="!registerForm.valid">Salvar</app-button>
				<app-button buttonType="warning" (onClick)="this.cancelOutput.emit()">Cancelar</app-button>
			</div>
		</div>
	</form>
	`,
	styleUrls: ['./vehicle-register-form.component.scss']
})
export class VehicleRegisterFormComponent {

	registerForm: FormGroup;
	@Output() vehicleFormOutput: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
	@Output() cancelOutput: EventEmitter<void> = new EventEmitter<void>();

	constructor(private _formBuilder: FormBuilder) {
		this.registerForm = _formBuilder.group({
			'id': '',
			'placa': [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
			'combustivel': [null, Validators.required],
			'foto': [null],
			'modelo': [null, Validators.required],
			'marca': [null, Validators.required],
			'valor': [null, Validators.required]
		});
	}

	risterVehicleAct(vehicle: Vehicle) {
		console.log(vehicle);
		this.registerForm.reset();
		this.vehicleFormOutput.emit(vehicle);
	}

}
