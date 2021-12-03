import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitasRecipesGalleryComponent } from './carmelitas-recipes-gallery.component';

describe('CarmelitasRecipesGalleryComponent', () => {
  let component: CarmelitasRecipesGalleryComponent;
  let fixture: ComponentFixture<CarmelitasRecipesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitasRecipesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitasRecipesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
