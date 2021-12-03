import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomScfiCertificationComponent } from './nom-scfi-certification.component';

describe('NomScfiCertificationComponent', () => {
  let component: NomScfiCertificationComponent;
  let fixture: ComponentFixture<NomScfiCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomScfiCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomScfiCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
