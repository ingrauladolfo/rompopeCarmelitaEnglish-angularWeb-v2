import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingsPointsComponent } from './sellings-points.component';

describe('SellingsPointsComponent', () => {
  let component: SellingsPointsComponent;
  let fixture: ComponentFixture<SellingsPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingsPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingsPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
