import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitasCookinbookComponent } from './carmelitas-cookinbook.component';

describe('CarmelitasCookinbookComponent', () => {
  let component: CarmelitasCookinbookComponent;
  let fixture: ComponentFixture<CarmelitasCookinbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitasCookinbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitasCookinbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
