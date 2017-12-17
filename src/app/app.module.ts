import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { VehicleListComponent } from './scenes/vehicles/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './scenes/vehicles/vehicle-register/vehicle-register.component';
import { StoreService } from './services/store.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		ComponentsModule,
		AppRoutingModule,
	],
	providers: [StoreService],
	bootstrap: [AppComponent]
})
export class AppModule { }
