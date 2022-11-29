import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEndGameComponent } from './dialog-end-game.component';

describe('DialogEndGameComponent', () => {
  let component: DialogEndGameComponent;
  let fixture: ComponentFixture<DialogEndGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEndGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEndGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
