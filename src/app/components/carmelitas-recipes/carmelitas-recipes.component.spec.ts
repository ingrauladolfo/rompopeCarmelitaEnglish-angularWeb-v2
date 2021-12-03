import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitasRecipesComponent } from './carmelitas-recipes.component';

describe('CarmelitasRecipesComponent', () => {
  let component: CarmelitasRecipesComponent;
  let fixture: ComponentFixture<CarmelitasRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitasRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitasRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
