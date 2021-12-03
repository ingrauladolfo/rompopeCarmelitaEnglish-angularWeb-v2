import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitasMomentsComponent } from './carmelitas-moments.component';

describe('CarmelitasMomentsComponent', () => {
  let component: CarmelitasMomentsComponent;
  let fixture: ComponentFixture<CarmelitasMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitasMomentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitasMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
