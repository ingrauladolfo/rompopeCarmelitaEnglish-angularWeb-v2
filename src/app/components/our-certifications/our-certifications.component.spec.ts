import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCertificationsComponent } from './our-certifications.component';

describe('OurCertificationsComponent', () => {
  let component: OurCertificationsComponent;
  let fixture: ComponentFixture<OurCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
