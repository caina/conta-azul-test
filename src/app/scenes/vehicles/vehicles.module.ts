import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleListTableComponent } from './vehicle-list/component/vehicle-list-table/vehicle-list-table.component';
import { VehicleListActionsComponent } from './vehicle-list/component/vehicle-list-actions/vehicle-list-actions.component';

import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleRegisterFormComponent } from './vehicle-register/component/vehicle-register-form/vehicle-register-form.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ComponentsModule,
		VehicleRoutingModule,
	],
	declarations: [
		VehicleListComponent,
		VehicleListActionsComponent,
		VehicleListTableComponent,
		VehicleRegisterComponent,
		VehicleRegisterFormComponent,
	]
})
export class VehiclesModule { }
