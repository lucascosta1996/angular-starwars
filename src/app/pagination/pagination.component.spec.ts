import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Pagination', () => {
    expect(component).toBeTruthy();
  });

  it('previous button should not exist on the first page', () => {
    component.currentPage = 1;
    component.updateListAndPagination( 1 );
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#previous')).toBeFalsy();
  });
  it('next button should not exist on the last page', () => {
    component.currentPage = 9;
    component.updateListAndPagination( 9 );
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#next')).toBeFalsy();
  });

  it('current page button should be 1', () => {
    component.currentPage = 1;
    component.updateListAndPagination( 1 );
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#current').innerText).toEqual( '1' );
  });

  it('next page button should be 2', () => {
    component.nextPage = 2;
    component.updateListAndPagination( 1 );
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#next').innerText).toEqual( '2' );
  });
});
