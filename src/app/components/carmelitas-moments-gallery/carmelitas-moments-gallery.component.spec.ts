import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitasMomentsGalleryComponent } from './carmelitas-moments-gallery.component';

describe('CarmelitasMomentsGalleryComponent', () => {
  let component: CarmelitasMomentsGalleryComponent;
  let fixture: ComponentFixture<CarmelitasMomentsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarmelitasMomentsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitasMomentsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
