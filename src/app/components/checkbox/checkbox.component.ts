import { Component, DoCheck, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	template: `
  <div class="checkbox">
	<label style="font-size: 1.4em">
		<input type="checkbox" [checked]="model" (click)="update()">
		<span class="cr"><i class="cr-icon fa fa-check"></i></span>
	</label>
	</div>
  `,
	styleUrls: ['./checkbox.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent{

	@Input() model: boolean;
	@Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() { }

	update() {
		this.model = !this.model;
		this.modelChange.emit(this.model);
	}

}
