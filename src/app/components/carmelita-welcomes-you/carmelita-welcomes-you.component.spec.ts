import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitaWelcomesYouComponent } from './carmelita-welcomes-you.component';

describe('CarmelitaWelcomesYouComponent', () => {
  let component: CarmelitaWelcomesYouComponent;
  let fixture: ComponentFixture<CarmelitaWelcomesYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitaWelcomesYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitaWelcomesYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
