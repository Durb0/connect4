import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnZoneComponent } from './pawn-zone.component';

describe('FooterComponent', () => {
  let component: PawnZoneComponent;
  let fixture: ComponentFixture<PawnZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawnZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawnZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
