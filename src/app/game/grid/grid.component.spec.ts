import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';


const test_grid_empty = [
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none']
];

const test_grid_win_row = [
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'red'],
  ['none', 'none', 'none', 'none', 'none', 'red'],
  ['none', 'none', 'none', 'none', 'none', 'red'],
  ['none', 'none', 'none', 'none', 'none', 'red']
];

const test_grid_win_column = [
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'red', 'red', 'red', 'red'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none']
];

const test_grid_win_diagonal = [
  ['none', 'none', 'none', 'none', 'none', 'red'],
  ['none', 'none', 'none', 'none', 'red', 'none'],
  ['none', 'none', 'none', 'red', 'none', 'none'],
  ['none', 'none', 'red', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none'],
  ['none', 'none', 'none', 'none', 'none', 'none']
];

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});