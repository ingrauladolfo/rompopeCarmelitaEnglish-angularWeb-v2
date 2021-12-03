import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFamilyComponent } from './our-family.component';

describe('OurFamilyComponent', () => {
  let component: OurFamilyComponent;
  let fixture: ComponentFixture<OurFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
