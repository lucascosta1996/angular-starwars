import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() childEvent = new EventEmitter();
  @Input() nextPage: any
  @Input() previousPage: any
  @Input() currentPage: any

  updateListAndPagination( page ){
    this.childEvent.emit( page );
  }
}
