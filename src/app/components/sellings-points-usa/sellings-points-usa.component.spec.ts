import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingsPointsUsaComponent } from './sellings-points-usa.component';

describe('SellingsPointsUsaComponent', () => {
  let component: SellingsPointsUsaComponent;
  let fixture: ComponentFixture<SellingsPointsUsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingsPointsUsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingsPointsUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
