import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCatalogueComponent } from './our-catalogue.component';

describe('OurCatalogueComponent', () => {
  let component: OurCatalogueComponent;
  let fixture: ComponentFixture<OurCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
