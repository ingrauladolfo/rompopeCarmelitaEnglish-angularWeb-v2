import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingsPointsMexicoComponent } from './sellings-points-mexico.component';

describe('SellingsPointsMexicoComponent', () => {
  let component: SellingsPointsMexicoComponent;
  let fixture: ComponentFixture<SellingsPointsMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingsPointsMexicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingsPointsMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
