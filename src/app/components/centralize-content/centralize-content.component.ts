import { Component } from '@angular/core';

@Component({
	selector: 'app-centralize-content',
	template: `
	<section>
		<ng-content></ng-content>
	</section>
  `,
  styles:[`
  section {
	display: flex;
    justify-content: center;
  }
  `]
})
export class CentralizeContentComponent {
	constructor() { }
}
