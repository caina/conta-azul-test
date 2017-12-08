import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './scenes/vehicles/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './scenes/vehicles/vehicle-register/vehicle-register.component';

@NgModule({
	declarations: [
		AppComponent,
		VehicleListComponent,
		VehicleRegisterComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
