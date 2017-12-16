import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { VehicleRegisterComponent } from "./vehicle-register/vehicle-register.component";

const routes: Routes = [
	{ path: '', component: VehicleListComponent },
	{ path: 'register', component: VehicleRegisterComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VehicleRoutingModule { }