import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'vehicles', loadChildren: './scenes/vehicles/vehicles.module#VehiclesModule' },
	{ path: '', redirectTo: '/vehicles', pathMatch: 'full' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }