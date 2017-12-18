import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { LookupInputComponent } from './lookup-input/lookup-input.component';
import { ContainerComponent } from './container/container.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CentralizeContentComponent } from './centralize-content/centralize-content.component';

const COMPONENTS = [
	HeaderComponent,
	ButtonComponent,
	LookupInputComponent,
	ContainerComponent,
	PaginationComponent,
	CentralizeContentComponent
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [COMPONENTS],
})
export class ComponentsModule { }
