import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpCertificationComponent } from './haccp-certification.component';

describe('HaccpCertificationComponent', () => {
  let component: HaccpCertificationComponent;
  let fixture: ComponentFixture<HaccpCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
