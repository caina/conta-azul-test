import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-lookup-input',
	template: `
	<div class="input-group">
		<input type="text" class="form-control" [(ngModel)]="search" (keyup.enter)="searchOutput.emit(search)" id="inlineFormInputGroup" placeholder="Pesquisar">
		<div class="input-group-addon" (click)="searchOutput.emit(search)">
			<i class="fa fa-search" aria-hidden="true"></i>
		</div>
	</div>
  `,
	styleUrls: ['./lookup-input.component.scss']
})
export class LookupInputComponent {

	@Output() searchOutput: EventEmitter<string> = new EventEmitter<string>();
	search: string;

	constructor() { }

}
