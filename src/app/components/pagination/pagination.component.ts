import { Component, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-pagination',
	template: `
		<nav aria-label="Page navigation" *ngIf="pages.length > 1">
			<ul class="pagination">
				<li class="page-item">
					<a class="page" (click)="pageOutput.emit(currentPage-1)" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span class="sr-only">Previous</span>
					</a>
				</li>

				<li *ngFor="let page of pages" class="page-item">
					<a class="page" [ngClass]="{'active':page===currentPage}" (click)="pageOutput.emit(page)">{{page+1}}</a>
				</li>

				<li class="page-item">
					<a class="page" (click)="pageOutput.emit(currentPage+1)" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span class="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
  `,
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

	public pages = [];
	@Input() totalOfRegisters: number;
	@Input() registersPerPage: number;
	@Input() currentPage: number;
	@Output() pageOutput: EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		const total = Math.ceil(this.totalOfRegisters / this.registersPerPage);
		if(total >= 1) {
			this.pages = new Array(total).fill(1).map((x,i)=>i);
		}
	}

}
