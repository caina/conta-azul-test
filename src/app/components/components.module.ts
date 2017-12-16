import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { LookupInputComponent } from './lookup-input/lookup-input.component';
import { ContainerComponent } from './container/container.component';

const COMPONENTS = [
	HeaderComponent,
	ButtonComponent,
	LookupInputComponent,
	ContainerComponent,
];

@NgModule({
	declarations: [COMPONENTS],
	exports: [COMPONENTS],
})
export class ComponentsModule { }
